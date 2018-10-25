<template lang="pug">
  .contact
    form.contact__form
      .form-item(
        v-for="item in formItems"
        :key="item.id"
      )
        span.form-item__label {{ item.label }}
        input.form-item__input(
          v-if="item.element === 'input'"
          :class="{ invalid: isInvalid(item.type, form[item.prop]) }"
          :type="item.type"
          :placeholder="item.placeholder"
          maxlength="255"
          v-model="form[item.prop]"
        )
        textarea.form-item__textarea(
          v-if="item.element === 'textarea'"
          :class="{ invalid: isInvalid(item.type, form[item.prop]) }"
          :placeholder="item.placeholder"
          v-model="form[item.prop]"
          maxlength="255"
          rows="4"
        )
      
      button.form-button(
        v-if="!sent"
        type="submit"
        :class="{ blocked: oneElementEmpty | sending }"
        @click.prevent="submitHandler()"
      ) {{ !sending ? 'Send Message' : 'Sending...' }}
  
      span.form-sent-msg(
        v-else
        :class="{ error: error }"
      ) {{ !error ? "Message sent" : "Couldn't send message" }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contact',

  data: () => ({
    form: {
      name: null,
      lastname: null,
      email: null,
      about: null,
      message: null
    },
    sending: false,
    sent: false,
    error: false
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
    },

    submitHandler() {
      if (!this.sending && !this.oneElementEmpty) {
        this.submit()
      }
    },

    submit() {
      this.sending = true

      axios
        .post(`${process.env.VUE_APP_FIREBASE_URL}/messages.json`, {
          ...this.form
        })
        .then(
          () => {
            this.sending = false
            this.sent = true
          },
          () => {
            this.sending = false
            this.sent = true
            this.error = true
          }
        )
    }
  }
}
</script>

<style lang="sass" scoped>
.contact
  background-color: $bg-primary
  @include full-screen

  &__form
    @include center
    width: 100%
    max-width: 24rem
    padding: 1rem

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
      font-family: $fontFamilyMain
      color: $text
      padding: 0.5rem
      border: 1px solid $border
      border-radius: 4px
      width: 100%
      &.invalid
        border: 1px solid red
  
  .form-button
    @include button
  
  .form-sent-msg
    height: 2rem
    color: $success
    &.error
      color: $danger
</style>
