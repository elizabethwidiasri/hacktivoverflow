import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../helpers/axios'
import router from '../router'
import { ToastProgrammatic as Toast } from 'buefy'
// import { fail } from 'assert'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    questions: []
  },
  mutations: {
    SET_IS_LOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_QUESTION (state, payload) {
      state.questions = payload
    }

  },
  actions: {
    login ({ commit }, payload) {
      axios.post('/users/login', payload)
        .then(({ data }) => {
          console.log(data)
          commit('SET_IS_LOGIN', true)
          localStorage.setItem('token', data.token)
          router.push('/')
        })
        .catch(console.log)
    },
    signUp ({ commit }, payload) {
      console.log('masooooook signup')
      axios.post('/users/signup', payload)
        .then(({ data }) => {
          console.log(data)
          commit('SET_IS_LOGIN', true)
          localStorage.setItem('token', data.token)
          router.push('/')
        })
        .catch(err => {
          console.log(err.response.data.message.join('<br>'), 'joinmnnnnnn')
          let str = ''
          for (let i = 0; i < err.response.data.message.length; i++) {
            str += err.response.data.message[i] + '<br>'
            console.log(str, '<<<<<<<<')
          }
          Toast.open(str)
        })
    },
    askQuestion ({ commit }, payload) {
      const token = payload.token
      axios.post('/questions', payload, {
        headers: {
          token
        }
      })
        .then(({ data }) => {
          console.log(data)
          this.$router.push('/questions')
        })
        .catch(err => {
          Toast.open(err.response)
        })
    },
    fetchQuestions ({ commit }, payload) {
      axios.get('/questions')
        .then(({ data }) => {
          console.log(data)
          commit('SET_QUESTION', data)
        })
        .catch(err => {
          Toast.open(err.response)
        })
    }
  },
  modules: {
  }
})
