<template>
  <div class="cm-container" :style="axisComputed" v-if="show">
    <svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px; overflow: hidden;"><symbol id="icon-youjiantou" viewBox="0 0 1024 1024"><path d="M288.791335 65.582671l446.41733 446.417329-446.41733 446.417329z"></path></symbol></svg>
    <!--first-->
    <ul class="cm-ul cm-ul-1 easy-cm-ul" :class="underline ? 'cm-underline' : ''">
      <li v-for="(item, index) in list" :style="liStyle" :key="'level1-' + index" :class="item.separator ? 'cm-separator' : ''">
        <div v-if="item.children && !item.action" :class="firstLeft ? 'cm-left' : ''">
          <i v-if="!importedFA5 && typeof item.icon !== 'undefined'" :class="item.icon" />
          <fa-icon v-if="importedFA5 && typeof item.icon !== 'undefined'" :icon="item.icon" :class="item.class" />
          <span v-text="item.text" />
          <fa-icon icon='caret-right' />
        </div>
        <div v-else-if="item.children && item.action" @click.stop="callback({ action: item.action, data: item.data })" :class="firstLeft ? 'cm-left' : ''">
          <i v-if="!importedFA5 && typeof item.icon !== 'undefined'" :class="item.icon" />
          <fa-icon v-if="importedFA5 && typeof item.icon !== 'undefined'" :icon="item.icon" :class="item.class" />
          <span v-text="item.text" />
          <fa-icon icon='caret-right' />
        </div>
        <div v-else @click.stop="callback({ action: item.action, data: item.data })" :class="firstLeft ? 'cm-left' : ''">
          <i v-if="!importedFA5 && typeof item.icon !== 'undefined'" :class="item.icon" />
          <fa-icon v-if="importedFA5 && typeof item.icon !== 'undefined'" :icon="item.icon" :class="item.class" />
          <span v-text="item.text" />
        </div>
        <!--second-->
        <ul class="cm-ul cm-ul-2 easy-cm-ul" :style="secondBorderCheck(index)" :class="underline ? 'cm-underline' : ''" v-if="item.children && item.children.length > 0" >
          <li v-for="(second, si) in item.children" :key="'level2-' + si" :style="liStyle" :class="item.separator ? 'cm-separator' : ''">
            <div v-if="second.children && !second.action" :class="secondLeft?'cm-left':''">
              <i v-if="!importedFA5 && typeof second.icon !== 'undefined'" :class="second.icon" />
              <fa-icon v-if="importedFA5 && typeof second.icon !== 'undefined'" :icon="second.icon" :class="second.class" />
              <span v-text="second.text" />
              <fa-icon icon='caret-right' />
            </div>
            <div v-else-if="second.children && second.action" @click.stop="callback({ action: second.action, data: second.data })" :class="secondLeft ? 'cm-left' : ''">
              <i v-if="!importedFA5 && typeof second.icon !== 'undefined'" :class="second.icon" />
              <fa-icon v-if="importedFA5 && typeof second.icon !== 'undefined'" :icon="second.icon" :class="second.class" />
              <span v-text="second.text" />
              <fa-icon icon='caret-right' />
            </div>
            <div v-else @click.stop="callback({ action: second.action, data: second.data })" :class="secondLeft?'cm-left':''">
              <i v-if="!importedFA5 && typeof second.icon !== 'undefined'" :class="second.icon" />
              <fa-icon v-if="importedFA5 && typeof second.icon !== 'undefined'" :icon="second.icon" :class="second.class" />
              <span v-text="second.text" />
            </div>
            <!--third-->
            <ul class="cm-ul cm-ul-3 easy-cm-ul" :style="thirdBorderCheck(index,si)" :class="underline?'cm-underline':''" v-if="second.children && second.children.length > 0">
              <li v-for="(third, ti) in second.children" :key="'level3-' + ti" :style="liStyle" :class="item.separator ? 'cm-separator' : ''">
                <div @click.stop="callback({ action: third.action, data: third.data })">
                  <i v-if="!importedFA5 && typeof third.icon !== 'undefined'" :class="third.icon" />
                  <fa-icon v-if="importedFA5 && typeof third.icon !== 'undefined'" :icon="third.icon" :class="third.class" />
                  <span v-text="third.text" />
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'EasyCm',
    data() {
      return {
        importedFA5: false,
        // 是否显示
        show: false,
        // 触发点坐标
        axis: {
          x: 0,
          y: 0
        }
      }
    },
    props: {
      tag: {},
      list: {
        required: true
      },
      // 是否开启下划线
      underline: {
        default: false
      },
      // 是否开启箭头
      arrow: {
        default: false
      },
      // 是否开启边界检测
      border: {
        default: true
      },
      // 列表项宽度
      itemWidth: {
        default: 140
      },
      // 列表项高度
      itemHeight: {
        default: 36
      },
      // 列表项字体
      itemSize: {
        default: 14
      },
      // 显示点偏移量
      offset: {
        default: () => {
          return {
            x: 6, y: 2
          }
        }
      },
      // 边界距离
      borderWidth: {
        default: 6
      },
      // set to true if you are importing Font Awesome 5 icons into your project
      FA5: {
        default: false
      }
    },
    created() {
      this.importedFA5 = this.FA5
    },
    mounted() {
      this.$root.$on('easyAxis', (axis) => {
        if (axis.tag == this.tag){
            this.show = true
            this.axis = axis
        }
      })
      document.addEventListener('click', () => {
          this.show = false
      }, true)
    },
    watch: {
      axis() {
        if (this.border){
          let bw = document.body.offsetWidth, bh = document.body.offsetHeight
          if (this.axis.x + this.offset.x + this.itemWidth >= bw) {
            this.axis.x = bw - this.itemWidth - this.borderWidth - this.offset.x
          }
          if (this.axis.y + this.offset.y + this.itemHeight * this.list.length >= bh) {
            this.axis.y = bh - this.itemHeight * this.list.length - this.borderWidth -this.offset.y
          }
        }
      }
    },
    computed: {
      axisComputed() {
        return {
          top: this.axis.y + this.offset.y + 'px',
          left: this.axis.x + this.offset.x + 'px'
        }
      },
      liStyle() {
        return{
          width: this.itemWidth + 'px',
          height: this.itemHeight + 'px',
          lineHeight: this.itemHeight + 'px',
          fontSize: this.itemSize + 'px'
        }
      },
      firstLeft() {
        let bw = document.body.offsetWidth
        return this.axis.x + this.itemWidth*2 >= bw
      },
      secondLeft() {
        let bw = document.body.offsetWidth
        return this.axis.x + this.itemWidth*3 >= bw
      }
    },
    methods: {
      secondBorderCheck(i){
        let bw = document.body.offsetWidth, bh = document.body.offsetHeight
        let cy = this.axis.y + ( i + this.list[i].children.length )* this.itemHeight
        return {
          left: this.axis.x + this.itemWidth*2 >= bw ? '-100%' : '100%',
          top: bh >= cy ? 0 : -(this.list[i].children.length - 1)* this.itemHeight + 'px'
        }
      },
      thirdBorderCheck(i,si){
        let bw = document.body.offsetWidth, bh = document.body.offsetHeight
        let cy =  this.axis.y + this.list[i].children[si].children.length * this.itemHeight + (i+si)*this.itemHeight+parseInt(this.secondBorderCheck(i).top)
        return {
          left: this.axis.x + this.itemWidth*3 >= bw ? '-100%' : '100%',
          top: cy > bh ? -(this.list[i].children[si].children.length - 1) * this.itemHeight + 'px' : 0
        }
      },
      callback (actionData){
        this.$emit('actionCallback',actionData)
      }
    }
  }
