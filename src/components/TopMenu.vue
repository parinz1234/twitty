<template>
  <div class="ui menu">
    <router-link class="header item" to="/">Home</router-link>
    <div class="menu right">
      <router-link class="item" to="/profile">Profile</router-link>
      <router-link v-if="!currentUser" class="item" to="/signin">Sign In</router-link>
      <div v-else class="item">Sign Out</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentUser: null
      }
    }
  }
</script>
