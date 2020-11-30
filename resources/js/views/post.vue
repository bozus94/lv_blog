<template>
  <main>
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading" v-text="post.title"></h1>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <p v-text="post.excerpt"></p>
          <div v-html="post.body"></div>
        </div>
      </div>
      <h2 class="text-center mx-auto my-3">Otros articulos</h2>
      <hr />
    </div>
    <posts></posts>
  </main>
</template>

<script>
import axios from "axios";

export default {
  props: ["slug"],
  data() {
    return {
      post: {},
    };
  },
  created() {
    console.log(this.slug);
    let url = "http://lv_blog.test/api/" + this.slug;
    axios.get(url).then((res) => (this.post = res.data));
    console.log(this.post);
  },
};
</script>