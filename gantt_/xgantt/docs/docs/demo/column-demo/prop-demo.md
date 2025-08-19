:::demo

```vue
<template>
  <x-gantt :data="dataList">
    <x-gantt-column prop="name" />
    <x-gantt-column prop="o.t1" label="属性o.t1" /> // [!code focus]
  </x-gantt>
</template>

<script setup>
import { reactive } from 'vue';

const dataList = reactive([]);
for (let i = 1; i <= 3; i++) {
  dataList.push({
    id: i,
    name: 't' + i,
    startDate: new Date().setDate(i),
    endDate: new Date().setDate(i + 5),
    o: { t1: 'a' + i, t2: 'b' + i }
  });
}
</script>
```

:::
