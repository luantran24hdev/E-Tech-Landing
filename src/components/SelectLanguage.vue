<template>
  <a-select class="selectLang" v-model="selectedValue" style="width: 200px" @change="handleChange">
    <a-select-opt-group>
      <template slot="label"> Manager </template>
      <a-select-option value="vi">Vietnamese</a-select-option>
      <a-select-option value="en">English</a-select-option>
    </a-select-opt-group>
  </a-select>
</template>

<script>
export default {
  data() {
    return {
      selectedValue: this?.$route?.params?.locale,
    };
  },
  components: {},
  methods: {
    handleChange(value) {
      this.$router.push(`/${value}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.selectLang {
  div {
    background-color: none !important;
  }
}

</style>
