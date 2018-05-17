<template>
  <div class="container">
    <Navbar></Navbar>
    <Jumbotron></Jumbotron>
    <Signup></Signup>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Signup from '@/components/Signup.vue'
import Jumbotron from '@/components/Jumbotron.vue'

export default {
  components: {
    Navbar,
    Jumbotron,
    Footer,
    Signup
  }
}
</script>
