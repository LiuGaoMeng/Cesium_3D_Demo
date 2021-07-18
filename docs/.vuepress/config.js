module.exports = {
    base:'/',
    title: 'Cesium_DEMO',
    description: 'Cesium_DEMO',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
      ],
      sidebar: [
          {
              title: '介绍',
              collapsable: true,
              children: [
                'views/guide/install/',
                'views/guide/develop/'
              ]
            },
            {
              title: '组件',
              collapsable: true,
              children: [
                'views/components/basic/',
              ]
            }
        ]
      }
  }