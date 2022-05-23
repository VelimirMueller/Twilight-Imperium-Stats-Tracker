<template>
  <div class="component-container">
    <simple-navbar />
    <hero-large />
    <voted-stats :stats="stats" />
    <last-games />
    <simple-footer />
  </div>
</template>

<script>
import SimpleFooter from '../../core/footbar/SimpleFooter.vue'
import HeroLarge from './components/HeroLarge.vue'
import LastGames from './components/LastGames.vue'
import SimpleNavbar from '../../core/navbar/SimpleNavbar.vue'
import VotedStats from './components/VotedStats.vue'

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
      stats: {
        globalStats: [
          {
            name: 'Gespielte Sessions', 
            stat: '0' 
          },
          {
            name: 'Ø Punktzahl', 
            stat: '7.2' 
          },
          {
            name: 'Längste Siegsträhne', 
            stat: '2' 
          }
        ],
        
        fractionStats: [
          {
            name: 'Meistgespielteste Fraktion', 
            stat: 'Silberschwingen' 
          },
          {
            name: 'Weltraumtyrann', 
            stat: 'Flo' 
          },
          {
            name: 'Am meisten Ehre', 
            stat: 'Vele' 
          }
        ]
      }
    }
  },

  computed: {
    cleanHeadline () {
      return this.pageVars.headline.replace('| ', '').replace('', '| ')
    }
  }
}
</script>
