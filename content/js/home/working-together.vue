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
    <form class="col s12">
       <div class="row">
         <div class="input-field col s6 pr-0-1">
           <input  id="name" type="text" class="validate">
           <label for="name">Nombre</label>
         </div>
         <div class="input-field col s6 pr-0-1">
           <input id="email" type="email" class="validate">
           <label for="email">Email</label>
         </div>
       </div>
       <div class="row">
         <div class="input-field col s12">
            <textarea id="comment" class="materialize-textarea"></textarea>
            <label for="comment">Comentarios</label>
          </div>
       </div>
       <div class="row">
         <div class="col s12">
           <button class="btn waves-effect waves-light" type="submit" name="action">Enviar
            <i class="material-icons right">send</i>
          </button>
         </div>

       </div>
     </form>
  </div>

</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
