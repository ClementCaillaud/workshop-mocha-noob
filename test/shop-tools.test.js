var expect = require('chai').expect;
var shop_tools = require('./../src/shop-tools.js');

describe('Tests de shop-tools', function()
{
  it('Liste des prix', function()
  {
    expect(shop_tools.getPrices()).to.eql({ banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 });
  })
});
