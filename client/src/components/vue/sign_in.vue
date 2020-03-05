<template src="../views/sign_in.html"></template>

<script>

export default {
  name: 'sign_in',
  data () {
    return {
      mail: '',
      pseudonyme: '',
      password: '',
      repeatpassword: '',
      validatePassword: false,
      avatar: '',
      lastname: '',
      firstname: '',
      birthday: '',
      address: '',
      complementaddress: '',
      zipcode: '',
      city: '',
      story: ''
    }
  },
  computed: {
    passwordsCompare () {
      if (this.password === this.repeatpassword) {
        return this.validatePassword = true
      }
    }
  }
}

</script>

<style scoped src="../stylesheets/sign_in.css"></style>
