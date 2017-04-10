<template>
    <div>
      User {{ id }} <br>
      <router-link :to="`/user/${ id - 1}`">prev</router-link>
      <router-link :to="`/user/${ id + 1}`">next</router-link>
    </div>
</template>

<script>
export default {
  data () {
    return {
      id: 0
    }
  },
  created () {
    this.id = +this.$route.params.id
  },
  watch: {
    $route () {
      this.id = +this.$route.params.id
    }
  }
}
</script>
