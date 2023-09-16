<template>
  <div class="box-time flex m-auto">
    <div class="flex items-center">
      <div class="flex flex-col items-center">
        <span class="sm:text-6xl text-4xl font-black mb-3 transition-all duration-500">30</span>
        <span class="text-base sm:text-sm font-bold">{{ $tc("day") }}</span>
      </div>
    </div>
    <span> <TwoPoint /></span>
    <div class="flex items-center">
      <div class="flex flex-col items-center">
        <span class="sm:text-6xl text-4xl font-black mb-3 transition-all duration-500">18</span>
        <span class="lg:text-base sm:text-sm font-bold transition-all duration-500">{{ $tc("hours") }}</span>
      </div>
    </div>
    <span> <TwoPoint /></span>
    <div class="flex items-center">
      <div class="flex flex-col items-center">
        <span class="sm:text-6xl text-4xl font-black mb-3 transition-all duration-500">20</span>
        <span class="lg:text-base sm:text-sm font-bold transition-all duration-500">{{ $tc("min") }}</span>
      </div>
    </div>
    <span> <TwoPoint /></span>
    <div class="flex items-center">
      <div class="flex flex-col items-center">
        <span class="sm:text-6xl text-4xl font-black mb-3 transition-all duration-500">11</span>
        <span class="lg:text-base sm:text-sm font-bold transition-all duration-500">{{ $tc("sec") }}</span>
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
@media (max-width: 870px) {
  .box-time {
    width: 100%;
    padding: 10px;
  }
}
</style>
