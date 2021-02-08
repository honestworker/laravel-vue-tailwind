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
                  type="name"
                  class="px-3 py-3 placeholder-gray-400 text-gray-800 bg-white rounded-3xl text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Name*"
                  @keyup="changeName"
                  v-model.trim="$v.name.$model"
                />
                <div class="text-red-500 text-left text-xs pt-1 pl-1" v-if="submit_status&&!$v.name.required">Name is required</div>
                <div class="text-red-500 text-left text-xs pt-1 pl-1" v-if="submit_status&&$v.name.required&&!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
                <div class="text-red-500 text-left text-xs pt-1 pl-1" v-if="submit_status&&errors&&errors.name">
                  <div v-if="Array.isArray(errors.name)">
                    <div v-for="(error, index) in errors.name" :key="index">
                      {{ error }}
                    </div>
                  </div>
                  <div v-if="!Array.isArray(errors.name)">
                    {{ errors.name }}
                  </div>
                </div>
              </div>

              <div class="relative w-full mb-3">
                <input
                  type="email"
                  class="px-3 py-3 placeholder-gray-400 text-gray-800 bg-white rounded-3xl text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Email*"
                  @keyup="changeEmail"
                  v-model.trim="$v.email.$model"
                />
                <div class="text-red-500 text-left text-xs pt-1 pl-1" v-if="submit_status&&!$v.email.required">Email is required</div>
                <div class="text-red-500 text-left text-xs pt-1 pl-1" v-if="submit_status&&$v.email.required&&!$v.email.email">Email is incorrect format</div>
                <div class="text-red-500 text-left text-xs pt-1 pl-1" v-if="submit_status&&errors&&errors.email">
                  <div v-if="Array.isArray(errors.email)">
                    <div v-for="(error, index) in errors.email" :key="index">
                      {{ error }}
                    </div>
                  </div>
                  <div v-if="!Array.isArray(errors.email)">
                    {{ errors.email }}
                  </div>
                </div>
              </div>

              <div class="relative w-full mb-3">
                <input
                  type="password"
                  class="px-3 py-3 placeholder-gray-400 text-gray-800 bg-white rounded-3xl text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Password*"
                  @keyup="changePassword"
                  v-model.trim="$v.password.$model"
                />
                <div class="text-red-500 text-left text-xs pt-1 pl-1" v-if="submit_status&&!$v.password.required">Password is required</div>
                <div class="text-red-500 text-left text-xs pt-1 pl-1" v-if="submit_status&&$v.password.required&&!$v.password.minLength">Password must have at least {{$v.password.$params.minLength.min}} letters.</div>
                <div class="text-red-500 text-left text-xs pt-1 pl-1" v-if="submit_status&&errors&&errors.password">
                <div v-if="Array.isArray(errors.password)">
                  <div v-for="(error, index) in errors.password" :key="index">
                    {{ error }}
                  </div>
                </div>
                <div v-if="!Array.isArray(errors.password)">
                  {{ errors.password }}
                </div>
              </div>
                
              </div>

              <div class="relative w-full mb-3">
                <input
                  type="password"
                  class="px-3 py-3 placeholder-gray-400 text-gray-800 bg-white rounded-3xl text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Confirm Password*"
                  @keyup="changeConfirmPassword"
                  v-model.trim="$v.confirm_password.$model"
                />
                <div class="text-red-500 text-left text-xs pt-1 pl-1" v-if="submit_status&&!$v.confirm_password.required">Confirm Password is required</div>
                <div class="text-red-500 text-left text-xs pt-1 pl-1" v-if="submit_status&&$v.confirm_password.required&&!$v.confirm_password.sameAsPassword">Confirm Password does not match Password</div>
              </div>

              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    class="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150 cursor-pointer"
                    v-model.trim="agree_policy"
                  />
                  <span class="ml-2 text-sm text-gray-800">
                    I agree with the
                    <router-link to="/privacy-policy" class="hover:no-underline text-green-400 focus:text-red-500 active:text-red-500 hover:text-red-500 inline-block text-sm">
                      <span class="inline-block">Privacy Policy</span>
                    </router-link>
                  </span>
                </label>
                <div class="text-red-500 text-xs pt-1 pl-1" v-if="submit_status&&!agree_policy">Please agree</div>
              </div>

              <div class="text-center mt-4">
                <button
                  class="bg-red-500 border-red-500 text-white active:bg-green-400 active:border-green-400 hover:bg-green-400 hover:border-green-400 focus:bg-green-400 focus:border-green-400 text-sm px-6 py-3 rounded-3xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                  :disabled="submit_status === 'PENDING'"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { REGISTER } from "../../store/actions.type";
import { APP_URL } from "../../common/config";
import { required, sameAs, minLength, email } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
      agree_policy: false,
      submit_status: null,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirm_password: {
      required,
      sameAsPassword: sameAs('password')
    },
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid || !this.agree_policy) {
        this.submit_status = 'ERROR'
      } else {
        this.submit_status = 'PENDING'

        let name = this.name
        let email = this.email
        let password = this.password
        let confirm_password = this.confirm_password
        
        this.$store
          .dispatch(REGISTER, { name, email, password, confirm_password })
          .then(() => { window.location.href = APP_URL + 'login' })
          .catch(() => this.submit_status = 'ERROR' );
      }
    },
    changeName() {
      if (this.errors) {
        if (this.errors.name) {
          this.errors.name = null
        }
      }
    },
    changeEmail() {
      if (this.errors) {
        if (this.errors.email) {
          this.errors.email = null
        }
      }
    },
    changePassword() {
      if (this.errors) {
        if (this.errors.password) {
          this.errors.password = null
        }
      }
    },
    changeConfirmPassword() {
      if (this.errors) {
        if (this.errors.confirm_password) {
          this.errors.confirm_password = null
        }
      }
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>
