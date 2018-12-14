<template lang="pug">
  .toolbar
    a.toolbar__github(href="https://github.com/devsarmico")
    .toolbar__links
      router-link.toolbar__link(to="/" exact) Home
      router-link.toolbar__link(to="/about" exact) About
      router-link.toolbar__link(to="/contact" exact) Contact
    //- router-link.toolbar__link(to="/work" exact) Work
</template>

<script>
export default {
  name: 'Toolbar'
}
</script>

<style lang="sass" scoped>
.toolbar
  position: fixed
  top: 0
  left: 50%
  transform: translateX(-50%)
  width: 100%
  max-width: $mediumBreakPoint
  padding: 1rem
  z-index: 2
  background-color: $bg-primary
  height: $toolbarHeight
  display: flex
  justify-content: space-between
  align-items: center

  &__link
    color: lighten($text, 45%)
    text-decoration: none
    padding: 0.25rem 0
    &.router-link-active
      color: $text
      box-shadow: 0px 8px 0px -5px $primary

    &:not(:last-child)
      margin-right: 0.8rem
  
  &__github
    background-image: url('../assets/images/github-logo.svg')
    width: 2rem
    height: 2rem
    background-repeat: no-repeat
    background-size: cover
</style>
