// const goods = [
//     { title: 'Shirt', price: 150 },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 251 },
//   ];

//   const goodsBlock = document.querySelector('.goods-list');
  
//   const renderGoodsItem = (title = 'title', price = 0) => {
//     return `<div class="goods-item"><h3>${title}</h3><p>${price}</p><button class="item-button" type="button">Купить</button><img src="" alt=""></div>`;
//   };
  
//   const renderGoodsList = (list) => {
//     return  list.map(item => renderGoodsItem(item.title, item.price)).join(' ');
//     // return goodsList;
//     // goodsBlock.innerHTML = goodsList;
//   }
  
//   goodsBlock.innerHTML = renderGoodsList(goods);
const image = 'https://placehold.it/200x150';

class GoodsItem {
  constructor(title, price, id, img) {
    this.title = title;
    this.price = price;
    this.id = id;
    this.img = img;
  }
  render() {
    return `<div class="goods-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div>
                <h3>${this.title}</h3>
                <p>${this.price} $</p>
                <button class="item-button" 
                  data-id="${this.id}"
                  data-name="${this.title}"
                  data-image="${this.img}"
                  data-price="${this.price}">Купить</button>
              </div>
            </div>`;
    
  }
}


class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
      { title: 'Notebook', price: 1000, id:0, img: image},
      { title: 'Display', price: 200, id:1, img: image },
      { title: 'Keyboard', price: 20, id:2, img: image },
      { title: 'Mouse', price: 10, id:3, img: image },
    ];
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
  sumItems() {
    let sum = 0;
    this.goods.forEach(good => {
      sum += parseInt(good.price);
    });
    console.log('sum: '+sum);
  }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.sumItems();

class CardItem extends GoodsItem {
  render() {
    return `<div data-id="${this.id}">
              <div>
                <img src="${this.img}" alt="Some image">
                <div>
                  <p>${this.title}</p>
                  <p>Кол-во: ${this.quantity}</p>
                  <p>$${this.price} each</p>
                </div>
              </div>
              <div>
                <p>${this.quantity * this.price}</p>
                <button data-id="${this.id}">&times;</button>
              </div>
            </div>`;
  }
}

class CardList {
  addProduct(product){
    let productId = +product.dataset['id'];
    let find = userCart.find (element => element.id === productId);
    if (!find) {
      userCart.push ({
        id: productId,
        img: cartImage,
        price: +product.dataset['price'],
        quantity: 1
      })
    } else {
      find.quantity++
    }
    renderCart ()
  }
  removeProduct (product) {
    let productId = +product.dataset['id'];
    let find = userCart.find (element => element.id === productId);
            if (find.quantity > 1) {
                find.quantity--;
            } else {
                userCart.splice(userCart.indexOf(find), 1);
                document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
            }
            renderCart ();
  }
  renderCart () {
      let allProducts = '';
      for (el of userCart) {
        allProducts += `<div  data-id="${el.id}">
                          <div>
                            <img src="${el.img}" alt="Some image">
                            <div>
                              <p>${el.name}</p>
                              <p>Quantity: ${el.quantity}</p>
                              <p>$${el.price} each</p>
                            </div>
                          </div>
                          <div>
                            <p>${el.quantity * el.price}</p>
                            <button  data-id="${el.id}">&times;</button>
                          </div>
                        </div>`
            }

            document.querySelector(`.cart-block`).innerHTML = allProducts;
  }
}



