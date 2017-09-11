<template>
  <div id="editor-toolbar">
    <el-row>
      <el-col :lg="18" :md="17" :sm="16">
        <div class="toolbar-segment">
          <el-input placeholder="Enter title here" v-model="title"></el-input>
        </div>
      </el-col>
      <el-col :lg="6" :md="7" :sm="8">
        <div class="toolbar-segment">
          <el-button :plain="true" type="success">Save</el-button>
          <el-button icon="delete2" :plain="true" type="danger"></el-button>
          <el-tooltip class="item" effect="dark" :content="preview ? 'Hide' : 'Show' + ' Preview'" placement="bottom-end">
            <el-button icon="caret-left" :plain="true" type="info" style="float: right"></el-button>
          </el-tooltip>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Tooltip } from 'element-ui';

export default {
  name: 'content-editor-toolbar',
  components: {
    [Tooltip.name]: Tooltip,
  },
  data() {
    return {
      title: null,
      preview: false,
    };
  },
};
</script>

<style lang="scss">
#editor-toolbar {
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  background: $grey-bg;
  border-bottom: $grey-border;
  .toolbar-segment {
    padding: 10px;
  }
}
</style>