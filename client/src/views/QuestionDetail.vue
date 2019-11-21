<template>
  <div class="container">
    <div class="Qtitle">
    {{question.title}}
    <!-- {{question}} -->
    </div>
    <div class="Qdetil">
      <div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <div class="number">
            {{question.upVotes.length}}
          </div>
          <div class="label">
            vote
          </div>
          <div class="number">
            {{question.answers.length}}
          </div>
          <div class="label">
            answer
          </div>
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          {{question.description}}
<div class="tags are-medium">
  <span class="tag is-normal">Normal</span>
  <span class="tag is-normal">Normal</span>
  <span class="tag is-normal">Normal</span>

</div>
    </div>
      </div>
      <div class="container left">
      <figure class="image is-48x48">
          <div class="label">
           <p style="font-size: 7px;"> aksed 5 seconds ago </p>
          </div>
          <figure>
            <img src="../assets/user.png" alt="">
          </figure>
          <div class="label">
            <p>Laura Vofh</p>
          </div>
        </figure>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="ans-form">
       <div class="container editor">
      <!-- form  -->
      <template>
    <section>
        <b-field label="Title">
            <b-input v-model="title"></b-input>
        </b-field>
        <b-field label="Body">
          <wysiwyg v-model="body" />
        </b-field>
        <b-field label="Tags">
            <b-input v-model="tags"></b-input>
        </b-field>
    </section>
</template>
      <!-- form  -->
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionDetail',
  data: function () {
    return {
      title: '',
      body: '',
      tags: ''
    }
  },
  created () {
    const payload = {
      token: localStorage.getItem('token'),
      id: this.$route.params.id
    }
    this.$store.dispatch('fetchOneQuestion', payload)
  },
  computed: {
    question () {
      return this.$store.state.question
    }
  }
}
</script>

<style>

</style>
