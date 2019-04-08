require.config({
    paths: {
        'mui': 'mui.min'
    }
})
require(['mui'], function(mui) {
    var wancheng = document.querySelector('.wancheng');
    var inp = document.querySelectorAll('input');
    wancheng.addEventListener('click', function() {
        mui.ajax('/api/charu', {
            data: {
                name: inp[0].value,
                tel: inp[1].value,
                dizhi: inp[2].value,
                juti: inp[3].value
            },
            dataType: 'json', //服务器返回json格式数据
            type: 'post', //HTTP请求类型
            timeout: 10000, //超时时间设置为10秒；
            success: function(data) {
                console.log('成功')
                window.location.href = 'index.html'
            },
            error: function(xhr, type, errorThrown) {

            }
        });
    })
})