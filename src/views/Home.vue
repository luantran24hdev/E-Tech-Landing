<template>
  <div>
    <div class="hero w-full transition-all duration-500">
      <Header />
      <div class="content text-center">
        <h1 class="mb-[21px] transition-all duration-500">
          {{ $tc("we-re") }}
        </h1>
        <TimeGettingReadyBox />
        <FormEmail/>
      </div>
      <img class="old-man" src="../assets/images/oldman.png" alt="" />
    </div>
    <AboutUs />
    <OurGames />
    <OurPartners />
    <Footer />
    <FooterBottom />
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
import FooterBottom from "../components/Footer/BottomFooter.vue";

export default {
  components: {
    TimeGettingReadyBox,
    Header,
    FormEmail,
    AboutUs,
    OurGames,
    OurPartners,
    Footer,
    FooterBottom,
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
  position: relative;
  .old-man {
    position: absolute;
    width: 500px;
    top: 50%;
  }
  @media (max-width: 620px) {
    .old-man {
      position: absolute;
      width: 300px;
      top: 70%;
      left: 25%;
    }
  }
  @media (max-width: 420px) {
    .old-man {
      position: absolute;
      width: 150px;
      top: 80%;
      left: 20%;
    }
  }
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
  @media (max-width: 920px) {
    .content {
      padding: 10px;
    }
    h1 {
      font-size: 60px !important;
      line-height: 52px;
    }
  }
  @media (max-width: 620px) {
    h1 {
      margin-top: 38px;
      font-size: 40px !important;
    }
  }
}
@media (max-width: 720px) {
  .hero {
    height: 800px;
  }
}
@media (max-width: 520px) {
  .hero {
    height: 700px;
  }
}
</style>
