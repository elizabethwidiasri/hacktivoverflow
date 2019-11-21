<template>
  <div>
    <div class="container">
    <QuestionPage></QuestionPage>
    </div>
  </div>
</template>

<script>
import QuestionPage from '../components/QuestionPage'

export default {
  name: 'questions',
  components: {
    QuestionPage
  }
}
</script>

<style scoped>
.container {
  max-width: 80%
}
</style>
