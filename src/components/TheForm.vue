<template>
  <div class='form'>
    <transition name="fade" mode="out-in" appear>
      <form key="formReady" v-if='!$store.state.sent' action='/fakePost' method='POST' role='form' @submit.prevent="submitForm()">
        <div class="field">
          <label class="label">First Name:</label>
          <div class="control">
            <input @input="$v.form.firstName.$touch" :class="{'is-danger': formError && $v.form.firstName.$invalid}" class="input" v-model='form.firstName' type="text" placeholder="Enter your First name">
          </div>
          <p :class="{visible: $v.form.firstName.$invalid && $v.form.firstName.$dirty}" class="help is-danger">This field is required</p>
        </div>

        <div class="field">
          <label class="label">Surname:</label>
          <div class="control">
            <input @input="$v.form.surname.$touch" :class="{'is-danger': formError && $v.form.surname.$invalid}" class="input" type="text" placeholder="Enter your surname" value="" v-model='form.surname'>
          </div>
          <p :class="{visible: $v.form.surname.$invalid && $v.form.surname.$dirty}" class="help is-danger">This field is required</p>
        </div>

        <div class="field">
          <label class="label">Email address:</label>
          <div class="control">
            <input @input="$v.form.email.$touch" :class="{'is-danger': formError && $v.form.email.$invalid}" class="input" type="email" v-model='form.email' placeholder="Enter your email" value="">
          </div>
          <p :class="{visible: $v.form.email.$dirty && form.email.length < 4}" class="help is-danger">This field is required</p>
          <p :class="{visible: $v.form.email.$invalid && $v.form.email.$dirty}" class="help is-danger">This email is invalid</p>
        </div>

        <div class="field">
          <label class="label">Customer Query</label>
          <div class="control">
            <textarea class="textarea" v-model='form.query' placeholder="Enter your message"></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button @click='submitForm()' class="button is-link">Submit</button>
          </div>
        </div>
      </form>

      <div key="formSent" class="form-sent" v-else>
        <h2 class="is-size-3 is-success has-text-left">The form has been added to the list!</h2>
      </div>
    </transition>
  </div>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'

  export default {
    name: 'AppForm',
    data() {
      return {
        formError: false,
        form: {
          firstName: '',
          surname: '',
          email: '',
          query: ''
        }
      }
    },
    methods: {
      resetForm() {
        let cleanForm = {
          firstName: '',
          surname: '',
          email: '',
          query: ''
        }
        this.form = cleanForm
      },
      submitForm() {
        if (this.$v.$invalid) {
          this.formError = true
        } else {
          this.formError = false
        }
        // send the form to the Vuex store
        this.$store.dispatch('sendForm', this.form)
        // reset the form for the next entry
        this.resetForm()
      }
    },
    validations: {
      form: {
        firstName: {
          required
        },
        surname: {
          required
        },
        email: {
          required,
          email
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form {
    .help {
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }

    .visible {
      opacity: 1;
    }
  }

  // transition animation for form and success message
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s ease-out both;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-leave,
  .fade-enter-to {
    opacity: 1;
  }
</style>
