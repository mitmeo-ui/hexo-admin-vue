<template>
  <div id="editor">
    <div class="empty" v-if="!content">
      No Content
    </div>
    <div class="content" v-if="content">
      <content-editor-toolbar></content-editor-toolbar>
      <content-editor-markdown></content-editor-markdown>
    </div>
  </div>
</template>

<script>
import ContentEditorToolbar from '@/components/ContentEditorToolbar';
import ContentEditorMarkdown from '@/components/ContentEditorMarkdown';

export default {
  name: 'content-editor',
  components: {
    [ContentEditorToolbar.name]: ContentEditorToolbar,
    [ContentEditorMarkdown.name]: ContentEditorMarkdown,
  },
  computed: {
    content: {
      get() {
        const { selectedContent } = this.$store.state.home;
        if (selectedContent) {
          return `You are editing id: ${selectedContent}`;
        }
        return '';
      },
      set(val) {
        this.test = val;
      },
    },
  },
};
</script>
<style lang="scss">
#editor {
  height: 100%;
  .content {
    height: 100%;
    position: relative;
  }
  .empty {
    font-size: 4em;
    color: #eee;
    margin: 0 auto;
    padding-top: 20px;
    text-align: center;
  }
}
</style>