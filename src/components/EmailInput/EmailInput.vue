<template>
  <div class="form-email__input">
    <input type="text" :placeholder="$tc('enter-your-email')" />
    <svg
      class="mr-[14px]"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.93 18.8201C14.74 18.8201 14.55 18.7501 14.4 18.6001C14.11 18.3101 14.11 17.8301 14.4 17.5401L19.94 12.0001L14.4 6.46012C14.11 6.17012 14.11 5.69012 14.4 5.40012C14.69 5.11012 15.17 5.11012 15.46 5.40012L21.53 11.4701C21.82 11.7601 21.82 12.2401 21.53 12.5301L15.46 18.6001C15.31 18.7501 15.12 18.8201 14.93 18.8201Z"
        fill="black"
      />
      <path
        d="M20.83 12.75H4C3.59 12.75 3.25 12.41 3.25 12C3.25 11.59 3.59 11.25 4 11.25H20.83C21.24 11.25 21.58 11.59 21.58 12C21.58 12.41 21.24 12.75 20.83 12.75Z"
        fill="black"
      />
    </svg>
  </div>
</template>
<script>
export default {

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
    font-family: "Montserrat", sans-serif;
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
    // background-color: #fff;
    border: 1px solid;
    position: relative;
    align-items: center;
    padding: 0px 14px;

    display: flex;
    input {
      width: 532px;
      height: 56px;
      border-radius: 8px;
      width: 100%;
      background: none;
      color: #545454;
      font-family: "Montserrat", sans-serif;
      font-size: 14px;
      z-index: 3;
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
