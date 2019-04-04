<template>
  <div>
    <transition
      name="fade"
      mode="out-in"
    >
      <v-form
        v-if="isEditing"
        ref="form"
      />
      <v-card-title v-else>
        <v-btn ref="btn" @click="toggle">Toggle</v-btn>
      </v-card-title>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isEditing: false
    }
  },

  methods: {
    toggle () {
      this.isEditing = !this.isEditing
    }
  }
}
</script>
