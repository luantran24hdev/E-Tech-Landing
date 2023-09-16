<template>
  <div class="header flex transition-all delay-100">
    <div class="header__wp w-full h-full flex">
      <div class="logo">
        <router-link to="/" class="hover:text-secondary-300">
          <img src="@/assets/images/logo.png" alt="" />
        </router-link>
      </div>

      <ul>
        <li>
          <router-link to="/about-us" class="hover:text-secondary-300">
            {{ $tc("nav.about-us") }}
          </router-link>
        </li>
        <li>
          <router-link to="/our-games" class="hover:text-secondary-300">
            {{ $tc("nav.games") }}
          </router-link>
        </li>
        <li>
          <router-link to="/our-partners" class="hover:text-secondary-300">
            {{ $tc("nav.partners") }}
          </router-link>
        </li>
        <li>
          <router-link to="/contact-us" class="hover:text-secondary-300">
            {{ $tc("nav.contact-us") }}
          </router-link>
        </li>
        <li><SelectLanguage /></li>
      </ul>

      <img
        class="navbar"
        src="../../assets/images/navBar.svg"
        alt=""
        @click="handleToggle"
      />
      <div class="navbar-mobile" v-if="this.isShowNavbar">
        <div class="navbar-head">
          <SelectLanguageMobile />
          <img
            @click="handleToggle"
            src="../../assets/images/closeIcon.svg"
            alt=""
            class="cursor-pointer"
          />
        </div>
        <ul class="navbar-content">
          <li>
            <router-link to="/about-us" class="hover:text-secondary-300">
              {{ $tc("nav.about-us") }}
            </router-link>
          </li>
          <li>
            <router-link to="/our-games" class="hover:text-secondary-300">
              {{ $tc("nav.games") }}
            </router-link>
          </li>
          <li>
            <router-link to="/our-partners" class="hover:text-secondary-300">
              {{ $tc("nav.partners") }}
            </router-link>
          </li>
          <li>
            <router-link to="/contact-us" class="hover:text-secondary-300">
              {{ $tc("nav.contact-us") }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import SelectLanguage from "../SelectLanguage.vue";
import SelectLanguageMobile from "../SelectLanguageMobile.vue";
export default {
  data() {
    return {
      isShowNavbar: false,
    };
  },
  methods: {
    handleToggle() {
      this.isShowNavbar = !this.isShowNavbar;
    },
  },
  components: {
    SelectLanguage,
    SelectLanguageMobile,
  },
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  margin-bottom: 210px;
  align-items: center;
  .navbar-mobile {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    background: #fff;
    z-index: 99999;
    .navbar-head {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      justify-content: space-between;
      padding: 16px;
    }
    .navbar-content {
      color: #000;
      text-align: center;
      display: block;
      li {
        padding: 24px 0px;
      }
    }
  }
  .navbar {
    display: none;
  }
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
      display: flex;
      li {
        padding: 0 16px;
      }
    }
  }
  @media (max-width: 1200px) {
    &__wp {
      padding: 2%;
    }
  }
  @media (max-width: 720px) {
    ul {
      display: none;
    }
    .navbar {
      display: flex;
      cursor: pointer;
    }
  }
}
@media (max-width: 920px) {
  .header {
    margin-bottom: 40px;
  }
}
@media (max-width: 520px) {
  .header {
    margin-bottom: 40px;
  }
}
</style>
