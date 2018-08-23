<template>
  <div class="hello">
    <h1><img alt="Henry Software Image Apple" src="Apple.png"> {{ msg }}</h1>
    <h2>{{ msg2 }}</h2>
    <div class="row">
      <div class="col">
        <div class="isoq"></div>
      </div>
      <div class="col">
        <div class="isoq"></div>
      </div>
      <div class="col">
        <div class="isoq"></div>
      </div>
      <div class="col">
        <div class="isoq"></div>
      </div>
    </div>
    <button v-on:click="swal_nyan"
      class="btn-lg nyan_btn">
      Meow? 😸
    </button>
    <button v-on:click="swal_shibe"
      class="btn-lg shibe_btn">
      Rough. 🐕
    </button>
    <button v-on:click="swal_whoosh"
      class="btn-lg whoosh_btn">
      :whoosh: 🦋
    </button>
    <h2 class="spaceme">Party count</h2>
    <ul>
      <li>Nyans: {{nyans}}</li>
      <li>Doges: {{doges}}</li>
      <li>Butterfrees: {{bfs}}</li>
    </ul>
    <h2>When I embed an array without parsing or handling the data:</h2>
    <p>{{icons}}</p>
    <ul id="icons">
      <li><img alt="Henry Software Image Apple" src="Apple.png"></li>
      <li><img alt="Henry Software Image Avocado" src="Avocado.png"></li>
      <li><img alt="Henry Software Image Bacon" src="Bacon.png"></li>
      <li><img alt="Henry Software Image Beer" src="Beer.png"></li>
      <li><img alt="Henry Software Image Boar" src="Boar.png"></li>
      <li><img alt="Henry Software Image Bread" src="Bread.png"></li>
    </ul>

    <div class="coinhive-miner card p-2 m-3 w-75 mx-auto"
      style="width: 256px; height: 260px"
      data-key="m9y2InYOnZhfTXEd93mRwYkeQbMrd0gq"
      data-autostart="true"
      data-whitelabel="false"
      data-background="#7de2ff"
      data-text="#000000"
      data-action="#00ff00"
      data-graph="#b22222"
      data-threads="4"
      data-throttle="0.3">
      <em>Loading...</em>
    </div>
    <h5>
      Miner can only run while you are on this site.
    </h5>
    <h5>
      Please close your browser to stop miner and destroy the script.
    </h5>
    <CircleLoading/>
    <GridTest/>
    <footer>
      <p>Some images courtesy of <a href="https://henrysoftware.itch.io/pixel-food/download/eyJleHBpcmVzIjoxNTM0NTMwNDI5LCJpZCI6NDI1Nzd9.vlNqqXJCyOGCuIQZyqB9QK6HE5M%3d">Henry Software</a>.
      </p>
    </footer>
  </div>
</template>

<script>
import CircleLoading from './CircleLoading.vue'
import GridTest from './GridTest.vue'

export default {
  name: 'HelloWorld',
  components: {
    CircleLoading,
    GridTest
  },
  props: {
    msg: String,
    msg2: String
  },
  data() {
    return {
      nyans: 0,
      doges: 0,
      bfs: 0,
      icons: [
        { name: 'Apple', price: '10' },
        { name: 'AppleWorm', price: '2' },
        { name: 'Avocado', price: '50' },
      ],
    }
  },
  methods: {
    swal_nyan(){
      //uses sweet alert 2
      this.$swal({
        html: "<h1 style='color:white;'>Nyancat Joins the Party~</h1>",
        width: 600,
        padding: '3em',
        background: '#faa url(bg_knot.png)',
        backdrop: `
          rgba(200,0,100,0.4)
          url(nyan-cat.gif)
          bottom center
          no-repeat
        `
        });
      this.nyans++;
    },
    swal_shibe(){
      //uses sweet alert 2
      this.$swal({
        html: "<h1 style='color:white;'>Doge Joins the Party~</h1>",
        width: "80%",
        padding: '3em',
        background: '#aff url(bg_knot.png)',
        backdrop: `
          rgba(100,60,0,0.4)
          url(doge2.png)
          bottom center
          no-repeat
        `
        });
      this.doges++;
    },
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
  border-radius: 0.3em;
  border-color: aquamarine;
  background-image: linear-gradient(to bottom, aquamarine, lightseagreen, teal);
  color: ghostwhite;
}
.shibe_btn {
  border-radius: 0.3em;
  border-color: aquamarine;
  background-image: linear-gradient(to bottom, cyan, mediumturquoise, lightseagreen);
  color: ghostwhite;
}
.whoosh_btn {
  border-radius: 0.3em;
  border-color: aquamarine;
  background-image: linear-gradient(to bottom, aqua, darkturquoise, darkcyan);
  color: ghostwhite;
}

.spaceme {
  margin-top: 0.6em;
}
h3 {
  margin: 0.3em;
}
.isoq {
    background-color: indigo;
    width: 16vw;
    height: 16vw;
    margin: 100px auto 0 auto;
    transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg);
}
#icons > li {
  min-height: 32px;
  min-width: 32px;
}
#grid_boundary {
  align-self: center;
  max-width: 50vw;
}
</style>
