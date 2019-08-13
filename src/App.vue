<template>
  <div id="app">
    <div class="header-container">
      <Header></Header>
    </div>
    <div class="main">
      <div class="container">
        <div class="nav">
          <div class="nav-container">
            <div style="height: 1000px;">
              <router-link to="/" class="link">Home</router-link>
            </div>
          </div>
        </div>
        <div class="content">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  .header-container {
    width: 1140px;
    margin: 0 auto;
  }
  .main {
    height: calc(100% - 50px);
    overflow: auto;
    .container {
      width: 1140px;
      margin: 0 auto;
      .nav {
        width: 240px;
        position: fixed;
        top: 50px;
        bottom: 0;
        overflow: hidden;
        .nav-container {
          height: 100%;
          overflow-y: auto;
        }
      }
      .content {
        padding-left: 260px;
        padding-right: 50px;
        padding-top: 50px;
      }
    }

  }
}

</style>
