<template>
    <div class="loadingWrapper">
        <div class="loadingSkeleton">
            <loading-spinner
                :isLoading="loaderSettings.data.isLoading" 
                :isFullPage="true" 
                :classList="'w-100 flex flex-align-items-center flex-content-justify-center absolute bg-white'" />
                
            <img 
                v-if="!!loaderSettings.data.isImageSrc && !loaderSettings.data.isLoading" 
                :src="inputImageSrc ? inputImageSrc : '#'" 
                :class="classList"
                :width="loaderSettings.image.settings.width" 
                :height="loaderSettings.image.settings.height" 
                :alt="loaderSettings.image.imgAlt">
        </div>

        <div class="flex">
            <label for="url"> {{ }} </label>
            <input 
                type="url" 
                label="imageLink" 
                v-model="loaderSettings.image.imgSrc">
            <button @click.prevent="loadImage">
                load image
            </button>
        </div>
        <p v-text="'URL: ' + texts.imgSrcDesc + loaderSettings.image.imgSrc.substring(0, 40) + loaderSettings.image.imgSrc.length > 40 ? '...' : ''" />

    </div>
</template>

<script>
import LoadingSpinner from '../loadingSpinner/LoadingSpinner.vue'

export default {
    name: 'ImageLoader',

    components: {
        LoadingSpinner
    },

    props: {
        classList: {
            type: String,
            required: false,
            default: ''
        },

    },

    data() {
        return {
            loaderSettings: {
                data: {
                    isLoading: false,
                    loadingUrl: '',
                    isImageSrc: false
                },

                image: {
                    skeletonSrc: '',
                    skeletonAlt: '',
                    imgSrc: '',
                    imgAlt: 'Your uploaded image alt text is here!',
                    settings: {
                        width: '400',
                        height: '250',
                        timeout: 500,
                    }
                },

                input: {
                    type: 'text'
                }
            },

            texts: {
                imgSrcDesc: '',
                warnings: {
                    loadingData: 'something went wrong while loadnig the image. Here, the error: '
                }
            }           
        }
    },

    computed: {
        inputImageSrc () {
            return this.loaderSettings.data.loadingUrl
        }
    },

    methods: {
        loadImage () {
            this.loaderSettings.data.isLoading = true

            try {
                fetch(this.loaderSettings.image.imgSrc)
                    .then(data => console.log(data))
                console.log('try works')
            } 
            catch (error) {
                console.warn(this.loaderSettings.warnings.loadingData + JSON.stringify(error))
                // Do not show image on error
                return false
            }
            finally {
                this.loaderSettings.data.loadingUrl = this.loaderSettings.image.imgSrc
                console.log('finally works')

                this.loaderSettings.data.isImageSrc = true

                window.setTimeout(() => {
                    this.loaderSettings.data.isLoading = false
                }, this.loaderSettings.image.settings.timeout)
            }
        }
    },

    mounted () {
        console.log(this.loaderSettings.data.isImageSrc)
    }
}
</script>