<template lang="pug">
  .home
    header.home__header
      h1.home__title devsarmi.co
      h2.home__subtitle passion for web apps
      router-link.home__call(to="/contact" tag="button") Contact me
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="sass" scoped>
.home
  background: $bg-primary
  @include full-screen

  &__header
    text-align: center
    position: absolute
    top: 50% 
    left: 50% 
    transform: translate(-50%, -50%)

  &__title
    font-family: $fontFamilySecondary
    font-weight: 400
    font-size: 2.5rem
    line-height: 1.6
  
  &__subtitle
    font-size: 1rem
    font-weight: 400
    line-height: 1.6
    margin-bottom: 3rem
  
  &__call
    @include button
</style>
