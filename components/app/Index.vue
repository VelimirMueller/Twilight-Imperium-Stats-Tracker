<template>
   <div class="component-container">
       <h2 class="m-0">Vue component name: {{ cleanHeadline }}</h2>
   </div>

   <loading-spinner :isLoading="true" :isFullPage="true"></loading-spinner>
</template>

<script>
import LoadingSpinner from '../core/loadingSpinner/LoadingSpinner.vue'

export default {
    name: "Index",

    components: {
        LoadingSpinner
    },

    props: {
        pageVars: {
            type: Object,
            required: true,
            default: {}
        }
    },

    computed: {
        cleanHeadline () {
            return this.pageVars.headline.replace("| ", "").replace(" |", "")
        }
    }
}
</script>
