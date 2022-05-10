<template>
    <div class="w-100 h-100">
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
                
            <div v-if="loaderSettings.errorpage.show && !loaderSettings.data.isLoading" :class="setErrorStyles">
                <h2 
                    class="flex-align-items font-position-center w-100"
                    v-text="renderErrorHandlerText"></h2>
            </div>

            <loading-spinner :isLoading="loaderSettings.data.isLoading" />
        </div>

        <div class="flex">
            <label for="url"> {{ }} </label>
            <input 
                class="w-100"
                type="url"
                label="imageLink" 
                v-model="loaderSettings.image.imgSrc">
            <button id="progressStart" class="btn-primary-darker" @click.prevent="loadImage">
                load image
            </button>
        </div>
        <p 
            v-if="!loaderSettings.errorpage.show && !loaderSettings.data.isLoading" 
            v-text="'Original Image URL: '" />
        <a 
             v-if="!loaderSettings.errorpage.show && !loaderSettings.data.isLoading" 
            :href="loaderSettings.data.loadingUrl" 
            v-text="renderLinkText" /> 
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
                    loadingData: 'something went wrong while loadnig the image. Here, the error: ',
                    error: {
                        isError: false,
                        text: 'error while loading picture'
                    },
                    warning: {
                        isWarning: false,
                        text: 'please enter an url to load an image'
                    }
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
        },

        renderLinkText () {
            return this.loaderSettings.data.loadingUrl.substr(0,33)
        },

        renderErrorHandlerText () {
            if (!!this.texts.warnings.error.isError) {
                return this.texts.warnings.error.text
            }
            if (!!this.texts.warnings.warning.isWarning) {
                return this.texts.warnings.warning.text
            }

            return false
        },

        setErrorStyles () {
            if (!!this.texts.warnings.error.isError) {
                return 'w-100 h-100 error flex'
            }
            if (!!this.texts.warnings.warning.isWarning) {
                return 'w-100 h-100 warning flex'
            }
            return 'w-100 h-100 flex'
        }
    },

    methods: {
        loadImage () {
            this.loaderSettings.errorpage.show = false
            this.loaderSettings.data.isLoading = true
            this.resetErrorState()

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
                                this.texts.warnings.error.isError = true
                            }, this.loaderSettings.image.settings.timeout)
                        }
                    }).catch(() => {
                        console.log("error")
                        window.setTimeout(() => {
                            this.loaderSettings.data.isLoading = false
                            this.loaderSettings.errorpage.show = true
                            this.texts.warnings.error.isError = true
                        }, this.loaderSettings.image.settings.timeout)
                    });
                } else {
                     window.setTimeout(() => {
                        this.loaderSettings.data.isLoading = false
                        this.loaderSettings.errorpage.show = true
                        this.texts.warnings.warning.isWarning = true
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
        },

        resetErrorState () {
            this.texts.warnings.error.isError = false
            this.texts.warnings.warning.isWarning = false
        }
    },

    mounted () {
        console.log(this.loaderSettings.data.isImageSrc)
    }
}
</script>
