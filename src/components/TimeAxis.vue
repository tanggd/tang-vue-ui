<template>
    <div class="container" id="cc">
        <div class="container-visity" :style="{
            left: left + 'px'
        }">
            <div
                v-for="i in 3000"
                :key="i"
                :title="i"
                :class="['item', {
                    isHour: i % 100 === 0,
                    isMin: i % 10 === 0
                }]" >
                <span
                    v-if="i % 100 === 0"
                    class="time">
                        {{`${ i / 100 }:00`}}
                </span>
            </div>
        </div>
        <div>{{left}}</div>

    </div>
</template>

<script>

export default {
  name: 'TimeAxis',
  data () {
    return {
      left: 0
    }
  },
  mounted () {
    const cEl = document.getElementById('cc')
    // 缩放
    cEl.addEventListener('mousewheel', (e) => {
      console.log(111)
      console.log(e.wheelDelta)
      //
    })

    // 拖动
    let startClientX = 0
    let isDown = false
    cEl.onmousedown = event => {
      startClientX = event.clientX
      isDown = true
    }

    cEl.onmousemove = event => {
      if (!isDown) {
        return
      }
      cEl.style.cursor = 'move'
      if (isDown) {
        console.log('move')
        const endClientX = event.clientX
        const diffX = (startClientX - endClientX) * 2
        if (diffX > 0) {
          this.left = this.left + diffX > 0 ? 0 : this.left + diffX
          if (this.left === 0) {

          }
        } else if (diffX < 0) {
          this.left = this.left + diffX < -11111 ? -11111 : this.left + diffX
          if (this.left === -11111) {

          }
        }
      }
    }

    cEl.onmouseup = () => {
      cEl.style.cursor = 'default'
      isDown = false
    }
  }

}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    border-top: 1px solid #333;
    user-select: none;
    overflow: hidden;
    overflow-x: scroll;
    position: relative;
    .container-visity {
        width: 99999px;

        position: absolute;
        top: 0;
        left: 0;
        transition: all .1s;
    }
    .item {
        float: left;
        width: 3px;
        height: 10px;
        border-left: 1px solid #333;
        position: relative;
        &.isMin {
            height: 15px;
        }
        &.isHour {
            height: 20px;
        }
        .time {
            position: absolute;
            left: 50%;
            bottom: -150%;
            transform: translate(-50%,-50%);
        }
    }
}
</style>
