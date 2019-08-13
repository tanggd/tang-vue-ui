<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <div class="time-box" style="width: 700px; height: 80px; border: 1px solid rgba(0,0,0,.1);">
      <TimeAxis />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TimeAxis from '@/components/TimeAxis.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    TimeAxis
  }
}
</script>
