<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full py-4 mb-4 shadow-lg rounded-lg bg-gray-300 border-0"
        >
          <div class="flex-auto px-4 lg:px-10 py-6">
            <form
              @submit.prevent="submit"
            >
              <div class="relative w-full mb-3">
                <input
                  type="email"
                  class="px-3 py-3 placeholder-gray-400 text-gray-800 bg-white rounded-3xl text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Email*"
                  v-model.trim="$v.email.$model"
                />
                <div class="text-red-500 text-left text-xs pt-1 pl-1" v-if="submit_status&&!$v.email.required">Email is required</div>
              </div>

              <div class="relative w-full mb-3">
                <input
                  type="password"
                  class="px-3 py-3 placeholder-gray-400 text-gray-800 bg-white rounded-3xl text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Password*"
                  v-model.trim="$v.password.$model"
                />
                <div class="text-red-500 text-left text-xs pt-1 pl-1" v-if="submit_status&&!$v.password.required">Password is required</div>
              </div>

              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    class="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    v-model.trim="remember_me"
                  />
                  <span class="ml-2 text-sm text-gray-800">
                    Remember me
                  </span>
                </label>
              </div>

              <div class="text-center mt-6">
                <button
                  class="bg-red-500 border-red-500 text-white active:bg-green-400 active:border-green-400 focus:bg-green-400 focus:border-green-400 hover:bg-green-400 hover:border-green-400 text-sm px-6 py-3 rounded-3xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-4 relative">
          <div class="w-full">
            <router-link to="/forgot-password" class="hover:no-underline text-gray-300 focus:text-red-500 active:text-red-500 hover:text-red-500 px-3 py-2 flex items-center text-sm">
              <span class="inline-block">Forgot password?</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { required, email } from 'vuelidate/lib/validators';

export default {
  components: {
  },
  data() {
    return {
      email: '',
      password: '',
      submit_status: null,
      remember_me: false
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    },
    remember: {}
  },
  methods: {
    ...mapActions(["login"]),
    async submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submit_status = 'ERROR'
      } else {
        this.submit_status = 'PENDING'

        try {
          let email = this.email
          let password = this.password
          let UserForm = new FormData()
          UserForm.append('email', email)
          UserForm.append('password', password)
          await this.login(UserForm)
          
          this.$router.push('/admin/dashboard')
        } catch (error) {
          
        }
      }
    }
  }
};
</script>
