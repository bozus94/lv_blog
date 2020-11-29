<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <!-- componente tarjeta post -->
        <div class="card my-3" v-for="(item, $index) in list" :key="$index">
          <a
            class="card-header"
            v-text="item.title"
            v-bind:href="item.slug"
          ></a>
          <div class="card-body">
            <p class="card-text">ID: {{ item.id }}</p>
            <p class="card-text" v-text="item.excerpt"></p>
          </div>
        </div>
        <!-- componente scroll infinito -->
        <infinite-loading @infinite="infiniteHandler" spinner="waveDots">
          <div slot="no-more"></div>
          <div slot="no-result">No se han encontrado datos</div>
        </infinite-loading>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      list: [],
      page: 18,
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
