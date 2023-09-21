<template>
  <div class="bg-our text-center" id="our-partners">
    <div class="title">{{ $tc("Our Partners") }}</div>
    <div class="max-w-7xl mx-auto pp">
      <div class="flex justify-between">
        <swiper :options="swiperBrandOptions" class="">
          <swiper-slide v-for="(imgSrc, index) in branchArr" :key="index">
            <img :src="imgSrc.src" alt="" class="item" />
          </swiper-slide>
          <div
            class="swiper-button-prev transform rotate-180"
            slot="button-prev"
          >
            <SmdArrowButton direction="left" />
          </div>
          <div class="swiper-button-next" slot="button-next">
            <SmdArrowButton direction="right" />
          </div>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import SmdArrowButton from "@/components/Buttons/SmdArrowButton.vue";
export default {
  data() {
    return {
      swiperBrandOptions: {
        slidesPerView: 6,
        spaceBetween: 30,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
      },
      branchArr: [
        {
          src: require("@/assets/images/ourPartnersCard/ea.svg"),
        },
        {
          src: require("@/assets/images/ourPartnersCard/rec.svg"),
        },
        {
          src: require("@/assets/images/ourPartnersCard/rec-01.svg"),
        },
        {
          src: require("@/assets/images/ourPartnersCard/rec-02.svg"),
        },
        {
          src: require("@/assets/images/ourPartnersCard/rect-03.svg"),
        },
        {
          src: require("@/assets/images/ourPartnersCard/rec-04.svg"),
        },
      ],
    };
  },
  components: {
    SmdArrowButton,
  },
};
</script>
<style lang="scss" scoped>
.bg-our {
  background-color: #f6f6f6;
  padding: 20px 0 35px 0px;
}
.pp {
  // padding-bottom: 120px;
}
.item {
  width: 260px;
  height: 100px;
}

@media (max-width: 920px) {
  .item {
    width: 200px;
  }
}
@media (max-width: 520px) {
  .item {
    width: 100px;
  }
}
.title {
  color: #000;
  text-align: center;

  font-family: "Playfair Display", serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 900;
  line-height: 80px; /* 133.333% */
  letter-spacing: 3.6px;
  margin-bottom: 30px;
}
@media (max-width: 920px) {
  .title {
    font-size: 40px;
    line-height: 50px; /* 133.333% */
    padding-top: 0px;
  }
}
.swiper-button-next,
.swiper-button-prev {
  top: 50%;
}
.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after {
  content: "";
}
.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after {
  content: "";
}
</style>