</script>

<style scoped>
  .icon {
    width: 0.9em; height: 0.9em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    position: absolute;
    right: 0%;
    top: 50%;
    transform: translateY(-50%);
  }
  .cm-container {
    position: fixed;
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    z-index: 9999;
  }
  .cm-ul {
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    box-shadow: 0 0 1px #666;
    background-color: #ffffff;
    color: #2e2e2e;
  }

  .cm-ul li {
    width: 100%;
    box-sizing: border-box;
    text-align: left;
    position: relative;
    cursor: pointer;
  }
  .cm-ul li:hover>ul{
    display: block;
  }
  .cm-ul li div{
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0 0.8em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
  }
  .cm-ul li i {
    display: inline-block;
    width: 1em;
    font-size: 1.3em;
    text-align: center;
  }
  .cm-ul li div:hover{
    background-color: #666666;
    color: #fff;
  }
  .cm-ul-2,.cm-ul-3 {
    position: absolute;
    top: 0;
    display: none;
    z-index: 10000;
  }
  .cm-left svg{
    transform: translateY(-50%) rotate(180deg) ;
    left: 0;
  }
  .cm-underline li div:after, .cm-separator div:after{
    content: '';
    width: 90%;
    position: absolute;
    left: 5%;
    top: 0;
    height: 1px;
    background-color: #cccccc;
    z-index: 10001;
  }
  .cm-underline li div:hover:after,.cm-underline>li:first-child>div:after, .cm-separator div:hover:after {
    display: none;
  }
</style>
