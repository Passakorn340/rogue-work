<template>
  <b-container class="bv-example-row">
    <b-row class="justify-content-md-center">
      <b-card border-variant="dark">
        <b-card border-variant="dark">
          <b-row align-h="end">
            <p class="mt-1 mr-2">Tel :</p>
            <b-form-input
              id="inline-form-input-name"
              class="col-7 mr-2"
              placeholder="เบอร์โทรศัพท์"
            ></b-form-input>
          </b-row>
          <b-row align-h="end">
            <p class="mt-1 mr-2">Password :</p>
            <b-form-input
              id="inline-form-input-name"
              class="col-7 mr-2"
              placeholder="******"
            ></b-form-input>
          </b-row>

          <router-link to="/food">
            <b-button variant="primary">Login</b-button>
          </router-link>
        </b-card>
        <router-link to="/create"><p class="mt-2">สร้างบัญชี</p></router-link>
      </b-card>
    </b-row>
  </b-container>
</template>
