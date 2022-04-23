<template>
   <div class="component-container">
       <h2 class="m-0">Vue component name: {{ cleanHeadline }}</h2>
   </div>

   <image-loader></image-loader>
</template>

<script>
import ImageLoader from '../core/imageLoader/ImageLoader.vue'

export default {
    name: "Index",

    components: {
        ImageLoader
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
