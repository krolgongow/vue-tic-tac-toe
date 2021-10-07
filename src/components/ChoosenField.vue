<template>
  <img @click="selectingImage" :src="source" alt="" />
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
        console.log("works");
        this.source = "../assets/circle.png";
      } else if (this.image === "cross") {
        this.source = "../assets/cross.png";
      }
    },
  },
};
</script>

<style scoped></style>
