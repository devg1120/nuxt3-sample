:::demo

```vue
<template>
  <x-gantt :data="dataList">
    <x-gantt-column prop="name" />

    <x-gantt-column label="时间">
      <x-gantt-column prop="startDate" date-format="MM/DD" />
      <x-gantt-column prop="endDate" date-format="MM/DD" />
    </x-gantt-column>
  </x-gantt>
</template>

<script setup>
import { reactive } from 'vue';

const dataList = reactive([]);
for (let i = 1; i <= 5; i++) {
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