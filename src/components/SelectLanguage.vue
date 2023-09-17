<template>
  <!-- <a-select class="selectLang" v-model="selectedValue" style="width: 200px" @change="handleChange">
    <a-select-opt-group>
      <template slot="label"> Manager </template>
      <a-select-option value="vi">Vietnamese</a-select-option>
      <a-select-option value="en">English</a-select-option>
    </a-select-opt-group>
  </a-select> -->
  <div class="select-language" @click="handleToggle">
    <div class="flag">
      <!-- Display US flag if selectValue is 'en' -->
      <img
        v-if="selectValue === 'en'"
        src="../assets/images/flags/usFlag.svg"
        alt="US Flag"
      />

      <!-- Display Vietnamese flag if selectValue is 'vi' -->
      <img
        v-else-if="selectValue === 'vi'"
        src="../assets/images/flags/vieFlag.svg"
        alt="Vietnamese Flag"
      />
    </div>
    <img src="../assets/images/arrowDown.svg" alt="" />
    <div class="box-language" v-if="isSelected">
      <div class="item-list flex items-center">
        <img
          :style="{ opacity: selectValue === 'vi' ? 1 : 0 }"
          src="../assets/images/checkedIcon.svg"
          alt=""
        />
        <div class="item" @click="setSelectValue('vi')">
          <img src="../assets/images/flags/vieFlag.svg" alt="" />
          <span class="capitalize">{{ $tc("vietnamese") }}</span>
        </div>
      </div>
      <hr />
      <div class="item-list flex items-center">
        <img
          :style="{ opacity: selectValue === 'en' ? 1 : 0 }"
          src="../assets/images/checkedIcon.svg"
          alt=""
        />
        <div class="item" @click="setSelectValue('en')">
          <img src="../assets/images/flags/usFlag.svg" alt="" />
          <span class="capitalize">{{ $tc("english") }}</span>
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
  cursor: pointer;
  display: flex;
  position: relative;
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
    background: #fff;
    padding: 8px;
    position: absolute;
    top: 35px;
    right: 0;
    hr {
      height: 1px;
      background-color: #c4c4c4;
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
