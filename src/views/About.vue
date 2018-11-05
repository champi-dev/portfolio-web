<template lang="pug">
  .about
    .about__content
      img.about__avatar(src="../assets/images/avatar.jpg")
      .about__avatar-info
        h1.about__title Daniel Sarmiento Cordero
        img.about__flag(src="../assets/images/co.png")
        h2.about__subtitle Colombia
        p.about__description Front-end web developer. I love building slick and modern user interfaces using the best and latest web technologies.
        .about__tech-logos
          .about__vue-logo
          .about__react-logo
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="sass" scoped>
.about
  background-color: $bg-primary
  @include full-screen

  &__content
    @include center
    background: $bg-primary
    width: 100%
    text-align: center
    max-width: $mediumBreakPoint
    padding-bottom: 1rem
    @media screen and (min-width: $mediumBreakPoint)
      top: 50%
      transform: translate(-50%, -50%)

  &__avatar
    width: 12rem
    border-radius: 50%
    margin-top: 1rem
    @media screen and (min-width: $mediumBreakPoint)
      vertical-align: middle
  
  &__avatar-info
    @media screen and (min-width: $mediumBreakPoint)
      display: inline-block
      vertical-align: middle

  &__title
    color: $text
    font-size: 1.3rem
    font-weight: 400
    margin-bottom: 0.25rem

  &__flag
    width: 1.75rem
    margin-right: 10px
    border-radius: 4px
  
  &__subtitle
    color: $text
    font-size: 1.1rem
    font-weight: 400
    display: inline-block
    vertical-align: top

  &__description
    color: lighten($text, 20%)
    margin-top: 1rem
    padding: 0 0.5rem
    font-weight: 400
    text-align: center
    font-size: 0.9rem
    max-width: 27.6875rem
    margin-left: auto 
    margin-right: auto 
    & .heart
      color: red
  
  &__tech-logos
    margin-top: 0.5rem
  
  &__vue-logo,
  &__react-logo
    width: 2rem
    height: 2rem
    background-repeat: no-repeat
    background-size: contain
    display: inline-block

  &__vue-logo
    background-image: url('../assets/images/vue-logo.svg')
    margin-right: 10px
  
  &__react-logo
    background-image: url('../assets/images/react-logo.svg')
</style>
