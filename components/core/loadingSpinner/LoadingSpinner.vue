<template>
  <div 
    v-if="!!loadingData" 
    id="spinner">
    <div 
      id="spinner-element" 
      :class="classList">
      <div 
        class="spinner" 
        subString="123">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinnger',

  props: {
    classList: {
      type: String,
      required: false,
      default: ''
    },

    isLoading: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  computed: {
    loadingData () {
      return this.isLoading
    }
  }
}
</script>
