# vue-skeleton-box
Vue 3 skeleton loader component that tracks loading state and can be used on its own or can wrap the component to be displayed once loading is complete.

Uses [CSS shimmer animation](https://github.com/maoberlehner/skeleton-loading-animation-with-vue) created by Markus Oberlehner.

## Add Component to Vue
Option 1 - Register globally
```js
import { createApp } from 'vue';
import SkeletonBox from 'vue-skeleton-box';
import App from './App.vue';

createApp(App).use(SkeletonBox).mount('#app');
```
Option 2 - Register locally
```js
<script>
import SkeletonBox from 'vue-skeleton-box';

export default{
  components: {
    SkeletonBox
  }
};
</script>
```
## Use as a standalone component
```html
  <skeleton-box :loading="myLoadingState" />
```
## Wrap component using slot
