<template>
  <div>
    <button @click="changeColor">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
export default {
  data() {
    return {
      list: this.$store.state.todo.list
    }
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain
  },

  created() {
    // this.getList()
  },

  methods: {
    // getList() {
    //   this.$store.dispatch('todo/getActionsList', this.list)
    // },
    changeColor() {
      console.log(111)
      this.$store.dispatch('color/changeActionColor')
    }
  }
}
</script>

<style scoped></style>
