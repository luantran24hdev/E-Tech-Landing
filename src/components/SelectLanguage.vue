<template>
  <div>
    <a-select
      v-model="selectedValue"
      style="width: 200px"
      @on-change="handleChange"
    >
      <a-select-opt-group>
        <template slot="label">
          <a-icon :components="[FlagIcon]" />
          Manager
        </template>
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
      </a-select-opt-group>
      <a-select-opt-group label="Engineer">
        <a-select-option value="Yiminghe">Yiminghe</a-select-option>
      </a-select-opt-group>
    </a-select>
    <!-- Use the FlagIcon component here -->
    <FlagIcon />
  </div>
</template>

<script>
import FlagIcon from "./Flags/FlagIcon.vue";

export default {
  data() {
    return {
      selectedValue: "lucy",
    };
  },
  components: {
    FlagIcon,
  },
  methods: {
    handleChange(value) {
      console.log(`Selected: ${value}`);
    },
  },
};
</script>
