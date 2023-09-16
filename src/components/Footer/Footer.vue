<template>
  <div class="bg-gray">
    <div class="mx-auto max-w-7xl o flex pt-12 py-8 justify-between">
      <div class="w-1/6">
        <div class="w-28 md:w-28">
          <img
            class="w-full h-auto object-cover"
            src="@/assets/images/logo.png"
            alt="Logo-SMD"
          />
        </div>
        <!-- <img
            class="w-full h-auto"
            src="../../../assets/images/logos/logo-removebg-preview.png"
            alt=""
          /> -->
        <div class="text-sm text-white py-4">
          Nemo enim ipsam voluptate quia voluptas sit aspernatur aut odit aut
          fugit, sed quia magni this dolores eos qui ratione .
        </div>
        <ul
          class="flex gap-4 text-gray-400 text-sm mr-4 items-center sm:flex lg:hidden"
        >
          <li class="hover:text-sky-100">
            <a href="https://www.facebook.com/breederapproved" target="_blank">
              <div
                class="w-10 h-10 hover:bg-sky-100 rounded-full relative border-solid border-white border-2 hover:border-sky-100 transition-all delay-100 duration-75"
              >
                <i class="fab fa-facebook-f absolute b text-xl text-white"></i>
              </div>
            </a>
          </li>
          <li class="hover:text-sky-100">
            <a href="https://twitter.com/breederapprovednews" target="_blank">
              <div
                class="w-10 h-10 hover:bg-sky-100 rounded-full relative border-solid border-white border-2 hover:border-sky-100 transition-all delay-100 duration-75"
              >
                <i class="fab fa-google absolute b text-xl text-white"></i>
              </div>
            </a>
          </li>
          <li class="hover:text-sky-100">
            <a
              href="https://www.instagram.com/breederapprovednews/?hl=en"
              target="_blank"
            >
              <div
                class="w-10 h-10 hover:bg-sky-100 rounded-full relative border-solid border-white border-2 hover:border-sky-100 transition-all delay-100 duration-75"
              >
                <i class="fab fa-twitter absolute b text-xl text-white"></i>
              </div>
            </a>
          </li>
          <li class="hover:text-sky-100">
            <a
              href="https://www.youtube.com/channel/UCOPw3R-TUUNqgN2bQyidW2w"
              target="_blank"
            >
              <div
                class="w-10 h-10 hover:bg-sky-100 rounded-full relative border-solid border-white border-2 hover:border-sky-100 transition-all delay-100 duration-75"
              >
                <i class="fas fa-rss absolute b text-xl text-white"></i>
              </div>
            </a>
          </li>
          <li class="">
            <a
              href="https://www.youtube.com/channel/UCOPw3R-TUUNqgN2bQyidW2w"
              target="_blank"
              class=""
            >
              <div
                class="w-10 h-10 hover:bg-sky-100 rounded-full relative border-solid border-white border-2 hover:border-sky-100 transition-all delay-100 duration-75"
              >
                <i class="fab fa-invision absolute b text-xl text-white"></i>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="w-1/6">
        <div class="text-2xl text-white font-unisans-semibold">Address</div>

        <ul class="gap-4 text-sm mr-4 items-center py-4 text-white list">
          <li class="hover:text-sky-100 pb-2">
            <a href="/contactus"> Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US </a>
          </li>
          <li class="hover:text-sky-100 py-2">
            <a href="/questionaire"> 20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam </a>
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
      <div class="w-1/6">
        <div class="text-2xl text-white font-unisans-semibold">
          Subscriber
        </div>

        <ul class="gap-4 text-sm mr-4 items-center py-4 text-white">
          <li class="hover:text-sky-100 pb-2">
            <a href="https://www.facebook.com/breederapproved" target="_blank">
              <div class="flex">
                <i class="fa fa-map-marker mr-2" aria-hidden="true"></i>
                <span
                  >Address: 7940 Front Beach Rd #2005 Panama City Beach, FL
                  32407</span
                >
              </div>
            </a>
          </li>
          <!-- <li class="hover:text-sky-100 py-2">
            <a
              href="https://www.instagram.com/breederapprovednews/?hl=en"
              target="_blank"
            >
              <div class="flex">
                <i class="fa fa-globe mr-2" aria-hidden="true"></i>
                <div>
                  <p>Email: support@beederapproved.com</p>
                </div>
              </div>
            </a>
          </li> -->
        </ul>
      </div>
      <!-- <div class="w-1/6">
          <div class="text-2xl text-white font-unisans-semibold">
            Working Hours
          </div>
  
          <ul class="gap-4 text-sm mr-4 items-center py-4 text-white">
            <li
              class="hover:text-sky-100 pb-2 border-b border-solid pt-2 v"
              v-for="item in calendar"
              :key="item.id"
            >
              <a href="https://www.facebook.com/breederapproved" target="_blank">
                <div class="flex items-center justify-between">
                  <div>
                    {{ item.dayFrom }} <span v-if="item.dayTo">-</span>
                    {{ item.dayTo }}
                  </div>
                  <div>
                    {{ item.timeFrom }} <span v-if="item.timeTo">-</span>
                    {{ item.timeTo }}
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      calendar: [
        {
          dayFrom: "Tuesday",
          dayTo: "Friday",
          timeFrom: "08:00",
          timeTo: "20:00",
        },
        {
          dayFrom: "Saturday",
          dayTo: "",
          timeFrom: "09:00",
          timeTo: "18:00",
        },
        {
          dayFrom: "Sunday",
          dayTo: "",
          timeFrom: "09:00",
          timeTo: "18:00",
        },
        {
          dayFrom: "Monday",
          dayTo: "",
          timeFrom: "09:00",
          timeTo: "18:00",
        },
        {
          dayFrom: "Emergency:",
          dayTo: "",
          timeFrom: "(+099) 020 768 69",
          timeTo: "",
        },
      ],
    };
  },
};
</script>
<style lang="css" scoped>
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
.b {
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
