::: code-group
```vue [index.vue]
<template>
  <div>
    <el-button type="primary">Primary Button</el-button>
  </div>
</template>

<script>
export default {
  name: 'Demo'
}
</script>

<style>
.el-button {
  margin: 10px 5px;
}
</style>
```

```js [index.js]
import { createApp } from 'vue'
import Demo from './index.vue'

createApp(Demo).mount('#app')
```
:::