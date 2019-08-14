<template>
  <div id="app">
    <div class="header-container">
      <div class="header">
        基于vue2的UI库
      </div>
    </div>
    <div class="main">
      <div class="container">
        <div class="nav">
          <div class="nav-container">
            <div style="height: 1000px;">
              <router-link 
                v-for="router in routers"
                :key="router.name"
                :to="router.path"
                class="link">
                  {{ router.meta.title }}
              </router-link>
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
import routers from '@/router/routers'

export default {
  data() {
    return {
      routers
    }
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
    .header {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
    }
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
        background: #fff;
        z-index: 2;
        .nav-container {
          height: 100%;
          overflow-y: auto;
          padding-top: 20px;
          .link {
            display: block;
            height: 40px;
            color: #444;
            line-height: 40px;
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight: 400;
            text-decoration: none;
            &:hover {
              color: #409eff;
            }
          }
        }
      }
      .content {
        padding-left: 260px;
        padding-right: 50px;
        padding-top: 50px;
        overflow: hidden;
        overflow-y: auto;
      }
    }

  }
}

</style>
