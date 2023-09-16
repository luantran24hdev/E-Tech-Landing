<template>
  <div class="form-email">
    <p>
      {{ $tc("we-will") }} 
    </p>
    <div class="form-email__input">
      <a-input-search class="custom-input" placeholder="Enter your email">
        <template v-slot:enter-button>
          <!-- Replace loading spinner with an arrow icon -->
          <a-icon type="arrow-right"  />
        </template>
      </a-input-search>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    components: {},
  },
};
</script>
<style lang="scss" scoped>
.form-email {
  margin: 97px auto;
  width: 560px;
  text-align: center;
  p {
    width: 560px;
    margin-top: 97px;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    color: #fff;
    margin-bottom: 32px;
    line-height: 126%;
  }
  &__input {
    width: 100%;
    border-radius: 8px;
    background-color: #fff;
    position: relative;

    .ant-input-affix-wrapper {
      height: 56px;
      line-height: 56px;
    }

    .custom-input {
      border: none !important;
      input {
        border: none !important;
      }
    }
  }
}
</style>
