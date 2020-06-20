module.exports = {
    title: '学海无涯', // 博客首页标题和顶端导航左侧标签
    description: '爱分享, 爱总结, 爱进步', // meta标签里描述
    head: [ // 指定浏览器标签栏上小图标
      ['link', {
        rel: 'icon',
        href: '/logo.png' // 图片在public目录下
      }]
    ],
    extend: '@vuepress/theme-default', // 你想创建一个继承自 VuePress 默认主题的派生主题 (自定义主题-为了集成评论才使用这里)
    themeConfig: {
      logo: '/logo_ci.png', // 导航上和首页的logo
      lastUpdated: '上次更新时间', // 最后一次更新时间(默认获取git提交时间)
      // 顶部右上角导航栏
      nav: [ // 几个导航, 就有几个对象
        {
          text: 'Web前端', // 导航名字 
          items: [{ // 下拉列表选项
              text: 'JavaScript',
              link: '/pages/web/js/什么是js.md' // 点击导航, 打开对应页面
            },
            { 
              text: 'CSS',
              link: '/pages/web/css/什么是css.md' 
            }
          ]
        },
        { // 无需下拉列表的导航
          text: 'Node全栈',         
          ariaLabel: 'Node全栈', 
          link: '/pages/node/什么是nodejs.md'
        }
      ],
      // 跳转到导航对应一级分类中的--左侧(侧边栏)导航
      // 注意: key要跟nav的link路径要匹配
      sidebar: {
        '/pages/web/js/': [ // Web前端的One下属的分类
          {
            title: '运行时',
            collapsable: true,
            sidebarDepth: 1, 
            children: [ // 每个都是一个侧边栏导航(元素1是上面路径拼接后的文件名, 元素2是左侧导航的名字)
              ['什么是js.md', '什么是js'],
              ['this指向.md', 'this指向']
            ]
          },
          {
            title: '性能优化',
            collapsable: true,
            sidebarDepth: 1, 
            children: [
              ['防抖函数.md', '防抖函数']
            ]
          }
        ],
        '/pages/web/css/': [{
          title: '布局', 
          collapsable: true, 
          sidebarDepth: 1, 
          children: [
            ['弹性布局.md', '弹性布局']
          ]
        }],
        '/pages/node/': [
          {
            title: '其他',
            collapsable: true,
            children: [
              ['什么是nodejs.md', '什么是nodejs']
            ]
          },
        ],
        //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
      },
    },
    markdown: {
      lineNumbers: true, // 是否在每个代码块的左侧显示行号
    }
  }