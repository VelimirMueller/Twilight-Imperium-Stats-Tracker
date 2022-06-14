<template>
  <div class="component-container">
    <simple-navbar />
    <hero-large :text="config.text.largeHero" />
    <voted-stats
      :stats="config.stats"
      :text="config.text.votedStats" />
    <last-games 
      :card-paths="config.cards.lastGames.paths"
      :text="config.text.lastGames" />
    <simple-footer />
  </div>
</template>

<script>
/* eslint-disable object-curly-newline */
import { appApi } from '../../../src/Helpers/js/api/apiHelper'
import { CONFIG } from './config/constants'
import HeroLarge from './components/HeroLarge.vue'
import LastGames from './components/LastGames.vue'
import SimpleFooter from '../../core/footbar/SimpleFooter.vue'
import SimpleNavbar from '../../core/navbar/SimpleNavbar.vue'
import VotedStats from './components/VotedStats.vue'
/* eslint-enable object-curly-newline */

export default {
  name: 'IndexWrapper',

  components: { 
    SimpleFooter,
    HeroLarge,
    LastGames,
    SimpleNavbar,
    VotedStats
  },

  props: {
    pageVars: {
      type: Object,
      required: true,
      default: () => {}
    }
  },

  data () {
    return {
      config: CONFIG,
      votedStats: ''
    }
  },

  computed: {
    cleanHeadline () {
      return this.pageVars.headline.replace('| ', '').replace('', '| ')
    }
  }
}
</script>
