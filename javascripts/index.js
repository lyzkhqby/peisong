/**
 * Created by rotoosoft-d04 on 2017/2/13.
 */
var itemsData = [
    {name: '餐盒', price: '1.00'},
    {name: '碗盒', price: '2.00'},
    {name: '筷子', price: '3.00'},
    {name: '勺子', price: '4.00'},
    {name: '纸巾', price: '5.00'},
    {name: '瓶子', price: '6.00'},
    {name: '锅', price: '7.00'}
]

var vm = new Vue({
    el: "#index",
    data: {
        products: itemsData,
        myLocation: "请等待定位.."
    }

})

var map, geolocation;
//加载地图，调用浏览器定位服务
map = new AMap.Map('container');
map.plugin('AMap.Geolocation', function() {
    geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大

    });
    geolocation.getCurrentPosition();
    AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
    AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
});
//解析定位结果
function onComplete(data) {
    var lnglatXY = [];//已知点坐标
    lnglatXY.push(data.position.getLng());
    lnglatXY.push(data.position.getLat());



    getRealAddress(lnglatXY);

    function getRealAddress(lnglatXY) {
        var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: "all"
        });
        geocoder.getAddress(lnglatXY, function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                geocoder_CallBack(result);
            }else {
                vm.myLocation = '经度：'+ lnglatXY[0] + '纬度' +lnglatXY[1];
            }
        });
    }

    function geocoder_CallBack(data) {
        vm.myLocation = data.regeocode.formattedAddress; //返回地址描述
    }
}
//解析定位错误信息
function onError(data) {
    vm.myLocation = '定位失败，请点击定位按钮';
}







