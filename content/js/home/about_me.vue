<template lang="html">
  <div class="container scrollspy" id="home">
      <div class="section">
        <div class="row">
          <div class="col s12 center">
            <h3 class="teal-text text-darken-2 uppercase">
              {{profile.name}}  {{profile.lastname}}</h3>
            <p class="center rem-2">
              <strong >
                {{profile.description}}
              </strong></p>
              <img :src="profile.picture" width="150px" class="circle responsive-img">
            <p class="left-align light center"
            v-html="profile.about_me">
            </p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['profile'],
}
</script>

<style lang="sass">
</style>
