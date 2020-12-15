const translate = document.getElementById('translate');
const textTrans = document.getElementById('text-trans');
const trnsContent = document.getElementById('trns-content');

trnsContent.innerHTML = ''
let result
function trans () {
  $.ajax({
    url: 'https://aidemo.youdao.com/trans',
    type: 'post',
    dataType: 'json',
    data: {
        q: textTrans.value,
        from: 'Auto',
        to: 'Auto',
    },
    success(data) {
      let = data;
      // alert(data.web[0].key)
      var str = ''
      var str1 = ''
      var str2 = ''
      str = data.translation ? data.translation.join(', ') : data.translation
      if (data.web && Array.isArray(data.web) && data.web.length > 0) {
        str1 = '<div class="line"></div><div style="margin-top:25px">与“'+textTrans.value+'”相关'+'</div>'
        data.web.map(ele => {
          str2 += '<h4>'+ ele.key +'</h4>'+'<div style="text-indent:2em">'+ ele.value.join(', ') +'</div>'
        })
      }
      trnsContent.innerHTML = '<h4>'+ textTrans.value +'</h4>'+'<div style="text-indent:2em">'+ str +'</div>'+str1+str2
    },
    error() {alert('翻译出错了');}
  });
}
// $('#translate').bind('keyup', function(event) {
//   　　if (event.keyCode == "13") {
//   　　　　//回车执行查询
//   　　　　trans()
//   　　}
//   });
// $('#translate').bind('keyup', function(event){
//   console.log(event.keyCode)
//   if (event.keyCode == '13') {

//     trans()
//   }
// })
translate.onclick = function(){
  trans()
}