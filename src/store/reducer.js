
//创建reducer 纯函数，必须有返回值
let reducer = (state=defaultState,action)=>{
  let {type,payload} = action;//解构
  switch (type){
    case 'SHOW_LOADING':
      return Object.assign({},state,{
        bLoading: true
      });
      break;
    case 'HIDE_LOADING':
      return Object.assign({},state,{
        bLoading: false
      });
      break;
    case 'ADD_HOME_WELCOME':
      return Object.assign({},state,{
        homeWelcome: payload
      });
      break;
    case 'REMOVE_HOME_WELCOME':
      return Object.assign({},state,{
        homeWelcome: []
      });
      break;
    case 'ADD_HOME_TIPS':
      return Object.assign({},state,{
        homeTips: payload
      });
      break;
    case 'REMOVE_HOME_TIPS':
      return Object.assign({},state,{
        homeTips: []
      });
      break;
    case 'ADD_HOME_BECOME':
      return Object.assign({},state,{
        homeBecome: payload
      });
      break;
    case 'REMOVE_HOME_BECOME':
      return Object.assign({},state,{
        homeBecome: []
      });
      break;
    case 'ADD_HOME_MODEL':
      return Object.assign({},state,{
        homeModel: payload
      });
      break;
    case 'REMOVE_HOME_MODEL':
      return Object.assign({},state,{
        homeModel: []
      });
      break;
    case 'ADD_ABOUT_ABOUT':
      return Object.assign({},state,{
        aboutAbout: payload
      });
      break;
    case 'REMOVE_ABOUT_ABOUT':
      return Object.assign({},state,{
        aboutAbout: []
      });
    case 'ADD_FASHION_MODEL':
      return Object.assign({},state,{
        fashionModel: payload
      });
      break;
    case 'REMOVE_FASHION_MODEL':
      return Object.assign({},state,{
        fashionModel: []
      });
      break;
    case 'ADD_STYLES_MODEL':
      return Object.assign({},state,{
        stylesModel: payload
      });
      break;
    case 'REMOVE_STYLES_MODEL':
      return Object.assign({},state,{
        stylesModel: []
      });
      break;
    case 'ADD_STYLES_STYLE':
      return Object.assign({},state,{
        stylesStyle: payload
      });
      break;
    case 'REMOVE_STYLES_STYLE':
      return Object.assign({},state,{
        stylesStyle: []
      });
      break;
    default:
      return false;
  }
};
export default reducer;
