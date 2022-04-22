<template>
    <div id="spinner" v-if="loadData" class="w-100 flex flex-align-items-center flex-content-justify-center">
        <div id="spinner-element" class="absolute">
            <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoadingSpinnger',

    props: {
        classList: {
            type: String,
            required: false
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
        loadData () {
            return this.isLoading
        },

        renderFullPage () {
            return this.isFullPage
        }
    },

    mounted () {
        window.addEventListener("load", () => {
            if (!!this.isFullPage) {
                const self = document.getElementById('spinner')
                self.style.height = window.innerHeight - self.offsetTop - 45 + 'px'
            }

            console.log(this.renderFullPage)
        })
    }
}
</script>

