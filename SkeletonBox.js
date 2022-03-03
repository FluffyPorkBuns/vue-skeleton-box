import SkeletonBox from "./SkeletonBox.vue";

export default {
  install: (app, options) => {
    app.component("skeleton-box", SkeletonBox);
  },
};
