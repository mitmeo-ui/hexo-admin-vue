<template>
  <div id="home">
    <div id="content-list" class="home-column">
      <content-search-filter></content-search-filter>
      <div class="list-items">
        <content-search-list></content-search-list>
      </div>
    </div>
    <div id="content" class="home-column">
      <content-editor></content-editor>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ContentSearchList from '@/components/ContentSearchList';
import ContentSearchFilter from '@/components/ContentSearchFilter';
import ContentEditor from '@/components/ContentEditor';

export default {
  name: 'home',
  components: {
    [ContentSearchFilter.name]: ContentSearchFilter,
    [ContentSearchList.name]: ContentSearchList,
    [ContentEditor.name]: ContentEditor,
  },
  data() {
    return {
      searchItems: [],
    };
  },
  mounted() {
    const { type, id } = this.$route.params;
    const { searchType, selectedContent } = this.$store.state.home;
    if (type && type !== searchType) {
      this.setSearchType(type);
    }

    if (id && id !== selectedContent) {
      this.setSelectedContent(id);
    }
  },
  methods: {
    ...mapActions('home', [
      'setSearchType',
      'setSelectedContent',
    ]),
  },
};
</script>
<style lang="scss">
$side-width: 300px;

#home {
  min-width: 1024px;
  height: 100%;
  .home-column {
    height: 100%;
    float: left;
  }

  #content-list {
    width: 20%;
    background: #f9f9f9;
    border-right: 1px solid #d1dbe5;
    position: relative;

    .list-items {
      overflow-x: hidden;
      overflow-y: auto;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 90px;
    }
  }

  #content {
    width: 79%;
  }
}
</style>