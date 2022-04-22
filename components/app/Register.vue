<template>
   <div class="component-container">
       <h2 class="m-0">Vue component name: {{ cleanHeadline }}</h2>
   </div>
</template>

<script>
export default {
    name: "Register",

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