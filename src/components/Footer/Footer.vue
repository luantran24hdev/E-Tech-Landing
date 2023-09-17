<template>
  <div class="bg-gray footer">
    <div class="mx-auto max-w-7xl o flex pt-12 py-8 justify-between inner">
      <div class="sm:w-4/6 w-full mr">
        <div class="w-28 md:w-28 m-auto">
          <img
            class="w-full h-auto object-cover"
            src="@/assets/images/logo.png"
            alt="Logo-SMD"
          />
        </div>
        <div class="text-sm text-white py-4 justify-center"></div>
        <ul class="flex gap-4 text-gray-400 text-sm justify-center sm:flex">
          <li class="hover:text-sky-100">
            <a
              href="https://www.instagram.com/breederapprovednews/?hl=en"
              target="_blank"
            >
              <img src="../../assets/images/socialMedia/twitter.svg" alt="" />
            </a>
          </li>
          <li class="hover:text-sky-100">
            <a href="https://www.facebook.com/breederapproved" target="_blank">
              <img src="../../assets/images/socialMedia/facebook.svg" alt="" />
            </a>
          </li>
          <li class="">
            <a
              href="https://www.youtube.com/channel/UCOPw3R-TUUNqgN2bQyidW2w"
              target="_blank"
              class=""
            >
              <img src="../../assets/images/socialMedia/insta.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div class="sm:w-4/6 w-full m-auto">
        <div class="text-2xl text-white font-bold">{{ $tc("Address") }}</div>

        <ul class="gap-4 text-sm mr-4 items-center py-4 text-white">
          <li class="hover:text-sky-100 pb-2 flex items-center">
            <img src="../../assets/images/placeIcon.svg" alt="" />
            <a href="/questionaire">
              {{ $tc("adr-name") }}
            </a>
          </li>
          <li class="hover:text-sky-100 pb-2 flex items-center">
            <img
              class="opacity-0"
              src="../../assets/images/placeIcon.svg"
              alt=""
            />
            <a href="/questionaire">
              20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam
            </a>
          </li>
          <li class="hover:text-sky-100 py-2 flex items-center">
            <img src="../../assets/images/phoneIcon.svg" alt="" />
            <a href="/questionaire"> (+1) 555-0108-000 or (+236) 555-0108 </a>
          </li>

          <!-- <li class="hover:text-sky-100 py-2">
              <a
                href="https://www.youtube.com/channel/UCOPw3R-TUUNqgN2bQyidW2w"
                target="_blank"
              >
                Breeder list
              </a>
            </li> -->
        </ul>
      </div>
      <div class="sm:w-4/6 w-full mr">
        <div class="text-2xl text-white font-bold">{{ $tc("Subscriber") }}</div>

        <ul class="gap-4 text-sm mr-4 items-center py-4 text-white">
          <li class="hover:text-sky-100 pb-2">
            <a href="https://www.facebook.com/breederapproved" target="_blank">
              <div class="flex sb-text">
                <span>{{ $tc("subscribe-to") }}</span>
              </div>
            </a>
            <EmailInputFooter />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import EmailInputFooter from "../../components/EmailInput/EmailInputFooter.vue";
export default {
  data() {
    return {};
  },
  components: {
    EmailInputFooter,
  },
};
</script>
<style lang="css" scoped>
.footer {
  background: linear-gradient(
      180deg,
      rgba(0, 10, 255, 0.5) 0%,
      rgba(0, 0, 0, 0) 136.61%
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%),
    url(<path-to-image>), lightgray 50% / cover no-repeat;
  font-family: "Montserrat", sans-serif;
  background-image: url("../../assets/images/bg-footer.png");
  background-size: cover;
}

@media (max-width: 820px) {
  .mr {
    margin: 0 auto;
  }
}

@media (max-width: 820px) {
  .inner {
    display: block !important;
    padding: 16px;
  }
}
ul {
  list-style-type: none;
}

ul.list li:before {
  content: "-";
  position: absolute;
  margin-left: -15px;
}
.v:nth-child(1) {
  padding-top: 0;
}
.sb-text {
  margin-bottom: 12px;
}
.b {
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
