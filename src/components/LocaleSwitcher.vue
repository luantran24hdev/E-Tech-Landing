<template>
  <div class="select">
    <!-- <select :value="$i18n.locale" @change.prevent="changeLocale">
      <option :value="locale.code" v-for="locale in locales" :key="locale.code">
        {{ locale.name }}
      </option>
    </select> -->
    <select :value="$i18n.locale" @change.prevent="changeLocale">
      <option :value="locale.code" v-for="locale in locales" :key="locale.code">
        {{ locale.name }}
      </option>
  </select>
    <p class="likes">{{$tc("card.likes", likes)}}</p>
  </div>
</template>

<script>
import { getSupportedLocales } from "@/util/i18n/supported-locales";

export default {
  data: () => ({ locales: getSupportedLocales() }),
  methods: {
    changeLocale(e) {
      const locale = e.target.value;

      this.$router.push(`/${locale}`);
    },
  },
};
</script>
<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: DeepSkyBlue;
  background-image: none;
}
.select {
 width: 200px;
 background-color: red;
}
select {
  flex: 1;
  padding: 0 .5em;

  cursor: pointer;
}
/* thiết kế dấu mũi tên */
.select::after {
  content: '\25BC';
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1em;
  background: DodgerBlue;
  cursor: pointer;
  pointer-events: none;
  -webkit-transition: .25s all ease;
  -o-transition: .25s all ease;
  transition: .25s all ease;
  color: white;
}
/* Transition */
.select:hover::after {
  color: Gainsboro;
}
</style>
