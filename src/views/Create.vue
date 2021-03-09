<template>
  <b-container>
    <b-row align-h="center">
      <b-card border-variant="dark">
        <b-row align-h="center">
          <p class="mt-1 mr-2">สร้างบัญชี</p>
        </b-row>
        <b-row align-h="center">
          <p class="mt-1 mr-2">ชื่อ :</p>
          <b-form-input
            id="inline-form-input-name"
            class="col-3 mr-2"
          ></b-form-input>
          <p class="mt-1 mr-2">นามสกุล :</p>
          <b-form-input
            id="inline-form-input-name"
            class="col-3 mr-2"
          ></b-form-input>
        </b-row>
        <b-row align-h="center" class="w-100 mt-3">
          <p class="mt-1 mr-2">เบอร์โทร :</p>
          <b-form-input
            id="inline-form-input-name"
            class="col-3 mr-2"
          ></b-form-input>
          <p class="mt-1 mr-2">รหัสผ่าน :</p>
          <b-form-input
            id="inline-form-input-name"
            class="col-3 mr-2"
          ></b-form-input>
        </b-row>

        <b-row align-h="end" class="mt-3">
          <router-link to="/login">
            <b-button class="mr-2" variant="primary" @click="submit"
              >ประมวลผล</b-button
            >
            <b-button class="mr-3" variant="outline-danger">ยกเลิก</b-button>
          </router-link>
        </b-row>
      </b-card>
    </b-row>
  </b-container>
</template>

<script>
export default {
  methods: {
    submit() {
      alert("Compelet");
    },
  },
};
</script>
