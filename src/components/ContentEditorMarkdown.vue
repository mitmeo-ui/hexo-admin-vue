<template>
  <div id="editor-markdown">
    <div class="markdown">
      <div class="editor-inner">
        <textarea>
        </textarea>
      </div>
    </div>
    <div class="preview">
      <div class="editor-inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content-editor-markdown',
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#editor-markdown {
  position: absolute;
  top: 67px;
  bottom: 0;
  left: 0;
  right: 0;
  .markdown {
    width: 100%;
    height: 100%;
  }

  .preview {
    width: 0%;
  }

  .editor-inner {
    padding: 0 10px;
    height: 100%;
    &.bordered {
      border: $grey-border;
      border-radius: 4px;
    }

    textarea {
      width: 100%;
      border-radius: 4px;
      border: 0;
      padding: 0;
      margin: 0;
      height: 98%;
      &:focus {
        outline: 0;
      }
    }
  }
}
</style>