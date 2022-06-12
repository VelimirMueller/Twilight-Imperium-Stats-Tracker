<template>
  <div class="w-screen bg-gradient-to-r from-gray-900 to-indigo-500">
    <p class="text-xl text-center w-full text-indigo-200 pt-8" v-text="text.headline" />
    <h1 class="text-center text-4xl text-gray-200 font-bold tracking-tight sm:text-5xl lg:text-6xl"
      v-text="text.subHeadline" />
    <div class="flex justify-center flex-wrap my-4">
      <!-- Card -->
      <div v-for="(cardPath, idx) in cardPaths" :key="idx"
        class="bg-white rounded-md h-72 w-4/5 lg:w-2/6 mr-0 md:mx-12 my-4 lg:mr-0 lg:mx-8">
        <div class="h-1/3 flex-col w-full bg-yellow-200">
          <!-- Faction won -->
          <img class="w-full h-full" :src="cardPath" alt="hacan faction picture">
        </div>

        <div class="flex h-2/3">
          <!-- Players participated -->
          <div class="h-full w-1/2 flex items-center flex-col border-r-2 border-gray-300">
            <p class="text-gray-900" v-text="text.participants" />
            <hr class="w-4/5 border-gray-300 my-2">
            <div class="flex -space-x-1 overflow-hidden justify-center">
              <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="">
              <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="">
              <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt="">
            </div>
            <div class="flex -space-x-1 overflow-hidden justify-center">
              <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="">
              <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt="">
              <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="">
            </div>
            <p class="text-gray-900" v-text="text.secondPlace" />
            <hr class="w-4/5 border-gray-300 my-2">
          </div>

          <!-- Player won -->
          <div class="h-full w-1/2 text-gray-900 flex items-center flex-col">
            <p v-text="text.mvp" />
            <hr class="w-4/5 border-gray-300 my-2">
            <span class="inline-block">
              <img class="h-24 w-24 rounded-md"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="">
            </span>
            <p v-text="text.points" />
            <hr class="w-4/5 border-gray-300 my-2">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LastGames',

  props: {
    cardPaths: {
      type: Array,
      required: true
    },

    text: {
      type: Object,
      required: true
    }
  }
}
</script>