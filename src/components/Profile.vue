<template>
    <div class="ui segment">
      <h3 class="ui header">Profile</h3>
      <h4>Name:</h4> {{ profile.name}}
      <h4>Description:</h4> {{profile.description}}
      <br><br>
      <router-link to="edit" append class="ui green button">Edit</router-link>
    </div>
</template>


<script>
import { User, Auth } from '@/services/index'
export default {
  data: () => ({
    profile: {
      name: '',
      description: ''
    }
  }),
  created () {
    const userId = Auth.getCurrentUser().uid
    User.get(userId, (data) => {
      this.profile = data
    })
  }
}
</script>
