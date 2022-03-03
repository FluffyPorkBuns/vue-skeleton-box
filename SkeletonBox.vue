<template>
  <div>
    <div
      v-if="loading"
      class="skeleton-box"
      :class="classes"
      :style="styleData"
    />
    <slot v-if="!loading"></slot>
  </div>
</template>

<script>
export default {
  name: "skeleton-box",
  props: {
    loading: { type: Boolean, required: false },
    height: { type: Number, required: false },
    width: { type: Number, required: false },
    size: { type: Number, required: false },
    radius: { type: Number, required: false },
    round: { type: Boolean, required: false },
    classes: { type: String, required: false },
  },
  data() {
    return {
      styleData: {
        width: this.size
          ? this.size + "px"
          : this.width
          ? this.width + "px"
          : "100%",
        height: this.size
          ? this.size + "px"
          : this.height
          ? this.height + "px"
          : "20px",
        "border-radius": this.round
          ? "50%"
          : this.radius
          ? this.radius + "px"
          : null,
      },
    };
  },
};
</script>

<style>
/**
  * from https://codepen.io/JCLee/pen/dyPejGV
  */
.skeleton-box {
  display: inline-block;
  height: 1em;
  position: relative;
  overflow: hidden;
  background-color: #dddbdd;
  max-width: 100%;
}

.skeleton-box:after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(255, 255, 255, 0)
  );
  animation: shimmer 2s infinite;
  content: "";
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
