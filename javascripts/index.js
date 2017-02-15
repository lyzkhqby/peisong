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



new Vue({
    el: "#index",
    data: {
        products: itemsData
    }
})