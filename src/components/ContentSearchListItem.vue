<template>
  <a :href="editLink" :class="'content-search-list-item' + (active ? ' active' : '')">
    {{data.text}}</a>
</template>

<script>
export default {
  name: 'content-search-list-item',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    editLink() {
      const { searchType } = this.$store.state.home;
      return `#/edit/${searchType}/${this.data.id}`;
    },
    active() {
      const { selectedContent } = this.$store.state.home;
      if (selectedContent) {
        return selectedContent === this.data.id;
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
.content-search-list-item {
  display: block;
  text-decoration: none;
  padding: 5px 12px;
  font-size: 0.8em;
  color: #333;
  border-bottom: 1px solid #f0f0f0;

  &:hover {
    background: #eee;
  }

  &.active {
    background: #fff;
    color: #666;
  }
}
</style>