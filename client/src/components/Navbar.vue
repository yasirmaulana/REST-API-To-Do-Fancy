<template>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand">Todo Fancy</a>
            </div>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a v-on:click="logout" v-if="stLogout == false" style="cursor: pointer">Log Out</a>
                </li>
                <li>
                    <router-link to="/signup"  v-if="stLogout == true">Sign Up</router-link>
                </li>
                <li>
                    <router-link to="/"  v-if="stLogout == true">Log In</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import swal from 'sweetalert'

export default {

  name: 'Navbar',
  data () {
    return {
      stLogout: true
    }
  },
  methods: {
    logout: function () {
      localStorage.removeItem('token')
      localStorage.removeItem('status')
      swal('Log out', 'Log out Successfully', 'success')
      this.$router.push('/')
    }
  },
  created () {
    let token = localStorage.getItem('token')
    if (token) {
      this.stLogout = false
    }
  }
}

</script>
