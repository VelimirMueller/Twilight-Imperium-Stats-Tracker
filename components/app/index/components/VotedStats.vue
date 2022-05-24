<template>
  <div>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 
          class="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          v-text="text.headline" />
        <p 
          class="mt-3 text-xl text-gray-500 sm:mt-4"
          v-text="text.subHeadline" />
      </div>

      <dl class="mt-5 mb-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div 
          v-for="item in stats.globalStats" 
          :key="item.name" 
          class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 hover:bg-gray-900 hover:text-indigo-200 transition-full duration-500 ease-in-out">
          <dt 
            class="text-sm font-medium truncate text-center"
            v-text="item.name" />
          <dd 
            class="mt-1 text-3xl font-semibold text-center"
            v-text="item.stat" />
        </div>
      </dl>

      <dl class="mt-5 mb-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div 
          v-for="item in stats.fractionStats" 
          :key="item.name" 
          class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 hover:bg-gray-900 hover:text-indigo-200 transition-full duration-500 ease-in-out">
          <dt 
            class="text-sm font-medium truncate text-center"
            v-text="item.name" />

          <dd
            class="mt-1 text-3xl font-semibold text-center"
            v-text="item.stat" />
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VotedStats',

  props: {
    stats: {
      type: Object,
      required: true
    },

    text: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      isLoading: false
    }
  }
}
</script>