<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6" v-for="(item, $index) in list" :key="$index">
        <div class="card mb-3">
          <router-link
            :to="{ name: 'post', params: { slug: item.slug } }"
            class="card-header"
            v-text="item.title"
            v-bind:href="item.slug"
          ></router-link>
          <div class="card-body">
            <p class="card-text" v-text="item.excerpt"></p>
          </div>
        </div>
      </div>
    </div>
    <!-- componente tarjeta post -->

    <!-- componente scroll infinito -->
    <infinite-loading @infinite="infiniteHandler" spinner="waveDots">
      <div slot="no-more"></div>
      <div slot="no-result">No se han encontrado datos</div>
    </infinite-loading>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      list: [],
      page: 0,
    };
  },
  methods: {
    infiniteHandler($state) {
      this.page++;
      let url = "api/posts?page=" + this.page;

      axios.get(url).then((response) => {
        let posts = response.data.data;

        if (posts.length) {
          this.list = this.list.concat(posts);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
  },
};
</script>

<style lang="sass">
.card-body
  min-height: 110px
</style>