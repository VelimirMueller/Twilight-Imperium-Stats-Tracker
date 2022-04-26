<template>
   <div class="component-container">
       <h2 class="m-0">Vue component name: {{ cleanHeadline }}</h2>
   </div>

   <image-loader 
        wrapperStyles="w-100" 
        imageStyles="w-50 h-50" 
        spinnerStyles="w-100 flex flex-align-items-center flex-content-justify-center absolute bg-white" />
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
