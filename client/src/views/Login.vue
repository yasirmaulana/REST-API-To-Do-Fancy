<template>
  <div class="container">
    <Navbar></Navbar>
    <Jumbotron></Jumbotron>
    <Login></Login>
    <facebook-login class="button"
      appId="376922789471623"
      @login="getUserData"
      @logout="onLogout"
      @get-initial-status="getUserData">
    </facebook-login>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Login from '@/components/Login.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import facebookLogin from 'facebook-login-vuejs'

export default {
  components: {
    Navbar,
    Jumbotron,
    Footer,
    Login,
    facebookLogin
  },
  methods: {
    getUserData: function () {
      FB.getLoginStatus(function(response) {
        console.log(response)
      })
    }
  }
}
</script>
