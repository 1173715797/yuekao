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
                name: id.name,
                tel: id.tel,
                dizhi: id.dizhi,
                juti: id.juti
            },
            dataType: 'json', //服务器返回json格式数据
            type: 'post', //HTTP请求类型
            timeout: 10000, //超时时间设置为10秒；
            success: function(data) {
                var str = '';
                data.data.forEach(function(item) {
                    str += `
				<ul class="dizhi-one">
				<li><span>${item.name}</span><span>${item.tel}</span></li>
                <li>${item.dizhi}</li>
                <li>${item.juti}</li>
                <li>
                    <span>设为默认</span>
                    <span>删除</span>
                    <span>修改</span>
				</li>
				</ul>
				`
                })
                document.querySelector('.dizhi').innerHTML = str;
                console.log('成功')
                window.location.href = 'index.html'
            },
            error: function(xhr, type, errorThrown) {

            }
        });
    })
})