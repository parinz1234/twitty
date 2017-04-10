<template>
  <div>
    <form action="" class="ui form" @submit.prevent="save">
      <div class="field">
        <label for="">name</label>
        <input v-model="name" type="text">
      </div>
      <div class="field">
        <label for="">description</label>
        <input v-model="description" type="text">
      </div>
      <button class="ui submit button blue">Save</button>
      <div class="ui red button" @click="cancel">Cancel</div>
    </form>
  </div>
</template>
<script>
export default {
  props: ['value'],
  data: () => ({
    name: '',
    description: ''
  }),
  created () {
    this.name = this.value.name
    this.description = this.value.description
  },
  watch: {
    value () {
      this.name = this.value.name
      this.description = this.value.description
    }
  },
  methods: {
    save () {
      this.$emit('input', {
        name: this.name,
        description: this.description
      })
    },
    cancel () {
      this.$emit('cancel')
    }
  }
}
</script>
