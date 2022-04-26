<template>
    <div class="loadingWrapper">
        <div :class="wrapperStyles">
            <img 
                v-if="
                    !!loaderSettings.data.isImageSrc 
                    && !loaderSettings.data.isLoading 
                    && !loaderSettings.errorpage.show
                "
                :src="inputImageSrc ? inputImageSrc : '#'" 
                :class="imageStyles"
                :width="loaderSettings.image.settings.width" 
                :height="loaderSettings.image.settings.height" 
                :alt="renderImageAltText">
                
            <div v-if="loaderSettings.errorpage.show && !loaderSettings.data.isLoading" class="w-100 h-100 bg-darkest flex">
                <h2 class="flex-align-items font-color-white text-center">ERROR LOADING PICTURE</h2>
            </div>
        </div>

        <div class="flex">
            <label for="url"> {{ }} </label>
            <input 
                type="url"
                label="imageLink" 
                v-model="loaderSettings.image.imgSrc">
            <button class="btn-primary-darker" @click.prevent="loadImage">
                load image
            </button>
        </div>
        <p v-if="!loaderSettings.errorpage.show && !loaderSettings.data.isLoading" 
            v-text="'URL: ' + texts.imgSrcDesc + loaderSettings.image.imgSrc" />
        
        <loading-spinner :isLoading="loaderSettings.data.isLoading" />
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
        imageStyles: {
            type: String,
            required: false,
        },

        wrapperStyles: {
            type: String,
            required: false
        }
    },

    data() {
        return {
            loaderSettings: {
                data: {
                    isLoading: false,
                    loadingUrl: '',
                    isImageSrc: false,
                    isResponseOk: false
                },

                image: {
                    skeletonSrc: '',
                    skeletonAlt: '',
                    imgSrc: '',
                    imgAlt: 'Your uploaded image alt text is here!',
                    settings: {
                        width: '',
                        height: '',
                        timeout: 500,
                    }
                },

                input: {
                    type: 'text'
                },
                errorpage: {
                    show: false
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
        },

        renderImageAltText () {
            return this.loaderSettings.errorpage.show ? 'enter url to load a image' : ''
        }
    },

    methods: {
        loadImage () {
            this.loaderSettings.errorpage.show = false
            this.loaderSettings.data.isLoading = true

            try {
                if (this.loaderSettings.image.imgSrc != '') {
                    fetch(this.loaderSettings.image.imgSrc)
                    .then(response => {
                        if (response.ok) {
                            console.log(response)
                            this.loaderSettings.data.isResponseOk = true
                            this.loaderSettings.data.isLoading = false
                        } else {
                            window.setTimeout(() => {
                                this.loaderSettings.data.isLoading = false
                                this.loaderSettings.errorpage.show = true
                            }, this.loaderSettings.image.settings.timeout)
                        }
                    }).catch(() => {
                        console.log("error")
                        window.setTimeout(() => {
                            this.loaderSettings.data.isLoading = false
                            this.loaderSettings.errorpage.show = true
                        }, this.loaderSettings.image.settings.timeout)
                    });
                } else {
                     window.setTimeout(() => {
                        this.loaderSettings.data.isLoading = false
                        this.loaderSettings.errorpage.show = true
                    }, this.loaderSettings.image.settings.timeout)
                }
                console.log('try works')
            }
            catch (error) {
                console.warn(this.loaderSettings.warnings.loadingData + JSON.stringify(error))
            }
            finally {
                this.loaderSettings.data.loadingUrl = this.loaderSettings.image.imgSrc
                console.log('finally works')

                this.loaderSettings.data.isImageSrc = true
            }
        }
    },

    mounted () {
        console.log(this.loaderSettings.data.isImageSrc)
    }
}
</script>
