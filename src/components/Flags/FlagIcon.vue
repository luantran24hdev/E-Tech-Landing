<template>
    <span :class="countryFlag" />
</template>
<script>
import lookup from "country-code-lookup";
import "flag-icons/css/flag-icons.css";
export default {
  props: {
    country: {
      type: String,
      default: "",
    },
  },
  computed: {
    countryFlag() {
      if (this.country) {
        let country;
        try {
          country = lookup.byIso(this.country);
        } catch (e) {
          country = null
        }
        let flag = country ? country.iso2.toLowerCase() : this.country.toLowerCase();
        return `fi fi-${flag}`;
      } else {
        return ``;
      }
    },
  },
};
</script>
