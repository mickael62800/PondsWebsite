<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>

import navbar from './components/shared/navbar'

export default {
  name: 'App',
  components: { navbar }
}
</script>

<style src="./style.css"></style>
