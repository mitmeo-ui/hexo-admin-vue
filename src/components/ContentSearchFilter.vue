<template>
  <div id="content-search-filter">
    <div class="list-search">
      <el-input :placeholder="searchPlaceholder" icon="search" v-model="searchTerm"></el-input>
    </div>
    <div class="list-selection">
      <el-radio-group v-model="searchType">
        <el-radio-button label="Posts" class="first"></el-radio-button>
        <el-radio-button label="Pages" class="last"></el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
import { debounce, capitalize } from 'lodash';
import { mapActions } from 'vuex';

import {
  RadioGroup,
  RadioButton,
  Input,
} from 'element-ui';

export default {
  name: 'content-search-filter',
  components: {
    [RadioGroup.name]: RadioGroup,
    [RadioButton.name]: RadioButton,
    [Input.name]: Input,
  },
  data() {
    return {

    };
  },
  created() {
    this.doSearch = debounce(this.setSearchTerm, 500);
  },
  methods: {
    ...mapActions('home', [
      'setSearchType',
      'setSearchTerm',
    ]),
  },
  computed: {
    searchPlaceholder() {
      return `Search for ${this.searchType}...`;
    },
    searchType: {
      get() { return capitalize(`${this.$store.state.home.searchType}s`); },
      set(val) {
        this.setSearchType(val.slice(0, -1).toLowerCase());
        this.$router.push('/');
      },
    },
    searchTerm: {
      get() { return this.$store.state.home.searchTerm; },
      set(val) {
        this.doSearch(val);
      },
    },
  },
};
</script>

<style lang="scss">
#content-search-filter {
  // border-bottom: $grey-border;
  .list-selection {
    position: static;
    left: 0;
    right: 0;

    .el-radio-group {
      width: 100%;
    }
    .el-radio-button {
      width: 50%;
      .el-radio-button__inner {
        width: 100%;
        border-radius: 0;
        border-top: 0;
      }

      &.first {
        .el-radio-button__inner {
          border-left: 0;
        }
      }

      &.last {
        .el-radio-button__inner {
          border-right: 0;
        }
      }
    }
  }

  .list-search {
    padding: 10px;
    border-bottom: $grey-border;
  }
}
</style>