<template>
  <div class="navi">
    <div class="col-6 d-flex justify-content-start">
      <router-link :to="{name:'home'}"><i class="fas fa-home"></i></router-link>
    </div>
    <div class="col-6 d-flex justify-content-end">
      <button class="btn btn-primary">Help</button>
      <span v-if="user._id">
        <v-menu offset-y>
          <v-btn slot="activator" color="primary" dark>{{user.name}}
          </v-btn>

          </button>
          <v-list>
            <v-list-tile @click="logout">Logout</v-list-tile>
            <v-list-tile>
              <router-link :to="{name: 'host'}">Host a Dog</router-link>
            </v-list-tile>
          </v-list>
        </v-menu>
      </span>
      <span v-else>
        <router-link :to="{name:'login'}"><button class="btn btn-primary">Login</button></router-link>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navi',
    data() {
      return {

      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      auth() {
        this.$store.dispatch('authenticate')
      },
      logout() {
        this.$store.dispatch('logout')
      }
    }
  }

</script>

<style>
  .fas {
    font-size: 30px;
  }
</style>