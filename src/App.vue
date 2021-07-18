<template>
  <div id="app">
    <el-container class="container">
      <el-aside width="150px">
        <Menu></Menu>
      </el-aside>
      <el-main style="padding:0">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Menu from "./views/Menu";
export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>

<style>
#app {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

body pre {
  padding: 16px;
  overflow: auto;
  line-height: 1.45;
  background-color: #f7f7f7;
  border: 0;
  border-radius: 3px;
  font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
}
::-webkit-scrollbar {
  width: 4px; /*对垂直流动条有效*/
  height: 4px; /*对水平流动条有效*/
}

/*定义滚动条的轨道颜色、内阴影及圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

/*定义滑块颜色、内阴影及圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 7px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
