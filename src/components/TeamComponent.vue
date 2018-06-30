<template>
<div>
  <h1>Team {{type}}</h1>
  <ul>
    <li v-for="(member, index) in team" :key="member.id">
      {{member.name}}
      <button @click="removeFromTeam({type, index, member})">X</button>
    </li>
  </ul>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: ['type'],
  computed: {
    team() {
      return this.type === 'A' ? this.$store.state.teamA : this.$store.state.teamB
    }
  },
  methods: {
    ...mapActions(['removeFromTeam'])
    // removeFromTeam(type, index, member) {
    //   this.$store.dispatch('removeFromTeam', {
    //     type,
    //     index,
    //     member
    //   })
    // }
  }
}
</script>

<style lang="css">
</style>
