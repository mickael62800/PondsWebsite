<template>
  <div class="footer">
    <div class="social-network">
      <p>Suivez nous sur : </p>
      <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter-square ico-social"></i></a>
      <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-square ico-social"></i></a>
      <a href="https://www.instagram.com/?hl=fr" target="_blank"><i class="fab fa-instagram ico-social"></i></a>
    </div>

    <div class="contact-admin">
      <p>Contacter nous</p>
      <a href="#"><i class="fas fa-envelope-square ico-envelope"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "social"
}
</script>

<style scoped>
  .footer {
    width: 100%;
    height: 100px;
    background-image: url("../../assets/images/footer.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: space-around;
  }

  .social-network .ico-social {
    font-size: 30px;
    margin: 10px 20px;
  }
  .social-network .ico-social p {
    text-align: center;
    margin: 10px 0;
    font-weight: bold;
  }

  .contact-admin {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact-admin .ico-envelope {
    font-size: 30px;
    margin: 5px 20px;
  }

  .contact-admin .ico-envelope p {
    margin: 10px 0;
    font-weight: bold;
  }

  .ico-social, .ico-envelope {
    color: rgba(0,0,0,0.7);
    transition: color 1s;
  }

  .ico-social, .ico-envelope:hover {
    text-decoration: none;
    color: black;
  }
</style>
