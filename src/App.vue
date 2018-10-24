<template lang="pug">
  div(id="app")
    router-view
</template>

<style lang="sass">
@include font('Kollektif', './assets/fonts/kollektif/Kollektif')
@include font('Lato', './assets/fonts/Lato/Lato-Regular')

*
  padding: 0
  margin: 0
  box-sizing: border-box
  outline: none

html
  font-size: 100%
  @media screen and (min-width: $mediumBreakPoint)
    font-size: 110%
  @media screen and (min-width: $largeBreakPoint)
    font-size: 120%

#app
  font-family: $fontFamilyMain
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: $text
</style>
