<template lang="pug">
  div(id="app")
    div(id="nav")
      router-link(to="/") Home
      router-link(to="/about") About
    router-view
</template>

<style lang="sass">
@include font('Kollektif-bold', './assets/fonts/kollektif/Kollektif-Bold')
@include font('Lato', './assets/fonts/Lato/Lato-Regular')

#app 
  font-family: $fontFamilyMain
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $text

#nav 
  padding: 30px
  a 
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active 
      color: #42b983
</style>
