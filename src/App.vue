<template lang="pug">
  div(id="app")
    toolbar
    router-view
</template>

<script>
import Toolbar from 'Toolbar'

export default {
  name: 'App',

  components: {
    Toolbar
  }
}
</script>


<style lang="scss">
@include font('Kollektif', './assets/fonts/kollektif/Kollektif');
@include font('Lato', './assets/fonts/Lato/Lato-Regular');

@import './assets/styles/nomalize.css';

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

html {
  font-size: 100%;
  @media screen and (min-width: $mediumBreakPoint) {
    font-size: 110%;
  }
  @media screen and (min-width: $largeBreakPoint) {
    font-size: 120%;
  }
}

#app {
  font-family: $fontFamilyMain;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text;
}

button,
i {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
