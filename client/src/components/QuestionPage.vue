<template>
  <div>
    <div class="container">
    <div class="columns">
      <div class="column is-one-quarter">
        <!-- panel -->
          <nav class="panel">
            <a class="panel-block">
              <span class="panel-icon">
              </span>
              Home
            </a>
            <a class="panel-block">
              <span class="panel-icon">
              </span>
              PUBLIC
            </a>
            <a class="panel-block is-active">
              <span class="panel-icon">
                <i class="fas fas-globe-americas"></i>
              </span>
              Stack Overflow
            </a>
            <a class="panel-block">
              <span class="panel-icon">
              </span>
              Tags
            </a>
            <a class="panel-block">
              <span class="panel-icon">
              </span>
              Users
            </a>
            <label class="panel-block"> <span class="panel-icon">
              </span>
              Jobs
            </label>
          </nav>
      </div>
      <div class="column">
        <div class="head-question">
        <p style="font-size: 25px;">All Question</p>
        <button @click="askQuestion" class="button is-info">Ask Question</button>
        </div>
        <div class="card">
  <div v-for="question in questions" :key="question._id" class="card-content">
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
        <p @click="$router.push(`/questions/${question._id}`)" style="cursor: pointer;" class="title is-4">{{question.title}}</p>
        <!-- {{questions}} -->
        <div class="content">
          {{question.description}}

<div class="tags are-medium">
  <span class="tag is-normal">first</span>
  <span class="tag is-normal">second</span>
  <span class="tag is-normal">last</span>

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
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'question-page',
  data: function () {
    return {

    }
  },
  methods: {
    askQuestion () {
      this.$router.push('/ask-question')
    }
  },
  created () {
    this.$store.dispatch('fetchQuestions')
  },
  computed: {
    questions () {
      return this.$store.state.questions
    }
  }
}
</script>

<style>
p {
  font-size: 9px;
}
.head-question {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 9px;
}
.left {
  width: 35px;
  margin-right: 20px;
}
.media-left {
  margin-right: 35px;
}
</style>
