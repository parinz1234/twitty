<template>
  <div class="ui segment">
    <h3 class="ui header">Edit Profile</h3>
    <profile-form v-model="profile" @input="saveProfile" @cancel="back"></profile-form>
    {{ profile }}
  </div>
</template>
<script>
import firebase from 'firebase'
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
    const userId = firebase.auth().currentUser.uid
    firebase.database()
      .ref(`user/${userId}`)
      .once('value', (data) => {
        this.profile = data.val()
      })
  },
  methods: {
    saveProfile () {
      // console.log(firebase.auth().currentUser.uid)
      // firebase.database().ref(`user/${firebase.auth().currentUser.uid}`)
      const userId = firebase.auth().currentUser.uid
      firebase.database()
        .ref(`user/${userId}`)
        .set(this.profile)
        .then(() => {
          this.back()
          // or this.$router.go(-1) if user access by url. it won't have history
        })
    },
    back () {
      this.$router.push('/profile')
    }
  }
}
</script>
