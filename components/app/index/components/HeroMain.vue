<template>
  <div>
    <div class="w-full bg-gradient-to-r from-gray-900 to-indigo-500 md:flex md:justify-center">
      <div class="relative px-2 py-8 sm:px-6 md:px-8">
        <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span 
            class="block text-white"
            v-text="text.hero.headline"
          />
          <span 
            class="block text-indigo-200"
            v-text="text.hero.subHeadline"
          />
        </h1>

        <div class="flex justify-center mt-4">
          <img
            class="w-2/3 md:w-1/3"
            src="https://keeganw.github.io/ti4/logo100.png"
            alt=""
          >
        </div>

        <p 
          class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl text-s md:text-m"
          v-text="text.hero.paragraph"
        />

        <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
            <button 
              href="#" 
              class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
              @click="openModal"
              v-text="text.button.login"
            />
            <button
              href="#" 
              class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
              @click="closeModal"
              v-text="text.button.register"
            />
          </div>
        </div>
      </div>
    </div>
    <login :hidden="toggleModal" />
  </div>
</template>

        <script>
        import Login from './modals/LoginAndRegister.vue'

        export default {
          name: 'HeroMain',

  components: {
    Login
  },

  data () {
    return {
      text: {
        hero: {
          headline: 'Twilight Imperium',
          subHeadline: 'Stats Tracker',
          paragraph: 'Finde heraus mit welchen Fraktionen du am besten bist, welche Spieler am gefährlichsten sind und schmiede geheime Bündnisse'
          },
        button: {
          login: 'Login',
          register: 'Registrieren'
        }
      },
      isModal: false
    }
  },

  methods: {
    openModal () {
      document.getElementById('modal').classList.remove('hidden')
        this.isModal = true
    },

    closeModal () {
      this.isModal = false
    }
  },
}
</script>