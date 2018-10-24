<template lang="pug">
  div(id="app")
    router-view
</template>

<style lang="sass">
@include font('Kollektif-bold', './assets/fonts/kollektif/Kollektif-Bold')
@include font('Lato', './assets/fonts/Lato/Lato-Regular')

*
  padding: 0
  margin: 0
  box-sizing: border-box

#app 
  font-family: $fontFamilyMain
  font-size: 100%
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: $text
</style>
