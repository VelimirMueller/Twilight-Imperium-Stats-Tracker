<template>
    <div 
        id="spinner" 
        v-if="!!loadingData">

        <div 
            id="spinner-element" 
            :class="classList">
            
            <div class="spinner">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoadingSpinnger',

    props: {
        classList: {
            type: String,
            required: false,
            default: ""
        },

        isLoading: {
            type: Boolean,
            required: true,
            default: false
        },

        isFullPage: {
            type: Boolean,
            required: false,
            default: false
        }
    },

    computed: {
        loadingData () {
            return this.isLoading
        },
    }
}
</script>

