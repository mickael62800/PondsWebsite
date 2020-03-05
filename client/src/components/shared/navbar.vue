<template>
  <div class="navbar">
    <a href="/"><img src="../../assets/images/logo.jpg" alt="logo site" class="logo"> </a>
    <div>
      <router-link to="/ponds" class="button button-navigation">Recherche un étangs</router-link>
      <router-link to="/ponds/new" class="button button-navigation">Ajoute un étang</router-link>
      <router-link to="/user/new" class="button button-devise">Inscription</router-link>
      <router-link to="/user" class="button button-devise">Se connecter</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: white;
    border-bottom: solid rgba(0, 0, 0, 0.3) 1px;
  }
  .logo {
    height: 90px;
    padding-left: 20px;
  }
  .title-website {
    display: inline;
    padding-left: 20px;
  }
  .button-devise:last-child {
    margin-right: 20px;
  }
</style>
