<template>
  <div id="app">
    <h1>エロ俳句メーカー</h1>
    <p v-if="msg1.length > 0">{{ msg1 }}</p>
    <p v-else>判定してください</p>
    <p v-if="msg2.length > 0">{{ msg2 }}</p>
    <p v-else>判定してください</p>
    <p v-if="msg3.length > 0">{{ msg3 }}</p>
    <p v-else>判定してください</p>
    <button @click="reload()">更新</button>
    <button @click="tweet()">結果をツイート</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      msg1: '', //5文字
      msg2: '', //7文字
      msg3: '', //5文字
    }
  },
  methods: {
    reload() {
      this.msg1 = '', //5文字
      this.msg2 = '', //7文字
      this.msg3 = '' //5文字
    },
    tweet() {
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
