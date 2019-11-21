<template>
  <div>
    <p>Ask a public question</p>

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
        <div class="buttons">
  <button @click="askQuestion" class="button is-primary">Submit</button>
</div>
    </section>
</template>
      <!-- form  -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ask-question',
  data: function () {
    return {
      title: '',
      body: '',
      tags: ''
    }
  },
  methods: {
    askQuestion () {
      const body = {
        token: localStorage.getItem('token'),
        title: this.title,
        description: this.body
      }
      this.$store.dispatch('askQuestion', body)
    }
  }
}
</script>

<style>
.editor {
  text-align: left;
}
</style>
