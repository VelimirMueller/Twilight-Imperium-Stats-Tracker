<template>
  <div class="w-screen bg-gradient-to-r from-gray-900 to-indigo-500">
    <p class="text-xl text-center w-full text-indigo-200 pt-8">
      Deine Entscheidungen beeinflussen welche Inhalte angezeigt werden.
    </p>
    <h1 
      class="text-center text-4xl text-gray-200 font-bold tracking-tight sm:text-5xl lg:text-6xl"
      v-text="'Lerne aus vorherigen Spielen'"
    />
    <div class="flex justify-center flex-wrap my-4">
      <!-- Card -->
      <div class="bg-white rounded-md h-72 w-4/5 lg:w-2/6 mb-4 mr-0 lg:m-6 md:mx-12 mb-8 mb-2 lg:mr-0 lg:mb-8">
        <div class="h-1/3 flex-col w-full bg-yellow-200">
          <!-- Faction won -->
          <img 
            class="w-full h-full"
            src="/img/the-emirates-of-hacan.png" 
            alt="hacan faction picture"
          >
        </div>

        <div class="flex h-2/3">
          <!-- Players participated -->
          <div class="h-full w-1/2 flex items-center flex-col border-r-2 border-gray-300">
            <p class="text-gray-900">
              Mitspieler: 
            </p>
            <hr class="w-4/5 border-gray-300 my-2">
            <div class="flex -space-x-1 overflow-hidden justify-center">
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              >
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              >
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              >
            </div>
            <div class="flex -space-x-1 overflow-hidden justify-center">
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              >
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              >
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              >
            </div>
            <p class="text-gray-900">
              Zweiter Platz:
            </p>
            <hr class="w-4/5 border-gray-300 my-2">
          </div>

          <!-- Player won -->
          <div class="h-full w-1/2 text-gray-900 flex items-center flex-col">
            <p>
              Am meisten Punkte: 
            </p>
            <hr class="w-4/5 border-gray-300 my-2">
            <span class="inline-block">
              <img
                class="h-24 w-24 rounded-md"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              >
              <span class="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 block border-2 border-white rounded-full">
                <span class="block h-4 w-4 rounded-full bg-gray-300" />
              </span>
            </span>
            <p>
              Punkte: 
            </p>
            <hr class="w-4/5 border-gray-300 my-2">
          </div>
        </div>
      </div>
            
      <!-- Card -->
      <div class="bg-white rounded-md h-72 w-4/5 md:mx-12 lg:mr-0 lg:w-2/6 mb-4 r-0 lg:m-6 lg:mb-8 mb-8 mb-2">
        <div class="h-1/3 w-full bg-yellow-200">
          <!-- Faction won -->
          <img 
            class="w-full h-full"
            src="/img/the-mahact-gene-sorcerers.png" 
            alt="hacan faction picture"
          >
        </div>

        <div class="flex h-2/3">
          <!-- Players participated -->
          <div class="h-full w-1/2 flex items-center flex-col border-r-2 border-gray-300">
            <p class="text-gray-900">
              Mitspieler: 
            </p>
            <hr class="w-4/5 border-gray-300 my-2">
            <div class="flex -space-x-1 overflow-hidden justify-center">
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              >
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              >
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              >
            </div>
            <div class="flex -space-x-1 overflow-hidden justify-center">
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              >
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              >
              <img
                class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              >
            </div>
            <p class="text-gray-900">
              Zweiter Platz:
            </p>
            <hr class="w-4/5 border-gray-300 my-2">
          </div>

          <!-- Player won -->
          <div class="h-full w-1/2 text-gray-900 flex items-center flex-col">
            <p>
              Am meisten Punkte: 
            </p>
            <hr class="w-4/5 border-gray-300 my-2">
            <span class="inline-block z-1">
              <img
                class="h-24 w-24 rounded-md"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              >
              <span class="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 block border-2 border-white rounded-full">
                <span class="block h-4 w-4 rounded-full bg-gray-300" />
              </span>
            </span>
            <p>
              Punkte: 
            </p>
            <hr class="w-4/5 border-gray-300 my-2">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LastGame'
}
</script>