<template lang="html">
  <div class="">
    <about  :profile="profile"></about>
    <projects :projects="projects"></projects>
    <services :services="services"></services>
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
import _projects from './services/projects'
import _services from './services/services'
import _profile from './services/profiles'


export default{
  data(){
    return{
      projects: [],
      services: [],
      profile: {},
    }

  },
  components:{
    'about': about,
    'projects': projects,
    'services': services,
    'project-management': projectManager,
    'working-together': workingTogether
  },
  created(){
    _projects.getAll().then(resp=>{
      this.projects = resp
    })
    _services.getAll().then(resp=>{
      this.services =  resp
    })
    _profile.get().then(resp=>{
      this.profile = resp
    })
  },
  mounted(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({
      scrollOffset:90
    });
  }
}
</script>
