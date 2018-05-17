<template>
    <div class="jumbotron">
      <h2>Plan... <br>what will you do</h2><br>
      <h2>Do... <br>what has been planned</h2><br>
    </div>
</template>

<script>
export default {
    name: "Jumbotron"
}
</script>

<style lang="scss" scoped>
.jumbotron {
    background-image: url('../assets/todo.jpeg');
    background-repeat: space;
    font: italic bold 12px/30px Georgia, serif;
    color: rgb(84, 209, 12);
    text-align:right;
    text-shadow: 2px 2px 4px #000000;
}
</style>
