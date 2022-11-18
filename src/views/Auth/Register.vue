<template>
  <v-container>
    <v-form class="login" ref="form" v-model="valid" lazy-validation>
        <div class="login-title">
            <h1>Registration</h1>
        </div>
    <v-text-field
      label="E-mail"
      :rules="EmailRules"
      hide-details="auto"
      name="email"
      type="email"
      v-model="email"
    ></v-text-field>
    <v-text-field 
    label="Password"
    :rules="rules"
    hide-details="auto"
    name="password"
      type="password"
      v-model="password"
      ></v-text-field>
       <v-text-field 
    label="Confirm Password"
    :rules="confirmPassRules"
    hide-details="auto"
    name="confirm-password"
      type="password"
      v-model="confirmPassword"
      ></v-text-field>
    <v-btn class="btnLogin" @click="onSubmit" :disabled = "!valid || loading" :loading="loading">Create Account</v-btn>
  </v-form>
  </v-container>
</template>

<script>
export default {
data () {
    return {
        email: '',
        password: '',
        confirmPassword: '',
        valid: true,

        EmailRules: [
                value => !!value || 'Required.',
                value => (value && value.length >= 5) || 'Min 5 characters',
               value => /.+@.+\..+/.test(value) || 'Email must be Valid!',
            ],

         rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 6) || 'Min 6 characters',
      ],
      confirmPassRules: [
        value => !!value || 'Required.',
        value => value === this.password || 'Password should match!',
      ],
    }
},

methods: {
    onSubmit() {
        if(this.$refs.form.validate()) {
            const user = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('registerUser', user)
            .then(() => {
              this.$router.push('/login')
            })
            .catch(() => {})
            return this.email = '', this.password = '', this.confirmPassword = ''
        }
    }
},
computed: {
  loading () {
    return this.$store.getters.loading
  }
}
}
</script>

<style>

</style>