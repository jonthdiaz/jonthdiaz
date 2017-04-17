<template lang="html">
  <div class="">
    <about></about>
    <projects></projects>
    <services></services>
    <project-management></project-management>
    <working-together></working-together>
  </div>
</template>

<script>
import about from './home/about_me.vue'
import projects from './home/projects.vue'
import services from './home/services.vue'
import projectManager from './home/project_manager.vue'
import workingTogether from './home/working-together.vue'


export default{
  data(){
    return {
      msg: 'Hello word!'
    }
  },
  components:{
    'about': about,
    'projects': projects,
    'services': services,
    'project-management': projectManager,
    'working-together': workingTogether
  },
  mounted(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
  }
}
</script>
