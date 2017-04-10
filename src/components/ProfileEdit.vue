<template>
  <div class="ui segment">
    <h3 class="ui header">Edit Profile</h3>
    <profile-form v-model="profile" @input="saveProfile" @cancel="back"></profile-form>
  </div>
</template>
<script>
import { User, Auth } from '@/services/index'
import ProfileForm from '@/components/ProfileForm'
export default {
  components: {
    ProfileForm
  },
  data: () => ({
    profile: {
      name: '',
      description: ''
    }
  }),
  created () {
    User.get(Auth.getCurrentUser().uid, (data) => {
      this.profile = data
    })
  },
  methods: {
    saveProfile () {
      User.set(Auth.getCurrentUser().uid, this.profile)
        .then(() => {
          this.back()
        })
    },
    back () {
      this.$router.push('/profile')
    }
  }
}
</script>
