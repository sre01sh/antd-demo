import request from '../util/request';
const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};
export default {
  namespace : 'cards',
  state     : {
    cardsList: [ ]
  },
  effects: {
    *queryList({ _ }, { call, put }) {
      const listData = [{
          name : 'umi',
          desc : '极快的类 Next.js 的 React 应用框架',
          url  : 'https://umijs.org'
        },
        {
          name : 'antd',
          desc : '一个服务于企业级产品的设计体系',
          url  : 'https://ant.design/index-cn'
        },
        {
          name : 'antd-pro',
          desc : '一个服务于企业级产品的设计体系',
          url  : 'https://ant.design/index-cn'
        }
      ];
      yield call(delay, 1000);
      yield put({ type: 'queryList', payload: listData });
    }
  },
  reducers: {
    queryList(state, {payload}) {
      const cardsList = payload;
      return {
        ...state,
        cardsList,
      };
    }
  }
};