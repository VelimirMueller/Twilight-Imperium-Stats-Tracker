<template>
  <div id="progress">
    <div id="bar" />
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',

  methods: {
    move() {
      var i = 0;
      if (i == 0) {
        i = 1;
        var elem = document.getElementById('bar');
        var width = 1;
        var id = setInterval(frame, 5);
        function frame() {
          if (width >= 100) {
            clearInterval(id)
            i = 0
          } else {
            width++
            elem.style.width = width + '%'
          }
        }
      }
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
