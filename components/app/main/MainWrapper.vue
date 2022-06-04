<template>
  <div>
    <simple-navbar />
    <h2 v-text="message" />
    <overview-user />
    <simple-footer />
  </div>
</template>

<script>
import OverviewUser from '../../app/main/overview/OverviewUser.vue'
import SimpleFooter from '../../core/footbar/SimpleFooter.vue'
import SimpleNavbar from '../../core/navbar/SimpleNavbar.vue'

export default {
  name: 'MainWrapper',

  components: {
    OverviewUser,
    SimpleFooter,
    SimpleNavbar
  },

  data () {
    return {
      message: 'This is the MainWrapper.vue component !'
    }
  }
}
</script>