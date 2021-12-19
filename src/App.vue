<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/populars">Populars</router-link> |
    <router-link to="/toprated">Top Rated</router-link>
  </div>
  <router-view/>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  .container {
    max-width: 1440px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
    box-sizing: border-box;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
    background-color: #2c3e50;
    margin-bottom: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #a8bacc;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
