export default {
    singular: true,
    antd: {},
    dva: {},
    routes: [{
      path: '/',
      component: '../layout',
      routes: [
        {path: '/', component: './puzzlecards' },
        {path: '/puzzlecards',component: './HelloWorld'},
        {
          path: '/dashboard',
          routes: [
            { path: 'analysis', component: 'Dashboard/Analysis' },
            { path: 'monitor', component: 'Dashboard/Monitor' },
            { path: 'workplace', component: 'Dashboard/Workplace' }
          ]
        },
      ]
    }],
};