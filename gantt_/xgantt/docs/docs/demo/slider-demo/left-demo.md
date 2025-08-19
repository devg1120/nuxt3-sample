:::demo

```vue
<template>
  <x-gantt :data="dataList">
    <x-gantt-column prop="name" />
    <x-gantt-slider prop="startDate"
      bg-color="orange"
      :move="true"
      :resize-left="true"
      :resize-right="true"
      :linked-resize="true"
    >
      <template v-slot:content="{row, $index, level}">
        <div
          style="background-color: #123456;display: flex;justify-content: center;height:5px"
        >
          {{ row.name }} - {{ row.id }}
        </div>
      </template>

      <template v-slot:left>
        <div style="background-color:#123456;width:5px;height:10px;" />
      </template>

      <template v-slot:right>
        <div style="background-color:#123456;width:5px;height:10px;" />
      </template>
    </x-gantt-slider>
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
    progress: Math.random(),
    o: { t1: 'a' + i, t2: 'b' + i }
  });
}
</script>
```

:::
