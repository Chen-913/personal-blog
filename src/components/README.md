# Avatar

<img src="http://mdrs.yuanjin.tech/img/20201130153821.png" alt="image-20201130153821293" style="zoom:50%;" />

## 属性

| 属性名 | 含义               | 类型   | 必填 | 默认值 |
| ------ | ------------------ | ------ | ---- | ------ |
| url    | 头像图片路径       | String | 是   | 无     |
| size   | 头像尺寸，宽高相等 | Number | 否   | 150    |

# Icon

<img src="http://mdrs.yuanjin.tech/img/20201130153927.png" alt="image-20201130153927256" style="zoom:50%;" />

图标组件

使用的图标源来自于「阿里巴巴矢量库」

## 属性

| 属性名 | 含义     | 类型   | 必填 | 默认值 |
| ------ | -------- | ------ | ---- | ------ |
| type   | 图标类型 | String | 是   | 无     |

有效的图标类型：

<img src="http://mdrs.yuanjin.tech/img/20201130155542.jpg" alt="iShot2020-11-30下午03.47.09" style="zoom:33%;" />

# Pager

<img src="http://mdrs.yuanjin.tech/img/20201113130301.png" style="zoom:50%;" />

## 属性

| 属性名        | 含义       | 类型   | 必填 | 默认值 |
| ------------- | ---------- | ------ | ---- | ------ |
| current       | 当前页码   | Number | 否   | 1      |
| total         | 总数据量   | Number | 否   | 0      |
| limit         | 页容量     | Number | 否   | 10     |
| visibleNumber | 可见页码数 | Number | 否   | 10     |

## 事件

| 事件名     | 含义     | 事件参数 | 参数类型 |
| ---------- | -------- | -------- | -------- |
| pageChange | 页码变化 | 新的页码 | Number   |

# Empty

<img src="http://mdrs.yuanjin.tech/img/20201130165011.png" alt="image-20201130165011681" style="zoom:50%;" />

该组件需要在外层容器中横向垂直居中

## 属性

| 属性名 | 含义       | 类型   | 必填 | 默认值   |
| ------ | ---------- | ------ | ---- | -------- |
| text   | 显示的文字 | String | 否   | "无数据" |

# ImageLoader

该组件可以实现一个渐进式图片

![alt tag](http://mdrs.yuanjin.tech/img/20201115132049.gif)

## 属性

| 属性名      | 含义                                         | 类型   | 必填 | 默认值 |
| ----------- | -------------------------------------------- | ------ | ---- | ------ |
| src         | 原始图片的路径                               | String | 是   | 无     |
| placeholder | 原始图片加载完成前的占位图片                 | String | 是   | 无     |
| duration    | 原始图片加载完成后，切换到原始图经过的毫秒数 | Number | 否   | 500    |

## 事件

| 事件名 | 含义                   | 事件参数 | 参数类型 |
| ------ | ---------------------- | -------- | -------- |
| load   | 原始图片加载完成后触发 | 无       | 无       |

## 示例

```html
<ImageLoader 
	src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
/>
```



# SiteAside

<img src="http://mdrs.yuanjin.tech/img/20201130200148.png" alt="image-20201130200148681" style="zoom:33%;" />

网站侧边栏

宽度和高度撑满外层容器

## Contact

<img src="http://mdrs.yuanjin.tech/img/20201130165641.gif" alt="iShot2020-11-30下午04.55.47" style="zoom:40%;" />

该组件需要横向撑满容器，背景色透明

> 1. 如何实现点击弹出QQ对话？
>
>    设置超链接为：tencent://message/?Menu=yes&uin=要对话的QQ号&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45
>
> 2. 如何实现点击弹出发送邮件？
>
>    设置超链接为：mailto:邮件地址

## Menu

<img src="http://mdrs.yuanjin.tech/img/20201130195147.png" alt="image-20201130195147086" style="zoom:33%;" />

该组件需要横向撑满容器，背景色透明

每个菜单的信息如下：

> **首页**
>
> 链接地址：/
>
> 选中条件：路径等于 /
>
> **文章**
>
> 链接地址：/blog
>
> 选中条件：路径以`/blog`开头
>
> **关于我**
>
> 链接地址：/about
>
> 选中条件：路径等于`/about`
>
> **项目&效果**
>
> 链接地址：/project
>
> 选中条件：路径等于`/project`
>
> **留言板**
>
> 链接地址：/message
>
> 选中条件：路径等于`/message`

# Loading

一个加载动画

| 属性名 | 含义              | 类型   | 必填 | 默认值 |
| ------ | ----------------- | ------ | ---- | ------ |
| size   | loading图片的大小 | Number | 否   | 50     |

# MessageArea

消息区域组件，由评论区和留言板组成，由DataForm组件和CommentList组件组成

![image-20210118140742643](http://mdrs.yuanjin.tech/img/20210118140742.png)

## 属性

| 属性名        | 含义               | 类型    | 必填 | 默认值 |
| ------------- | ------------------ | ------- | ---- | ------ |
| title         | 列表标题           | String  | 否   | ""     |
| subTitle      | 列表副标题         | String  | 否   | ""     |
| list          | 列表数据           | Array   | 否   | []     |
| isListLoading | 列表是否正在加载中 | Boolean | 否   | false  |

## 事件

| 事件名 | 含义               | 事件参数1 | 参数类型 | 事件参数2                            |
| ------ | ------------------ | --------- | -------- | ------------------------------------ |
| submit | 用户点击提交时触发 | 数据对象  | Object   | 回调函数，传入一个成功时显示的字符串 |

`submit`事件中的数据对象格式为：

```js
{
  nickname:"昵称",
  content:"内容"
}
```
# ToTop

点击回到页面顶端的一个组件

## 属性

| 属性名 | 含义              | 类型   | 必填 | 默认值 |
| ------ | ----------------- | ------ | ---- | ------ |
| isActive   | 是否显示这个按钮 | Boolean | 否   | false     |


# NotFound
当页面找不到时，显示的404组件
要求父组件设置以下css属性 
``` css
position:relative;
```

![image-20220212174514431](https://gitee.com/Gorgeous-man/picture-library/raw/master/imgs/202202121745518.png)
