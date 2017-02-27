<template>
  <div>
    <el-dropdown @command="handleCommand">
      <el-button type="primary">
        更多菜单<i class="el-icon-caret-bottom el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item in foodList" :command="item.value" @click.native="selectFood(item)">
          {{item.label}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Dropdown, DropdownMenu, DropdownItem, Button } from 'element-ui'
import { mapGetters, mapActions } from 'vuex'

Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Button)

export default {
  data() {
    return {
      options: [],
      value: ''
    }
  },
  computed: mapGetters([
    'foodList'
  ]),
  methods: {
    ...mapActions([
      'getFoodList',
      'selectFood'
    ]),
    handleCommand(command) {
      console.log(command)
    }
  },
  created() {
    this.getFoodList()
  }
 }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
