<template>
  <div id="editor">
    <div class="empty" v-if="!content">
      No Content
    </div>
    <div class="content" v-if="content">
      {{content}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'content-editor',
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
  .empty {
    font-size: 4em;
    color: #eee;
    margin: 50px auto;
    text-align: center;
  }
}
</style>