<template>
  <img :src="selectingImage()" alt="" />
</template>

<script>
export default {
  data() {
    return {
      source: "../assets/circle.png",
    };
  },
  props: ["image"],
  methods: {
    selectingImage() {
      if (this.image === "circle") {
        return require("../assets/circle.png");
      } else if (this.image === "cross") {
        return require("../assets/cross.png");
      }
    },
  },
};
</script>

<style scoped></style>
