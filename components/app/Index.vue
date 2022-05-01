<template>
   <div class="component-container">
       <h2 class="m-0">Vue component name: {{ cleanHeadline }}</h2>

        <div class="w-fixed-s m-l-m">
            <image-loader 
                wrapperStyles="w-100 h-100" 
                imageStyles="w-100 h-fixed-s" />
        </div>
   </div>
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
