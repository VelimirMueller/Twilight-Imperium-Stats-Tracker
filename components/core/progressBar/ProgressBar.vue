<template>
  <div id="progress">
    <div id="bar" />
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',

  methods: {
    frame(width, elem, id, i = 0) {
      if (width >= 100) {
        clearInterval(id)
        i
      } else {
        width++
        elem.style.width = width + '%'
      }
    },

    move() {
      var i = 0;
      if (i == 0) {
        i = 1;
        var elem = document.getElementById('bar');
        var width = 1;

        var id = setInterval(this.frame, 5);
      }
      this.frame(width, elem, id, i)
    }
  },

  mounted () {
    document.getElementById('progressStart').addEventListener('click', this.move)
  },

  beforeUnmount () {
    document.getElementById('progressStart').removeEventListener('click', this.move)
  }
}
</script>
