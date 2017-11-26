<template>
  <ul id="content-search-list" v-loading="isLoading">
    <li>
      <a href="#" class="content-search-list-item create-content" @click.stop.prevent="createContent">
        <i class="el-icon-plus create-content"></i>
        New {{searchType}}
      </a>
    </li>
    <li v-for="item in items" :key="item.id">
      <content-search-list-item :data="item"></content-search-list-item>
    </li>
  </ul>
</template>

<script>
import ContentSearchListItem from '@/components/ContentSearchListItem';
import { mapState, mapActions } from 'vuex';
import { debounce } from 'lodash';
import { NEW_CONTENT_ID } from '@/const';

export default {
  name: 'content-search-list',
  components: {
    [ContentSearchListItem.name]: ContentSearchListItem,
  },
  data() {
    return {
      items: [],
      isLoading: false,
    };
  },
  created() {
    // Debounce to avoid type & search changes happen together which results in 2 calls
    this.fetch = debounce(() => {
      this.isLoading = true;
      this.$http
        .get(
          `/admin/api/${this.searchType}/list/${this.searchTerm
            ? this.searchTerm
            : ''}`,
        )
        .then(result => {
          this.isLoading = false;
          if (result && result.data) {
            this.items = result.data.map(item => ({
              id: item._id,
              text: item.title,
            }));
          }
        })
        .catch(() => {
          this.isLoading = false;
          this.items = [];
        });
    }, 100);
  },
  mounted() {
    this.fetch();
  },
  methods: {
    ...mapActions('home', ['setSelectedContent']),
    createContent() {
      this.setSelectedContent(NEW_CONTENT_ID);
    },
  },
  computed: {
    ...mapState('home', ['searchType', 'searchTerm']),
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
  min-height: 60px;
  // border-right: $grey-border;

  .create-content {
    text-align: center;
    color: $blue-main;
    padding: 10px;
  }
}
</style>