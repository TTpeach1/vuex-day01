<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: item.done }"
      v-for="(item, index) in list"
      :key="index"
    >
      <div class="view">
        <input class="toggle" type="checkbox" @click="isToggle(index)" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="delItem(index)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
// import { createNamespacedHelpers } from 'vuex'

export default {
  data() {
    return {
      list: this.$store.state.todo.list
    }
  },
  methods: {
    // 删除数据
    delItem(index) {
      this.$store.dispatch('todo/delActionItem', index)
    },
    isToggle(index) {
      this.$store.dispatch('todo/isActionToggle', index)
    }
  }
}
</script>
