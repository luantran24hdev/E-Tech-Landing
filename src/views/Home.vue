<template>
  <div>
    <div class="hero w-full">
      <Header />
      <div class="content text-center">
        <h1 class="mb-[21px]">{{ $tc("we-re") }}</h1>
        <TimeGettingReadyBox />
        <FormEmail />
      </div>
    </div>
    <AboutUs />
    <OurGames />
    <OurPartners />
    <Footer />
  </div>
</template>
<script>
import TimeGettingReadyBox from "../components/TimeGettingReadyBox/TimeGettingReadyBox.vue";
import Header from "../components/Header/Header.vue";
import FormEmail from "../components/FormEmail/FormEmail.vue";
import AboutUs from "./AboutUs.vue";
import OurGames from "./OurGames.vue";
import OurPartners from "./OurPartners.vue";
import Footer from "../components/Footer/Footer.vue";

export default {
  components: {
    TimeGettingReadyBox,
    Header,
    FormEmail,
    AboutUs,
    OurGames,
    OurPartners,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
.hero {
  background-image: url("../assets/images/hero-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 1018px;

  .content {
    margin: 0 auto;
    h1 {
      margin-bottom: 21px;
      color: #fff;
      text-align: center;

      font-family: "Playfair Display", serif;
      font-size: 80px;
      font-style: normal;
      font-weight: 900;

      letter-spacing: 0.6px;
    }
  }
}
</style>
