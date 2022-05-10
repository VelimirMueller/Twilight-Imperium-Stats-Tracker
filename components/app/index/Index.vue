<template>
   <div class="component-container">
        <navbar />
        <hero />
        <stats :stats="stats" />
        <last-session />
        <footbar />
   </div>
</template>

<script>
import Footbar from '../../core/footbar/Footbar.vue'
import Hero from './components/Hero.vue'
import LastSession from './components/LastSession.vue'
import Navbar from '../../core/navbar/Navbar.vue'
import Stats from './components/Stats.vue'

export default {
    name: "Index",

    components: {
        Footbar,
        Hero,
        LastSession,
        Navbar,
        Stats
    },

    props: {
        pageVars: {
            type: Object,
            required: true,
            default: {}
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
                    { name: 'Am meisten Ehre', stat: 'Linda' }
                ]
            }
        }
    },

    computed: {
        cleanHeadline () {
            return this.pageVars.headline.replace("| ", "").replace(" |", "")
        }
    },
}
</script>
