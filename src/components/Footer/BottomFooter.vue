<template>
  <div class="text-footer">
    {{ new Date().getFullYear() }} — Copyright. Policy
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.text-footer {
  text-align: center;
  background: #000;
  color: #fff;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 126%; /* 22.68px */
  padding: 30px 0px;
}
@media (max-width: 920px) {
  .text-footer {
    padding: 2% 0px;
  }
}
</style>
