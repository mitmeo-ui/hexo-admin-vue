<template>
  <ul id="content-search-list" v-loading="listLoading">
    <li v-for="item in items" :key="item.id">
      <content-search-list-item :data="item"></content-search-list-item>
    </li>
  </ul>
</template>

<script>
import ContentSearchListItem from '@/components/ContentSearchListItem';
import { mapState, mapActions } from 'vuex';
import { debounce } from 'lodash';

export default {
  name: 'content-search-list',
  components: {
    [ContentSearchListItem.name]: ContentSearchListItem,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    // Debounce to avoid type & search changes happen together which results in 2 calls
    this.fetch = debounce(() => {
      this.setListLoading(true);
      this.$http.get(`/admin/api/${this.searchType}/list/${this.searchTerm ? this.searchTerm : ''}`).then((result) => {
        this.setListLoading(false);
        if (result && result.data) {
          this.items = result.data.map(item => ({
            id: item._id,
            text: item.title,
          }));
        }
      }).catch(() => {
        this.setListLoading(false);
        this.items = [];
      });
    }, 100);
  },
  mounted() {
    this.fetch();
  },
  methods: {
    ...mapActions('home', [
      'setListLoading',
    ]),
  },
  computed: {
    ...mapState('home', [
      'searchType',
      'searchTerm',
      'listLoading',
    ]),
  },
  watch: {
    searchType() {
      this.fetch();
    },
    searchTerm() {
      this.fetch();
    },
  },
};
</script>

<style lang="scss">
#content-search-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  min-height: 100%;
}
</style>