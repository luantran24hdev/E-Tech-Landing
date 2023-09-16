<template>
  <div class="form-email">
    <p class="transition-all duration-500">
      {{ $tc("we-will") }}
    </p>
    <EmailInputFooter />
  </div>
</template>
<script>
import EmailInputFooter from '../../components/EmailInput/EmailInputFooter.vue'
export default {
  methods: {},
  components: {
    EmailInputFooter
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
  @media (max-width: 620px) {
    p {
      margin-top: 0px;
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
  &__input {
    width: 100%;
    border-radius: 8px;
    background-color: #fff;
    position: relative;
    align-items: center;
    padding: 0px 14px;
    display: flex;
    input {
      width: 532px;
      height: 56px;
      border-radius: 8px;
      width: 100%;
    }
    @media (max-width: 720px) {
      input {
   width: 100%;
  }
}
    input:focus {
      outline: none;
    }
    ::placeholder {
      color: #545454;

      /* Montserrat/Regular/14px */
      font-family: "Montserrat", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 19.6px */
    }
  }
}
@media (max-width: 720px) {
  .form-email {
    margin: 37px auto;
    width: 100%;
  }
}
@media (max-width: 720px) {
  .form-email {
    p {
      width: 100%;
    }
  }
}
</style>
