<template>
  <b-container class="bv-example-row">
    <b-row class="justify-content-md-center">
      <b-card border-variant="dark">
        <b-row align-h="center">
          <p class="mt-1 mr-2">รายการอาหาร</p>
        </b-row>
        <b-row align-h="end">
          <p class="mt-1 mr-2">ชื่อ :</p>
          <b-form-input
            id="inline-form-input-name"
            class="col-8 mr-2"
          ></b-form-input>
        </b-row>
        <b-row align-h="end">
          <p class="mt-1 mr-2">ชื่อ :</p>
          <b-form-input
            id="inline-form-input-name"
            class="col-8 mr-2"
          ></b-form-input>
        </b-row>
        <b-row align-h="end">
          <p class="mt-1 mr-2">ชื่อ :</p>
          <b-form-input
            id="inline-form-input-name"
            class="col-8 mr-2"
          ></b-form-input>
        </b-row>
        <b-link @click="add"><p>+ เพิ่มตัวเลือก</p></b-link>

        <router-link to="/result">
          <b-button variant="primary">ประมวลผล</b-button>
        </router-link>
      </b-card>
    </b-row>
  </b-container>
</template>
