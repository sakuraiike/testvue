<template>
  <div>
    <h1>这只是演示</h1>
    <button @click="addContent">添加</button>
    <button @click="addContent2">添加</button>

    <h1>现有长度：{{ arr_length }}</h1>
    <h1>{{ arr}}</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'showname',
  data () {
    return {
      name: 'hello my name is Tom!!!!!'
    }
  },
  computed: {
    // ...(this.$store.getters),
    ...mapState(['arr', 'inputVal']),
    ...mapGetters(['arr_length']),
    last_arr () {
      return this.$store.state.arr
    }
  },
  methods: {
    addContent () {
      this.$store.commit('handleAdd', Date.now())
    },
    addContent2 () {
      this.handleAddAction('测试一下。。。。。。')
    },
    ...mapActions(['handleAddAction'])
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  margin:0 auto;
  text-align: center;
}
</style>
