<template> 
  <div
    id="modal"
    :class="hidden ? 'hidden fixed h-12 transition-full w-screen duration-500 inset-0' : 'inset-0 fixed flex justify-center items-center bg-gray-900 bg-opacity-90 w-78 h-78 transition-full duration-500 '">
    <div class="text-white md:w-1/2 md:h-1/2 w-11/12 h-4/5 border z-0 flex justify-center items-center bg-white fixed">
      <form class="flex flex-col justify-center w-4/5">
        <div
          class="cursor-pointer fixed top-0 right-0 w-12 h-12 rounded-full bg-red-700 mr-4 mt-4 flex justify-center items-center"
          @click="closeModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fafafa"
            stroke-width="4">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <span class="flex items-center justify-end h-12 relative">
          <label
            id="emailLabel"
            :class="input.email !== '' ? 'opacity-0 flex justify-center items-center border-indigo-500 relative transition-full duration-700 delay-200 w-0 rounded-l-full h-12 border' : 'opacity-100 relative transition-full duration-500 border-indigo-500 h-12 bg-gray-900 md:1/4 w-2/5 md:font-bold font-lg flex justify-center items-center rounded-l-full border-2 border-white border-opacity-100'"
            for="email"
            v-text="'Email'" />
          <input
            id="email"
            v-model="input.email" 
            :class="input.email !== '' ? 'w-full rounded-full h-12 bg-indigo-50 text-gray-900 border-gray-900' : 'w-full rounded-r-full h-12 bg-indigo-50 text-gray-900 border-gray-900'"
            name="email"
            type="text">
        </span>
        <span class="flex items-center h-12 justify-end my-4 relative">
          <label
            id="passwordLabel"
            :class="input.password !== '' ? 'opacity-0 flex justify-center items-center relative transition-full duration-700 delay-200 w-0 h-12 border border-gray-900' : 'opacity-100 relative transition-full duration-500 h-12 bg-indigo-400 md:1/4 w-2/5 md:font-bold font-lg flex justify-center items-center rounded-l-full border text-gray-100 border-white border-gray-900'"
            for="password"
            v-text="'password'" />
          <input
            id="password" 
            key=""
            v-model="input.password"
            :class="input.password !== '' ? 'w-full rounded-full h-12 bg-indigo-50 text-gray-900 border-gray-900' : 'w-full rounded-r-full h-12 bg-indigo-50 text-gray-900 border-indigo-500'"
            name="password" 
            type="password">
        </span>
        <span class="flex items-center h-12 justify-end my-4 relative">
          <button 
            class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-full shadow-sm md:w-1/3 w-1/2 text-indigo-100 bg-gray-900 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
            @click.prevent="login"
            v-text="'login'" />
        </span>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable object-curly-newline */
import { appApi } from '../../../../../src/Helpers/js/api/apiHelper'
/* eslint-enable object-curly-newline */

export default {
  name: 'LoginAndRegisterModal',

  props: {
    hidden: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  emits: [
    'close-modal'
  ],

  data () {
    return {
      input: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    animateMail () {
      const mailElement = document.getElementById('emailLabel')
      this.input.email === '' ? mailElement.classList.add('animate-bounce') : mailElement.classList.remove('animate-bounce')
    },

    animatePw () {
      const pwElement = document.getElementById('passwordLabel')
      this.input.password === '' ? pwElement.classList.add('animate-bounce') : pwElement.classList.remove('animate-bounce')
    },

    closeModal () {
      document.getElementById('modal').classList.add('hidden')
    },

    login () {
      const requestBody = {
        email: this.input.email,
        password: this.input.password
      }
      appApi('POST', '/', requestBody)
      this.resetForm()
    },

    resetForm () {
      this.input.email = ''
      this.input.password = ''
    }
  },

  mounted () {
    document.getElementById('email').addEventListener('click', this.animateMail)
    document.getElementById('password').addEventListener('click', this.animatePw)
    this.$emit('close-modal', () => {
      this.closeModal()
    })
  }
}
</script>