var productData = [
  {
    id: 1,
    name: 'table'
  },
  {
    id: 2,
    name: 'chair'
  }
];

Vue.component('product', {
  template: '#product-list-temp',
  data: function() {
    return {
      products: productData
    }
  },
  methods: {
    deleteCurrentItem: function(id) {
      var prd = this.products.filter(function(p) {
        return p.id !== id
      });
      this.products.splice(0);
      if (prd.length) {
        for (let index = 0; index < prd.length; index++) {
          const element = prd[index];
          this.products.push(element);
        }
      }
    }
  }
})

var app = new Vue({
  el: '#app'
});

document.querySelector('#addProduct').addEventListener('click', function() {
  var inputCntrl = document.querySelector('#newProduct');
  console.log('in click', inputCntrl.value);
  productData.push({
    id: productData.length + 1,
    name: inputCntrl.value
  });
  inputCntrl.value = '';
})