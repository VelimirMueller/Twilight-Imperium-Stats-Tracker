<template>
  <div class="component-container">
    <navbar />
    <hero-main />
    <stats-area :stats="stats" />
    <last-session />
    <footbar />
  </div>
</template>

<script>
import Footbar from '../../core/footbar/Footbar.vue'
import HeroMain from './components/HeroMain.vue'
import LastSession from './components/LastSession.vue'
import Navbar from '../../core/navbar/Navbar.vue'
import StatsArea from './components/StatsArea.vue'

export default {
  name: 'IndexWrapper',

  components: {
    Footbar,
    HeroMain,
    LastSession,
    Navbar,
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
          { name: 'Gespielte Sessions', stat: '0' },
          { name: 'Ø Punktzahl', stat: '7.2' },
          { name: 'Längste Siegsträhne', stat: '2' }
        ],
        fractionStats: [
          { name: 'Meistgespielteste Fraktion', stat: 'Silberschwingen' },
          { name: 'Weltraumtyrann', stat: 'Flo' },
          { name: 'Am meisten Ehre', stat: 'Vele' }
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
