<template>
  <div id="side-nav">
    <el-menu :router="true" default-active="/">
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
      </el-menu-item>
      <el-menu-item index="/settings">
        <i class="el-icon-setting"></i>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

import {
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Tooltip,
} from 'element-ui';

export default {
  name: 'side-nav',
  components: {
    'el-tooltip': Tooltip,
    [Menu.name]: Menu,
    [Submenu.name]: Submenu,
    [MenuItemGroup.name]: MenuItemGroup,
    [MenuItem.name]: MenuItem,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
#side-nav {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  .el-menu {
    height: 100%;
    position: relative;
    border-right: 1px solid #d1dbe5;
    .el-menu-item {
      i {
        font-size: 1.2em;
        margin-right: 0 !important;
      }
    }
  }
}
</style>