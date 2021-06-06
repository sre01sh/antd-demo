export default {
    singular: true,
    antd: {},
    dva: {},
    routes: [{
      path: '/',
      component: '../layout',
      routes: [
        {path: '/', component: './locale' },
        {path: '/puzzlecards',component: './HelloWorld'},
        {path: '/a',component: './puzzlecards'},
        {path: '/l',component: 'index'},
        {path: '/less',component: 'css-modules-with-less/index'},
        {path: '/less2',component: 'css-modules-with-antd/index'},
        {
          path: '/dashboard',
          routes: [
            { path: 'analysis', component: 'Dashboard/Analysis' },
            { path: 'monitor', component: 'Dashboard/Monitor' },
            { path: 'workplace', component: 'Dashboard/Workplace' }
          ]
        },
        { path: 'list', component: 'list' },
      ]
    }],
    // theme: {
    //   "@primary-color": "#30b767", // 绿色
    // },
};