<template>
  <div class="component-container">
    <nav-bar />
    <hero-main />
    <stats-area :stats="stats" />
    <last-session />
    <foot-bar />
  </div>
</template>

<script>
import FootBar from '../../core/footbar/FootBar.vue'
import HeroMain from './components/HeroMain.vue'
import LastSession from './components/LastSession.vue'
import NavBar from '../../core/navbar/NavBar.vue'
import StatsArea from './components/StatsArea.vue'

export default {
  name: 'IndexWrapper',

  components: {
    FootBar,
    HeroMain,
    LastSession,
    NavBar,
    StatsArea
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
  },
}
</script>
