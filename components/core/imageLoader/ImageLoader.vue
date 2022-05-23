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
      <div
        v-if="loaderSettings.errorpage.show && !loaderSettings.data.isLoading"
        :class="setErrorStyles">
        <h2 
          class="flex-align-items font-position-center w-100"
          v-text="renderErrorHandlerText" />
      </div>

      <loading-spinner :is-loading="loaderSettings.data.isLoading" />
    </div>

    <div class="flex">
      <label for="url"> {{ }} </label>
      <input 
        v-model="loaderSettings.image.imgSrc"
        class="w-100"
        type="url" 
        label="imageLink">
      <button
        id="progressStart"
        class="btn-primary-darker"
        @click.prevent="loadImage"
        v-text="'load image'" />
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
      default: ''
    },

    wrapperStyles: {
      type: String,
      required: false,
      default: ''
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

        errorpage: {
          show: false
        },

        image: {
          skeletonSrc: '',
          skeletonAlt: '',
          imgSrc: '',
          imgAlt: 'Your uploaded image alt text is here!',
          settings: {
            width: '',
            height: '',
            timeout: 500
          }
        },

        input: {
          type: 'text'
        },
        lastError: ''
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
      return this.loaderSettings.data.loadingUrl.substr(0, 33)
    },

    renderErrorHandlerText () {
      if (this.texts.warnings.error.isError) {
        return this.texts.warnings.error.text
      }
      if (this.texts.warnings.warning.isWarning) {
        return this.texts.warnings.warning.text
      }

      return false
    },

    setErrorStyles () {
      if (this.texts.warnings.error.isError) {
        return 'w-100 h-100 error flex'
      }
      if (this.texts.warnings.warning.isWarning) {
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
                this.loaderSettings.data.isResponseOk = true
                this.loaderSettings.data.isLoading = false
              } else {
                window.setTimeout(() => {
                  this.renderErrorPage()
                }, this.loaderSettings.image.settings.timeout)
              }
            }).catch((error) => {
              window.setTimeout(() => {
                this.renderErrorPage()
                this.lastError = error
              }, this.loaderSettings.image.settings.timeout)
            });
        } else {
          window.setTimeout(() => {
            this.renderErrorPage(false, true)
          }, this.loaderSettings.image.settings.timeout)
        }
      }
      finally {
        this.loaderSettings.data.loadingUrl = this.loaderSettings.image.imgSrc

        this.loaderSettings.data.isImageSrc = true
      }
    },

    /**
     * Renders either an error or a warning component. By default an error component will be rendered
     * if the loading of an image could not succeed or a warning component if no URL has been entered by the user.
     * #### renderErrorPage() - render error component
     * #### renderErrorPage(false, true) - render warning component
     * 
     * @param { Boolean } error
     * @param { Boolean } warning 
     */
    renderErrorPage (error = true, warning = false) {
      this.loaderSettings.data.isLoading = false
      this.loaderSettings.errorpage.show = true
      this.texts.warnings.error.isError = error
      this.texts.warnings.error.isWarning = warning
    },

    resetErrorState () {
      this.texts.warnings.error.isError = false
      this.texts.warnings.warning.isWarning = false
    }
  }
}
</script>
