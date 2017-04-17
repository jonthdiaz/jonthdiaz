<template lang="html">
  <div class="">
    <div class="container scrollspy" id="services">
      <div class="section">
        <div class="row">
          <h3 class="teal-text text-lighten-2 center">SERVICIOS</h3>
          <div class="col s12 m6 l4 pr-0-1"
          v-for="item in services">
            <div class="card small">
              <div class="card-image waves-effect waves-block waves-light">
                <img :src="item.image" height="212px" class="activator"></div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  <strong class="uppercase">{{item.name}}</strong>
                  <i class="material-icons right wm-t-10">more_vert</i>
                </span>
              </div>
              <div class="card-reveal"><span class="card-title grey-text text-darken-4">
                <strong>{{item.name}}</strong><i class="material-icons right">close</i></span>
                <p>{{item.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divider wm-t-30">

    </div>

  </div>
</template>

<script>
export default {
  props: ['services'],
}
</script>

<style lang="sass">
</style>
