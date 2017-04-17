<template lang="html">
  <div class="">
  <div id="projects" class="scrollspy">
      <div class="section no-pad-bot">
        <div class="container">
          <h3 class="header center teal-text text-lighten-2 wm-b-30">
            PROYECTOS RECIENTES</h3>

          <!-- <div class="row center">
            <h5 class="header col s12 light">Tenemos los mejores servicios para lograr que tu empresa sea la numero uno en el mercado digital.</h5>
          </div> -->
          <div class="row">
            <div class="col s12 m6 l4 pr-0-1"
              v-for="item in projects">
              <div class="card small">
                <div class="card-image waves-effect waves-block waves-light">
                  <img :src="item.image" class="activator"></div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    <strong class="uppercase">{{item.name}}</strong>
                    <i class="material-icons right wm-t-10">more_vert</i></span></div>
                <div class="card-reveal"><span class="card-title grey-text text-darken-4">
                  <strong class="uppercase">
                  {{item.name}}</strong>
                  <i class="material-icons right">close</i></span>
                  <p class="black-text" v-html="item.description">
                  </p>
                </div>
              </div>
            </div>
        </div>
          <div class="row center wm-t-30"><a id="download-button" class="btn-large waves-effect waves-light teal lighten-1">VER PROYECTOS</a></div>
        </div>
      </div>
      <!-- <div class="parallax"><img src="imgs/thing.jpg" alt="Unsplashed background img 1"></div> -->
    </div>
    <div class="divider wm-t-30">

    </div>
  </div>
</template>

<script>
export default {
  props: ['projects'],
}
</script>

<style lang="css">
</style>
