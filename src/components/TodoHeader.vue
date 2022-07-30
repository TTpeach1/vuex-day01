<template>
  <header class="header">
    <h1 :class="{ color: $store.state.color.isShow }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="value"
      @keyup.enter="addNewValue"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  mounted() {
    // this.changeColor()
  },
  computed: {
    newObj() {
      return {
        name: this.value,
        done: false,
        id:
          this.$store.state.todo.list[this.$store.state.todo.list.length - 1]
            .id + 1
      }
    }
  },
  methods: {
    addNewValue() {
      this.$store.dispatch('todo/addActionItem', this.newObj)
      this.value = ''
    }
  }
}
</script>
<style scoped>

.color {
  /* color: hotpink; */
  color: #fff;
  /* background-color: #b83f45; */
}
</style>
