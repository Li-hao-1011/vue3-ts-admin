<template>
  <h1>Login</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
  computed: {
    ...mapState({
      // stateName: (state) => state.name
    })
  }
})
</script>
