<template>
  <div class="hero w-full">
    <div class="header flex">
      <div class="header__wp w-full h-full flex">
        <div class="logo">
          <a href="">
            <img src="../assets/images/logo.png" alt="" />
          </a>
        </div>

        <ul class="flex">
          <li><a href=""> About us </a></li>
          <li><a href=""> Games </a></li>
          <li><a href=""> Partners </a></li>
          <li><a href=""> Contact us </a></li>
          <SelectLanguage
            :options="['Viet nam', ' English']"
            :default="'English'"
            class="select"
            @input="alert(displayToKey($event))"
          />
        </ul>
      </div>
    </div>
    <div class="content text-center">
      <h1 class="mb-[21px]">We’re Getting Ready</h1>
      <div class="content__box-time flex m-auto">
        <div class="flex items-center">
          <div class="flex flex-col items-center">
            <span class="text-6xl">30</span>
            <span class="text-base">Days</span>
          </div>
        </div>
        <span> <TwoPoint /></span>
        <div class="flex items-center">
          <div class="flex flex-col items-center">
            <span class="text-6xl">30</span>
            <span class="text-base">Days</span>
          </div>
        </div>
        <span> <TwoPoint /></span>
        <div class="flex items-center">
          <div class="flex flex-col items-center">
            <span class="text-6xl">30</span>
            <span class="text-base">Days</span>
          </div>
        </div>
        <span> <TwoPoint /></span>
        <div class="flex items-center">
          <div class="flex flex-col items-center">
            <span class="text-6xl">30</span>
            <span class="text-base">Days</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SelectLanguage from "../components/SelectLanguage.vue";
import TwoPoint from "../components/Icons/TwoPoint.vue";

export default {
  components: {
    SelectLanguage,
    TwoPoint,
  },
};
</script>
<style lang="scss">
.hero {
  background-image: url("../assets/images/hero-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 1018px;
  .header {
    width: 100%;

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
  .content {
    margin-top: 132px;
    margin: 0 auto;
    h1 {
      margin-bottom: 21px;
      color: #fff;
      text-align: center;
 
      font-family: 'Playfair Display', serif;
      font-size: 80px;
      font-style: normal;
      font-weight: 900;
  
      letter-spacing: 0.6px;
    }
    &__box-time {
      width: 756px;
      height: 150px;
      border-radius: 21px;
      background: var(--neutral-white, #fff);
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
      padding: 26px 0px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
}
</style>
