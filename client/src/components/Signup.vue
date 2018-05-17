<template>
  <div class="signup">
    <h3 style="font: italic bold 30px/30px Georgia, serif">Sign Up here...</h3>
      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input class="form-control" type="text" placeholder="input your email" v-model="email">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
        <input class="form-control" type="password" placeholder="input your password" v-model="password">
      </div>
      <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-phone-alt"></i></span>
        <input class="form-control" type="text" placeholder="input your number" v-model="hp">
      </div>
      <i style="color:red">*to remind your deadline</i>
      <p></p>
      <p></p><button v-on:click.prevent="signup">Sign Up</button>
  </div>
</template>

<script>
import swal from 'sweetalert'
import axios from 'axios'

export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: '',
      hp: ''
    }
  },
  methods: {
    signup: function () {
      let cek = this.valSignup()
      let url = 'http://localhost:3000/users/signup'

      if (cek) {
        let newUser = {
          email: this.email,
          password: this.password,
          hp: this.hp
        }
        axios
          .post(url, newUser)
          .then(response => {
            swal('Sign Up', 'you sign up successfully, please log in', 'success')
            this.$router.push('/')
          })
          .catch(error => {
            console.error(error)
            swal({
              icon: 'error',
              title: 'Oops...',
              text: 'Email is not available!'
            })
          })
      }
    },
    valSignup: function () {
      let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      let cekEmail = regEx.test(String(this.email).toLowerCase())
      let cekPass = this.password.match(/[0-9]/g)
      let cekHP = this.hp.match(/^[0-9]{1,12}$/)
      if (this.email === '') {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'Email must be filled'
        })
        return false
      } else if (!cekEmail) {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'Email format is Wrong'
        })
        return false
      } else if (this.password === '') {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'Password must be filled'
        })
        return false
      } else if (this.password.length < 5) {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'Password minimal 5 digit'
        })
        return false
      } else if (!cekPass) {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'Password must contained Number'
        })
        return false
      } else if (this.hp === '') {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'Phone Number must be filled'
        })
        return false
      } else if (!cekHP) {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'Hp must Number'
        })
        return false
      } else if (this.hp.length < 11) {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'Phone Number minimal 11 digit'
        })
        return false
      } else {
        return true
      }
    }
  }
}
</script>
