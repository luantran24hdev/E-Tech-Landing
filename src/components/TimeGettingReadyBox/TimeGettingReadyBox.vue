<template>
  <div class="box-time flex m-auto">
    <div class="flex items-center">
      <div class="flex flex-col items-center">
        <span class="text-6xl font-black mb-3">30</span>
        <span class="text-base font-bold">Days</span>
      </div>
    </div>
    <span> <TwoPoint /></span>
    <div class="flex items-center">
      <div class="flex flex-col items-center">
        <span class="text-6xl font-black mb-3">18</span>
        <span class="text-base font-bold">Hours</span>
      </div>
    </div>
    <span> <TwoPoint /></span>
    <div class="flex items-center">
      <div class="flex flex-col items-center">
        <span class="text-6xl font-black mb-3">20</span>
        <span class="text-base font-bold">Minutes</span>
      </div>
    </div>
    <span> <TwoPoint /></span>
    <div class="flex items-center">
      <div class="flex flex-col items-center">
        <span class="text-6xl font-black mb-3">11</span>
        <span class="text-base font-bold">Second</span>
      </div>
    </div>
  </div>
</template>
<script>
import TwoPoint from "../Icons/TwoPoint.vue";
export default {
  components: {
    TwoPoint,
  },
};
</script>
<style lang="scss" scoped>
.box-time {
  width: 756px;
  height: 150px;
  border-radius: 21px;
  background: var(--neutral-white, #fff);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  padding: 26px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
