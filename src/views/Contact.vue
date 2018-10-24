<template lang="pug">
  .contact
    .contact__form
      .form-item(
        v-for="item in formItems"
        :key="item.id"
      )
        span.form-item__label {{ item.label }}
        input.form-item__input(
          v-show="item.element === 'input'"
          :class="{ invalid: isInvalid(item.type, form[item.prop]) }"
          :type="item.type"
          :placeholder="item.placeholder"
          maxlength="255"
          v-model="form[item.prop]"
        )
        textarea.form-item__textarea(
          v-show="item.element === 'textarea'"
          :class="{ invalid: isInvalid(item.type, form[item.prop]) }"
          :placeholder="item.placeholder"
          v-model="form[item.prop]"
          maxlength="255"
          rows="4"
        )
      
      button.form-button(:class="{ invalid: oneElementEmpty }") Send message
</template>

<script>
export default {
  name: 'Contact',

  data: () => ({
    form: {
      name: null,
      lastname: null,
      email: null,
      about: null,
      message: null
    }
  }),

  computed: {
    formItems() {
      return [
        {
          id: 0,
          prop: 'name',
          label: 'Name',
          element: 'input',
          type: 'input/text',
          placeholder: 'Enter name'
        },
        {
          id: 1,
          prop: 'lastname',
          label: 'Lastname',
          element: 'input',
          type: 'input/text',
          placeholder: 'Enter lastname'
        },
        {
          id: 2,
          prop: 'email',
          label: 'Email',
          element: 'input',
          type: 'input/email',
          placeholder: 'Enter email'
        },
        {
          id: 3,
          prop: 'about',
          label: 'About',
          element: 'input',
          type: 'input/text',
          placeholder: 'Enter about subject'
        },
        {
          id: 4,
          prop: 'message',
          label: 'Message',
          type: 'textarea',
          element: 'textarea',
          placeholder: 'Enter message'
        }
      ]
    },

    oneElementEmpty() {
      return !this.form.name || !this.form.lastname || !this.form.email || !this.form.about || !this.form.message
    }
  },

  methods: {
    isInvalid(type, value) {
      if (value === null) {
        return false
      } else {
        return value.length <= 0
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.contact
  position: relative
  @include full-screen

  &__form
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 100%
    max-width: 24rem
    padding: 0 1rem

  .form-item
    margin-bottom: 1rem

    &:nth-child(1),
    &:nth-child(2)
      display: inline-block
      width: 48%
    &:nth-child(1)
      margin-right: 4%

    &__label
      display: block
      line-height: 1.7
      font-size: 1rem
    &__input,
    &__textarea
      font-size: 0.8rem
      padding: 0.5rem
      border: 1px solid $border
      border-radius: 4px
      width: 100%
      &.invalid
        border: 1px solid red
  
  .form-button
    @include button
</style>
