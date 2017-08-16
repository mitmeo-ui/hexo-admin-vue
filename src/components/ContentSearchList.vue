<template>
  <ul id="content-search-list">
    <li v-for="item in items" :key="item.id">
      <content-search-list-item :data="item"></content-search-list-item>
    </li>
  </ul>
</template>

<script>
import ContentSearchListItem from '@/components/ContentSearchListItem';

export default {
  name: 'content-search-list',
  components: {
    [ContentSearchListItem.name]: ContentSearchListItem,
  },
  props: {
    items: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
#content-search-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>