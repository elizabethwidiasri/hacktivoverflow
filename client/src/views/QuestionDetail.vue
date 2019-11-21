<template>
  <div class="container">
    <div class="Qtitle">
    this is the space for question title
    </div>
    <div class="Qdetil">
      <div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <div class="number">
            0
          </div>
          <div class="label">
            vote
          </div>
          <div class="number">
            0
          </div>
          <div class="label">
            answer
          </div>
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
      this is where i write down my questions. this is where i write down my questions. this is where i write down my questions .

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
            <b-input value=""></b-input>
        </b-field>
        <b-field label="Body">
          <wysiwyg v-model="myHTML" />
        </b-field>
        <b-field label="Tags">
            <b-input value=""></b-input>
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

}
</script>

<style>

</style>
