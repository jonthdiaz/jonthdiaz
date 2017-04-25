<template lang="html">
<div class="">
  <div class="container">
    <div class="section">
      <div class="row">
        <div class="col s12 center">
          <h3>Trabajemos juntos</h3>
          <p class="left-align light rem-2 center">Si estas interesado en iniciar un nuevo proyecto o si necesitas alguna consultoria tecnologica puedes contactarte conmigo.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <form class="col s12" method="post" action="/api/forms/contact"
    name="formContact"
    v-on:submit.prevent="formSubmit"
    v-model="form">
       <div class="row">
         <div class="input-field col s12 m4 pr-0-1 wm-b-20">
           <input type="text" class="validate wm-0-imp" v-model.trim="name"
           @input="$v.name.$touch()">
           <label for="name">Nombre </label>
           <p class="wm-0-imp rem-0-7 red-text" v-if="$v.name.$error">
             Este campo es requerido
           </p>
         </div>
         <div class="input-field col s12 m4 pr-0-1 wm-b-20">
           <input id="email" type="email" class="validate wm-0-imp" v-model="email"
           @input="$v.email.$touch()">
           <label for="email">Email</label>
           <p class="wm-0-imp rem-0-7 red-text" v-if="$v.email.$error">
             Email invalido
           </p>
         </div>
         <div class="input-field col s12 m4 pr-0-1 wm-b-20">
           <input id="phone" type="text" class="validate wm-0-imp" v-model="phone"
           @input="$v.phone.$touch()">
           <label for="phone">Teléfono</label>
           <p class="wm-0-imp rem-0-7 red-text" v-if="$v.phone.$error">
             Teléfono invalido
           </p>
         </div>
       </div>
       <div class="row">
         <div class="input-field col s12 wm-b-20 wp-l-imp-10">
            <textarea id="comment" class="materialize-textarea wm-0-imp" v-model="comment"
            @input="$v.comment.$touch()"></textarea>
            <label for="comment">Comentarios</label>
            <p class="wm-0-imp rem-0-7 red-text" v-if="$v.comment.$error">
              Este campo es requerido
            </p>
          </div>
       </div>
       <div class="row" v-show="success">
         <div class="col s12 center">
           <div class="green-text rem-1-3">
             Se envio tu información correctamente, pronto me comunicare contigo.
           </div>
         </div>
       </div>
       <div class="row" v-show="error">
         <div class="col s12 center">
           <div class="red-text rem-1-6">
             Se genero un error intenta nuevamente o enviame un correo.
           </div>
         </div>
       </div>
       <div class="row">
         <div class="col s12 wm-t-10 center-xs">
           <button class="btn waves-effect waves-light rem-1-0 wmp-xs-90 wh-40"
            type="submit" name="action">
             Enviar
          </button>
         </div>

       </div>
     </form>

  </div>
</div>
</template>

<script>
import { required, minLength, email,numeric } from 'vuelidate/lib/validators'
import forms from '../services/forms'

export default {
  data(){
    return {
      name: '',
      email: '',
      comment: '',
      phone: '',
      success: false,
      error: false
    }
  },
  methods:{
    formSubmit(event){
      let self = this
      if (this.$v.$invalid) {
      this.$v.$touch()
      return false
      }
      forms.contactForm(
        {
          name: this.name,
          email: this.email,
          comment: this.comment,
          phone: this.phone
        }).then(resp=>{
          if(resp.error){
            this.error = true
            return false
          }
          this.error = false
          self.name = ""
          self.email = ""
          self.comment = ""
          self.phone = ""
          self.$v.$reset()
          this.success = true
          setTimeout(()=>{
            this.success = false
          }, 6000)

      })
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email:{
      required,
      email
    },
    comment:{
      required
    },
    phone:{
      required,
      numeric
    }
  }
}
</script>

<style lang="css">
</style>
