<template>
  <div class="login">
    <Navbar></Navbar>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Todo from '@/components/Todo.vue'

export default {
  components: {
    Navbar,
    Todo,
    Footer
  },
  mounted () {
    let token = localStorage.getItem('token')
    if (!token) {
      this.$router.push('/')
    }
  }
}
</script>
