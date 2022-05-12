<template>
  <div
    id="modal"
    :class="!hidden ? 'hidden h-12 transition-full duration-500' : 'fixed flex justify-center items-center inset-0 bg-gray-900 bg-opacity-90 w-screen h-screen transition-full duration-500 '"
  >
    <div class="text-white absolute md:w-1/2 md:h-1/2 w-11/12 h-4/5 border z-0 flex justify-center items-center bg-white">
      <form class="flex flex-col justify-center w-4/5">
        <div
          class="cursor-pointer absolute top-0 right-0 w-12 h-12 rounded-full bg-gray-700 mr-4 mt-4 flex justify-center items-center"
          @click="closeModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fafafa"
            stroke-width="4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <span class="flex items-center justify-end h-12">
          <label
            id="emailLabel"
            :class="input.email !== '' ? 'opacity-0 flex justify-center items-center absolute transition-full duration-700 delay-200 w-80 rounded-md h-12 border' : 'opacity-100 absolute transition-full duration-500 h-12 bg-gray-900 md:1/4 w-2/5 md:font-bold font-lg flex justify-center items-center rounded-full border-2 border-white border-opacity-100'"
            for="email"
            v-text="'Email'"
          />
          <input
            id="email"
            v-model="input.email" 
            class="w-full rounded-full h-12 bg-indigo-50 text-gray-900 border-gray-900"
            name="email"
            type="text" 
          >
        </span>
        <span class="flex items-center h-12 justify-end my-4">
          <label
            id="passwordLabel"
            :class="input.password !== '' ? 'opacity-0 flex justify-center items-center absolute transition-full duration-700 delay-200 w-80 rounded-md h-12 border' : 'opacity-100 absolute transition-full duration-500 h-12 bg-indigo-400 md:1/4 w-2/5 md:font-bold font-lg flex justify-center items-center rounded-full border-2 text-gray-100 border-white border-opacity-100'"
            for="password"
            v-text="'password'"
          />
          <input
            id="password" 
            v-model="input.password"
            class="w-full h-12 rounded-full bg-indigo-50 text-gray-900 border-gray-900"
            name="password" 
            type="password"
          >
        </span>
        <button @click.prevent="login">
          login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginAndRegister',

  props: {
    hidden: {
      type: Boolean,
      default: false,
      required: true
    }
  },

  data () {
    return {
      input: {
        email: '',
        password: ''
      }
    }
  },

  computed: {
    test (sdf) {
      return sdf
    }
  },

  mounted () {
    document.getElementById('email').addEventListener('click', this.animateMail)
    document.getElementById('password').addEventListener('click', this.animatePw)
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
      fetch('/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.input.email,
          password: this.input.password
        })
      })
        .then(response => console.log(response))
      this.resetForm()
    },

    resetForm () {
      this.input.email = ''
      this.input.password = ''
    }
  }
}
</script>