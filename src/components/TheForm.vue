<template>
  <div class='form'>
    <form key="formReady" v-if='!$store.state.sent' action='/fakePost' method='POST' role='form' @submit.prevent>
      <div class="field">
        <label class="label">First Name:</label>
        <div class="control">
          <input @input="$v.form.firstName.$touch" :class="{'is-danger': formError && $v.form.firstName.$invalid}" class="input" v-model='form.firstName' type="text" placeholder="Enter your First name">
        </div>
        <p :class="{visible: $v.form.firstName.$invalid && $v.form.firstName.$dirty}" class="help is-danger">This field is required</p>
        <p :class="{visible: $v.form.firstName.$invalid && $v.form.firstName.$dirty}" class="help is-danger">Please use letters for your Name</p>
      </div>

      <div class="field">
        <label class="label">Surname:</label>
        <div class="control">
          <input @input="$v.form.surname.$touch" :class="{'is-danger': formError && $v.form.surname.$invalid}" class="input" type="text" placeholder="Enter your surname" value="" v-model='form.surname'>
        </div>
        <p :class="{visible: $v.form.surname.$invalid && $v.form.surname.$dirty}" class="help is-danger">This field is required</p>
        <p :class="{visible: $v.form.surname.$invalid && $v.form.surname.$dirty}" class="help is-danger">Please use letters for your Surname</p>
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
        <label class="label">Customer Query:</label>
        <div class="control">
          <textarea class="textarea" v-model='form.query' placeholder="Enter your message"></textarea>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button @click='submitForm()' class="button is-link">Submit <i class='arrow-right'>></i></button>
        </div>
      </div>
    </form>

    <div key="formSent" class="form-sent" v-if="!$store.state.first && $store.state.sent">
      <h2 class="is-size-5 has-text-left">The entry has been added to the list!</h2>
    </div>
  </div>
</template>

<script>
import { required, alpha, email } from "vuelidate/lib/validators";

export default {
  name: "AppForm",
  data() {
    return {
      formError: false,
      form: {
        firstName: "",
        surname: "",
        email: "",
        query: ""
      }
    };
  },
  methods: {
    resetForm() {
      let cleanForm = {
        firstName: "",
        surname: "",
        email: "",
        query: ""
      };
      this.$v.$reset();
      this.form = cleanForm;
    },
    submitForm() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        this.formError = true;
        return false;
      } else {
        this.formError = false;
      }
      if (this.$store.state.first) {
        this.$store.commit("firstFormSent");
      }
      // send the form to the Vuex store
      this.$store.dispatch("sendForm", this.form);
      // reset the form for the next entry
      this.resetForm();
    }
  },
  validations: {
    form: {
      firstName: {
        alpha,
        required
      },
      surname: {
        alpha,
        required
      },
      email: {
        required,
        email
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  .label {
    color: #0d326e;
  }

  .input,
  .textarea {
    border: none;
  }

  h2 {
    color: #69b0e1;
  }

  .help {
    opacity: 0;
    height: 100%;
    max-height: 1px;
    transition: all 0.3s ease-in-out;
  }

  .visible {
    opacity: 1;
    max-height: 100%;
  }

  .form-sent {
    margin: 0 0 32px;
  }
}
</style>
