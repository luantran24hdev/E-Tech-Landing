<template>
  <div>
    <button @click="toggleScrollButton" id="scroll-button">
      <img
        class="down-arrow"
        v-if="showScrollToTop"
        src="../../assets/images/arrow-circle-up.png"
        alt="Scroll to Top"
      />
      <img
        v-else
        src="../../assets/images/arrow-circle-up.png"
        alt="Scroll to Bottom"
      />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showScrollToTop: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      this.showScrollToTop = false; // Switch back to "Scroll to Bottom" button
    },
    scrollToBottom() {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
      this.showScrollToTop = true; // Switch to "Scroll to Top" button
    },
    toggleScrollButton() {
      if (this.showScrollToTop) {
        this.scrollToTop();
      } else {
        this.scrollToBottom();
      }
    },
  },
};
</script>

<style scoped lang="scss">
#scroll-button {
  position: fixed;
  width: 40px;
  right: 10px;
  bottom: 60%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10000000000000;
}
@media (max-width: 520px) {
  #scroll-button {
    right: 16px;
    bottom: 40%;
  }
}
.down-arrow {
  width: 100%;
  transform: rotate(180deg);
}
</style>
