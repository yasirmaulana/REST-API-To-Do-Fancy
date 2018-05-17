<template>
    <div class="container">
        <div class="row">
            <h1>What Should I Do...</h1>
            <br>
            <input type="text" placeholder="write your plan here..." style='width:40%' v-model="plan"><br><br>
            <label>Deadline : </label>
            <input type="date" placeholder="deadline" v-model="deadline">
            <button v-on:click.prevent="writePlan">Set Plan</button>
        </div>
        <div class="row">
            <br>
            <table class="table table-hover">
            <thead>
            <tr>
                <th>To Do</th>
                <th>Deadline</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(todo, index) in todos" v-bind:key="index">
                    <td v-if="todo.completed == true">
                        <strike>{{ todo.task }}</strike>
                    </td>
                    <td v-else>
                        {{ todo.task }}
                    </td>
                    <td>
                        {{ todo.deadline }}
                    </td>
                    <td>
                        <button v-on:click.prevent="updatePlan" :data-id="todo._id">Done</button>
                        <button v-on:click.prevent="deletePlan" :data-id="todo._id">Delete</button>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
  name: 'Todo',
  data () {
    return {
      plan: '',
      deadline: '',
      todos: null
    }
  },
  methods: {
    getTodo: function () {
      let url = 'http://localhost:3000/users/showtodo'

      axios
        .get(url, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response => {
          console.log(response.data.data)
          this.todos = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    writePlan: function () {
      let url = 'http://localhost:3000/users/inputtodo'

      let newTodo = {
        task: this.plan,
        deadline: this.deadline
      }
      axios
        .post(url, newTodo, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response => {
          console.log(response)
          // swal('add Todo', 'you add Todo Successfully', 'success')
          this.todos.push(response.data.data)
        })
        .catch(error => {
          console.log(error)
          swal({
            icon: 'error',
            title: 'Hhhmmm',
            text: 'Something wrong...'
          })
        })
    },
    updatePlan: function (event) {
      // console.log('update')
      let id = event.srcElement.dataset.id
      // console.log(id)
      let url = `http://localhost:3000/users/update/${id}`
      let newStatus = {
        completed: true
      }
      axios
        .put(url, newStatus, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response => {
          let idCari = response.data.data._id
          let indexId = 0
          this.todos.forEach((todo, i) => {
            if (todo._id === idCari) {
              indexId = i
            }
          })
          console.log('ini index id', indexId)
          this.getTodo()
        })
        .catch(error => {
          console.log(error)
        })
    },
    deletePlan: function (event) {
      let id = event.srcElement.dataset.id
      let url = `http://localhost:3000/users/delete/${id}`
      axios
        .delete(url, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(response => {
          let idCari = response.data.data._id
          let indexId = 0
          this.todos.forEach((todo, i) => {
            if (todo._id === idCari) {
              indexId = i
            }
          })
          console.log('ini index id', indexId)
          this.todos.splice(indexId, 1)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getTodo()
  }
}
</script>
