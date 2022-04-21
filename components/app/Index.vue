<template>
   <div class="component-container">
       <h2 class="font-position-center">Vue component name: {{ cleanHeadline }}</h2>
   </div>
</template>

<script>
export default {
    name: "Index",

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
