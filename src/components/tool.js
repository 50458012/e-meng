export  function rem(){
  let width = document.documentElement.clientWidth;
  let styleNode = document.createElement('style');
  styleNode.innerHTML = 'html{font-size :' + width/10 + 'px}' ;
  document.head.appendChild(styleNode);
}


export  function nav($refs){
  let {wrap,list} = $refs
  list.children[0].classList.add('active')
  list.style.width = list.children[0].offsetWidth*list.children.length + 'px'
  let starX, posX , endX,Width = document.documentElement.clientWidth;
  wrap.addEventListener('touchstart',function (event) {
    starX = event.changedTouches[0].clientX;
    posX = transFormCss(list,'translateX')
    list.style.transition = 'none'
    endX = 0 ;
  })
  wrap.addEventListener('touchmove',function (event) {
    let moveX = event.changedTouches[0].clientX;
    endX = moveX - starX + posX;
    if (endX>0) {
      endX *= (1-endX/Width)
    } else if (endX < (Width - list.offsetWidth)) {
      let disX = Width  - list.offsetWidth
      //左侧的偏移量  +  超出的范围 * 动态比例（1-超出的范围/屏宽）
      endX = disX -  (disX - endX ) * (1- (disX - endX ) /Width )
    }
    transFormCss(list,'translateX',endX)
  })
  wrap.addEventListener('touchend',function (event) {
    if (!endX) {
      return
    }
    if (endX > 0) {
      endX = 0;
      list.style.transition = 'transform .3s cubic-bezier(.18,1.7,.81,1.83)'
      transFormCss(list,'translateX',endX)
    } else if (endX < (Width - list.offsetWidth)) {
      list.style.transition = 'transform .3s cubic-bezier(.18,1.7,.81,1.83)'
      endX = Width - list.offsetWidth
      transFormCss(list,'translateX',endX)
    }
    
  })
  
  
  function transFormCss(obj , name , value){
    !obj.aaa&&(obj.aaa = {});
    var result =  '';
    if ( arguments.length > 2 ) {//写
      obj.aaa[name] = value ;
      for ( var n in obj.aaa ) {
        switch (n){
          case 'translate':
          case 'translateX':
          case 'translateY':
            result += n + '(' + obj.aaa[n] + 'px) ' ;
            break;
          case 'scale':
          case 'scaleX':
          case 'scaleY':
            result += n + '('+ obj.aaa[n] +') ';
            break;
          case 'rotate':
          case 'skew':
          case 'skewX':
          case 'skewY':
            result += n + '('+ obj.aaa[n] +'deg) ';
            break;
        }
      }
      obj.style && (obj.style.transform = result)
    } else{
      //代表是读取
      result =  (name === 'scale' || name === 'scaleX' || name === 'scaleY') ? obj.aaa[name] || 1 : obj.aaa[name] || 0 ;
      return result ;
    }
  }
  
  
  
}
