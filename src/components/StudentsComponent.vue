<template>
<div>
  <h1>Students - Total is {{studentCount}}</h1>
  <ul>
    <li v-for='(student, index) in students' :key='student.id'>
      {{ student.name }}
      <i>{{ student.games.length }}</i> games he plays
      <button @click="addTeamMember({type:'A', index})" :disabled='student.selected'> Team A</button>
      <button @click="addTeamMember({type:'B', index})" :disabled='student.selected'> Team B</button>
    </li>
  </ul>
  <hr>

  <TeamComponent type="A"></TeamComponent><br>
  <TeamComponent type="B"></TeamComponent>
  <InfoComponent></InfoComponent>
</div>
</template>

<script>
import TeamComponent from './TeamComponent'
import InfoComponent from './InfoComponent'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: {
    TeamComponent,
    InfoComponent
  },
  computed: {
    // students() {
    //   return this.$store.state.students
    // }
    ...mapState(['students']),
    ...mapGetters(['studentCount'])
  },
  methods: {
    // addTeamMember(type, index) {
    //   this.$store.dispatch('addTeamMember', {
    //     type,
    //     index
    //   })
    // }
    ...mapActions(['addTeamMember'])
  },
  //dapetin data dari API
  created() {
    this.$store.dispatch('getStudents')
  }
}
</script>

<style scoped>
ul li {
  list-style: none;
  margin: 0;
}
</style>
