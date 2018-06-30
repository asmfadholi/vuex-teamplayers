<template lang="html">
  <div class="">
    <h1>Match Details</h1>
    <p v-if="teamACount>2">
      {{matchDate}}
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      matchDate: state => state.info.matchDate
    }),
    ...mapGetters('info', ['teamACount'])
  }
}
</script>

<style lang="css">
</style>
