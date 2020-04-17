const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
  ];

  const goodsBlock = document.querySelector('.goods-list');
  
  const renderGoodsItem = (title = 'title', price = 0) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p><button class="item-button" type="button">Купить</button><img src="" alt=""></div>`;
  };
  
  const renderGoodsList = (list) => {
    return  list.map(item => renderGoodsItem(item.title, item.price)).join(' ');
    // return goodsList;
    // goodsBlock.innerHTML = goodsList;
  }
  
  goodsBlock.innerHTML = renderGoodsList(goods);