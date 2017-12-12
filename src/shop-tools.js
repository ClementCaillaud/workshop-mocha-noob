exports.getPrices = function ()
{
  return{
    "banana": 1,
    "potato": 2,
    "tomato": 3,
    "cucumber": 4,
    "salad": 5,
    "apple": 6
  };
}

exports.countArticles = function(products)
{
    return products.length;
}
