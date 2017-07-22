//中间件
function asyncAction(dispatch,url,type){
  fetch(url).then((res)=>{
    res.json().then((arrData)=>{
      // console.log(arrData);
      setTimeout(()=>{
        //发送修改状态的action
        dispatch({
          type:type,
          payload:arrData
        });
        dispatch({
          type:'HIDE_LOADING'
        });
      },1000);
    });
  }).catch((res)=>{
    alert(res.status);
  });
  return dispatch({
    type:'SHOW_LOADING'
  });
}
export default asyncAction;