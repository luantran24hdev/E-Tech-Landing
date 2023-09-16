<template>
  <div class="bg-our text-center ">
   <div class="title"> Our Partners </div>
    <div class="max-w-7xl mx-auto pp">
      <div class="flex justify-between">
        <swiper :options="swiperBrandOptions" class="">
          <swiper-slide v-for="(imgSrc, index) in branchArr" :key="index">
            <img :src="imgSrc.src" alt="" class="w-[260px] h-[100[px]" />
          </swiper-slide>
          <div class="swiper-button-prev transform rotate-180" slot="button-prev">
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
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
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
    background-color: #F6F6F6;
}
.pp {
  padding-bottom: 120px;
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
padding-top: 120px;
}
.swiper-button-next, .swiper-button-prev {
    top: 50%;
  }
  .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
    content: '';
  }
  .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
    content: '';
  }
</style>
