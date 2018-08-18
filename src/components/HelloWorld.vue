<template>
  <div class="hello">
    <h1><img  alt="Henry Software Image Cherry" src="Cherry.png"> {{ msg }}</h1>
    <p>
      Do we actually still endorse br tags?<br>
      I mean just to break up a line,<br>srsly?
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <button v-on:click="swal_whoosh"
      class="btn-lg whoosh_btn btn-primary">
      :whoosh: 🦋
    </button>
    <h3>Butterfrees: {{bfs}}</h3>

    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      bfs: 0,
    }
  },
  methods: {
    swal_whoosh(){
      //uses sweet alert 2
      this.$swal({
        html: "<h1 style='color:white;'>Butterfree Joins the Party~</h1>",
        width: 600,
        padding: '3em',
        background: '#faf url(bg_knot.png)',
        backdrop: `
          rgba(50,00,80,0.4)
          url(butterfree.png)
          bottom center
          no-repeat
        `
        });
      this.bfs++;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  border-radius: 4em;
  border: black 3px groove;
  margin: 1.2em;
}
.nyan_btn {
  background-image: linear-gradient(to right, red, purple, navy);
}
.shibe_btn {
  background-image: linear-gradient(to right, ivory, gold, olive);
}
.whoosh_btn {
  background-image: linear-gradient(to right, aquamarine, thistle, indigo);
}

.spaceme {
  margin-top: 1.6em;
}
h3 {
  margin: 0.3em;
}
</style>
