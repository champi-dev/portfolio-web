<template lang="pug">
  .work
    .work__items
      .link-item(
        v-for="item in linkItems"
        :key="item.id"
      )
        span.link-item__label {{ item.label }}
        a.link-item__link(:href="item.link")
          .link-item__preview(:class="item.class")
</template>

<script>
export default {
  name: 'Work',

  data: () => ({
    linkItems: [
      {
        id: 0,
        label: 'react-playlist-player',
        class: 'react-playlist-player',
        link: 'https://react-playlist-player.firebaseapp.com/'
      }
    ]
  })
}
</script>

<style lang="sass" scoped>
.work
  background-color: $bg-primary
  @include full-screen

  &__items
    background: $bg-primary
    width: 100% 
    max-width: $mediumBreakPoint
    padding: 1rem
    @include center
  
  .link-item
    transition: all 0.3s ease-in-out
    &:hover
      transform: translateY(-5px)
    &__label
      font-size: 1.2rem
      line-height: 2
    &__preview
      width: 100%
      height: 26rem
      box-shadow: $shadowMainBox
      transition: box-shadow 0.3s ease-in-out
      &:hover
        box-shadow: $shadowMainBox--raised
      &.react-playlist-player
        background-image: url('../assets/images/react-playlist-player.png')
        background-size: cover
        background-repeat: no-repeat
        background-position: bottom center
</style>
