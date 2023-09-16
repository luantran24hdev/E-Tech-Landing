<template>
  <div class="header flex">
    <div class="header__wp w-full h-full flex">
      <div class="logo">
        <a href="">
          <img src="@/assets/images/logo.png" alt="" />
        </a>
      </div>

      <ul class="flex">
        <li><a href=""> About us </a></li>
        <li><a href=""> Games </a></li>
        <li><a href=""> Partners </a></li>
        <li><a href=""> Contact us </a></li>
        <!-- <SelectLanguage
          :options="['Viet nam', ' English']"
          :default="'English'"
          class="select"
          @input="alert(displayToKey($event))"
        /> -->
      </ul>
    </div>
  </div>
</template>
<script>
// import SelectLanguage from "../SelectLanguage.vue";
export default {
  components: {
    // SelectLanguage,
  },
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
margin-bottom: 210px;
  align-items: center;
  &__wp {
    padding: 20px 79px 0px 79px;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 108px;
      height: 64px;
      a {
        img {
          width: 100%;
        }
      }
    }
    ul {
      color: #fff;
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      text-transform: uppercase;
      li {
        padding: 0 16px;
      }
    }
  }
}
</style>
