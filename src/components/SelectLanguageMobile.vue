<template>

  <div class="select-language" @click="handleToggle">
    <div class="flag">
      <img src="../assets/images/flags/usFlag.svg" alt="" />
    </div>
    <img src="../assets/images/arrowDownMobile.svg" alt="" class="black-fill" />
    <div class="box-language" v-if="isSelected">
      <div class="item-list flex items-center">
        <img
          :style="{ opacity: selectValue === 'vi' ? 1 : 0 }"
          src="../assets/images/checkedIcon.svg"
          alt=""
        />
        <div class="item" @click="setSelectValue('vi')">
          <img src="../assets/images/flags/vieFlag.svg" alt="" />
          <span class="capitalize">Vietnamese</span>
        </div>
      </div>
      <hr>
      <div class="item-list flex items-center">
        <img
          :style="{ opacity: selectValue === 'en' ? 1 : 0 }"
          src="../assets/images/checkedIcon.svg"
          alt=""
        />
        <div class="item" @click="setSelectValue('en')">
          <img src="../assets/images/flags/usFlag.svg" alt="" />
          <span class="capitalize">English</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // selectedValue: this?.$route?.params?.locale,
      isSelected: false,
      selectValue: this?.$route?.params?.locale,
    };
  },
  components: {},
  methods: {
    handleToggle() {
      this.isSelected = !this.isSelected;
    },
    setSelectValue(value) {
      this.selectValue = value;
      this.$router.push(`/${value}`);
    },
 
  },
};
</script>
<style lang="scss" scoped>
.select-language {
  padding: 8px;
  cursor: pointer;
  display: flex;
  position: relative;
  border-radius: 5px;
  border: 1px solid #AFAFAF ;
  background-color: #F6F6F6;
  .black-fill {
    fill: #000;
  }
  .flag {
    width: 33px;
    height: 33px;
    img {
      width: 100%;
    }
  }
  .box-language {
    width: 156px;
    height: 81px;
    border-radius: 8px;
    border: 1px solid #eee;
    background: #F6F6F6;
    padding: 8px;
    position: absolute;
    top: 55px;
    left: 0px;
   
    hr {
      height: 1px;
      background-color: #C4C4C4;
    }
    .item-list {
      .item {
        margin-left: 11px;
        display: flex;
        align-items: center;
        span {
          color: #000;
          margin-left: 7px;
          font-family: "Montserrat", sans-serif;
          font-size: 10px;
          font-style: normal;
          font-weight: 700;
          line-height: 17.5px; /* 175% */
        }
      }
     
    }
  }
}
</style>
