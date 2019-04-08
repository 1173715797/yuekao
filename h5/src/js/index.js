require.config({
    paths: {
        'mui': 'mui.min'
    }
})
require(['mui'], function(mui) {
    var tianjia = document.querySelector('.tianjia');

    function init() {
        chazhao()
        shanchu()
        gai()
    }

    function chazhao() {
        mui.ajax('/api/chazhao', {
            data: {

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
            },
            error: function(xhr, type, errorThrown) {

            }
        });
    }

    function shanchu() {
        var del = document.querySelector('.del');
        var ind = document.querySelector('#del');
        del.addEventListener('click', function() {
            mui.ajax('/api/shanchu', {
                data: {
                    name: ind.value
                },
                dataType: 'json', //服务器返回json格式数据
                type: 'post', //HTTP请求类型
                timeout: 10000, //超时时间设置为10秒；
                success: function(data) {
                    console.log('成功');
                },
                error: function(xhr, type, errorThrown) {

                }
            });
            mui.alert('确定删除？', '提示', '确定', function(e) {
                window.location.href = 'index.html'
            }, 'div')
        })

    }

    function gai() {
        var gai = document.querySelector('.gai');
        var ind = document.querySelector('#del');
        gai.addEventListener('click', function() {
            mui.ajax('/api/shanchu', {
                data: {
                    id: ind.value.id
                },
                dataType: 'json', //服务器返回json格式数据
                type: 'post', //HTTP请求类型
                timeout: 10000, //超时时间设置为10秒；
                success: function(data) {
                    window.location.href = 'gai.html'
                    console.log('成功');
                },
                error: function(xhr, type, errorThrown) {

                }
            });
        })
    }

    tianjia.addEventListener('click', function() {
        window.location.href = 'add.html'
    })
    init()
})