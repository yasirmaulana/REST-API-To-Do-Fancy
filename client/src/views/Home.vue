<template>
  <div class="home">
    <Navbar></Navbar>
    <h1>Plan... what will you do</h1>
    <p></p>
    <h1>Do... what has been planned</h1>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
