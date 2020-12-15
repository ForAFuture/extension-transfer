(function() {
  // console.log('进入测试')
  $.ajax({
    url: 'https://aidemo.youdao.com/trans',
    type: 'post',
    dataType: 'json',
    data: {
        q: '我',
        from: 'Auto',
        to: 'Auto',
    },
    success(data) {
      let = data;
      // console.log(data)
    },
    error() {console.log('翻译出错了');}
  });
})();