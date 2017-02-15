/**
 * Created by rotoosoft-d04 on 2017/2/14.
 */
var itemsData = [
                    {id:'1', name: '餐盒', price: '1.10', isChoiced: false, count: 1},
                    {id:'2', name: '碗盒', price: '5.00', isChoiced: false, count: 1},
                    {id:'3', name: '筷子', price: '3.00', isChoiced: false, count: 1},
                    {id:'4', name: '勺子', price: '4.00', isChoiced: false, count: 1},
                    {id:'5', name: '纸巾', price: '5.00', isChoiced: false, count: 1},
                    {id:'6', name: '瓶子', price: '6.00', isChoiced: false, count: 1},
                    {id:'7', name: '锅盖', price: '7.00', isChoiced: false, count: 1}
                ]

new Vue({
    el: "#cart",
    data: {
        products: itemsData,
        totalPrice: 0,
        allChoiced: false
    },
    methods: {
        choice: function (product) {
            if (!product.isChoiced) {
                this.allChoiced = false;
            }else {
                var isAll = true;
                this.products.forEach(function (product) {
                    if (!product.isChoiced) isAll = false;
                })
                if (isAll) this.allChoiced = true;
            }

        },

        choiceAll: function (event) {
            if (this.allChoiced) {
                this.products.forEach(function (product) {
                    product.isChoiced = true;
                })
            }else {
                this.products.forEach(function (product) {
                    product.isChoiced = false;
                })
            }

        },
        add: function (product) {
            product.count++;

        },
        minus: function (product) {
            if (product.count == 1) {
                alert('数量至少为1');
            }else {
                product.count--;

            }
        },
        delProduct: function(index) {

            this.products.splice(index, 1);

        }
    },
    computed: {
        calcTotalPrice: function () {
            var tPrice = 0;
            this.products.forEach(function (product, index) {
                if (product.isChoiced) {
                    tPrice += parseFloat(product.price) * product.count;
                }
            })
            return tPrice.toFixed(2);
        },
    }
})