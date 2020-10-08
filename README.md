
# vue-easycm



### A Simple and easy-to-use Vue Context Menu (Context Menu)

![](https://img.shields.io/npm/dw/vue-easycm.svg)


![http://boho.image.alimmdn.com/github/easycmdemo.gif?t=1524493555136](http://boho.image.alimmdn.com/github/easycmdemo.gif?t=1524493555136)

* Simple and customizable configuration

* Max 3 levels of menus

* Font Awesome 5 support

* Border Detection


## Install


```
npm install git+https://github.com/vhs-ron/vue-easycm --save
```


## Use

###   1.Import



```js

// method 1 ES6 import
import VueEasyCm from 'vue-easycm'
Vue.use(VueEasyCm)


//  method 2 require
var VueEasyCm = require('VueEasyCm')



// method 3 import the js file directly to the document head
<script src="./dist/vue-easycm.js"></script>

```

###   2. Basic Usage



1. Call `$easycm($event, $root)` using the appropriate event trigger on the element that you want to trigger the context menu.

   Example：

   ```vue
   <div @contextmenu="$easycm($event,$root)"></div>
   ```

   ​

2. Place the context menu component in your template. Note, the list prop is required.

   Example：

   ```vue
   <easy-cm :list=""></easy-cm>
   ```




### 3. Options

|    Props     | Required |      Default     |   Description   |
| :----------: | :------: | :--------------: | :--------------: |
|    :list     |   true   |        none        |     Array of menu items   |
|     :tag     |  false   |        none       | a name for the menu when configuring multiple context menus |
|@actionCallback|  false   |       none        | 返回触发元素序号 |
|  :underline  |  false   |      false       |  是否开启下划线  |
|    :arrow    |  false   |      false       |   是否开启箭头   |
|   :border    |  false   |       true       | 是否开启边界检测 |
|  :itemWidth  |  false   |       140        |    列表项宽度    |
| :itemHeight  |  false   |        36        |    列表项高度    |
|  :itemSize   |  false   |        14        |  列表项字体大小  |
|   :offset    |  false   | {   x: 6, y: 2 } |   显示点偏移量   |
| :borderWidth |  false   |        6         |     边界距离     |

Additional Details：

1. The list prop is formatted as follows:

   ```js
    [
      {
        text: 'Text to appear in each menu item',
        icon: 'fas fa-play',  // optional FontAwesome5 class
        class: 'purple-items', // optional class to apply to menu items
        separator: false, // optional boolean to determine if the menu shows a line separating menu items
        action: 'doSomething', // optional string name a function to call when menu item is selected
        data: {} // optional object data to pass to callback action when triggered
      },
      {
        text: 'Sub-menu',
        icon: 'fas fa-play',
        children: [
          {
            text: 'sub-menu item',
            icon: 'fas fa-play',
            separator: false,
            action: 'doSomethingElse',
            data: {}
          }
        ]
      }
    ]
   ```

   *Nested sub-items are formatted exactly the same.

   ​

2. Tag Prop

   Similar to an id, the tag prop identifies different context menus when multiple are used.

   In this example @contextmenu="\$easycm(\$event,\$root,[tag])" requires a tag to identify which context menu to display.

   Example:

   ```vue
   <div @contextmenu="$easycm($event,$root,1)">
       <p @contextmenu="$easycm($event,$root,2)"></p>
   </div>
   <easy-cm :tag="1"></easy-cm>
   <easy-cm :tag="2"></easy-cm>
   ```

   When the p element is selected, the context menu with tag 2 will display. When the div is selected, context menu with tag 1 will be displayed.
   ​

3. @actionCallback Event

   When an action is provided the action callback event will return the name of the action and the data to be passed to the function.
   The action and data will be returned as an object that looks as follows:

  ```js
  {
    action: 'doSomething',
    data: {
      parameter: 1
    }
  }
  ```
  To trigger the action we recommend creating a triggerAction method in your component as shown below. Ensure that the action is also listed in your methods.

  ```vue
  <div @contextmenu="$easycm($event,$root)"></div>
  <easy-cm :list="listItems" @actionCallback="triggerAction"></easy-cm>

  .
  .
  .

  methods: {
    triggerAction(actionData) {
      this[actionData.action](actionData.data)
    }
  }
  ```

## Custom Styling

By default the ul tag has the class `easy-cm-ul`. To modify the style, you can target tags using this class in your css as shown below.

```html
<ul class="easy-cm-ul">
    <li>
      <div></div>
      <ul class="easy-cm-ul">
        <li>
          <div></div>
          <ul class="easy-cm-ul">
            <li>
              <div></div>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
```

Example：

![http://boho.image.alimmdn.com/github/p1.png?t=1524498301156](http://boho.image.alimmdn.com/github/p1.png)

![http://boho.image.alimmdn.com/github/p2.png](http://boho.image.alimmdn.com/github/p2.png)



## Demo Code

```vue
// gif 图源码
<template>
  <div id="app" @contextmenu="$easycm($event,$root)">
    <easy-cm :list="cmList"
             @actionCallback="triggerAction"
             :underline="true"
             :arrow="true">
    </easy-cm>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      cmList: [{
        text: 'Play Now',
        icon: 'fas fa-play'
        action: 'play',
        data: {}
      },
      {
        text: 'Play Next',
        icon: 'fas fa-step-forward',
        action: 'playNext',
        data: {
          videoId: 'next1'
        }
      }]
    }
  },
  methods:{
    triggerAction(actionData){
      this[actionData.action](actionData.data)
    },
    play() {
      // code for the play method here
    },
    playNext(dataObject) {
      // code for playNext method here. To use the videoId passed call dataObject.videoId
    }
  }
}
</script>
```
