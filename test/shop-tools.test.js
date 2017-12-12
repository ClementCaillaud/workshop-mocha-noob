var expect = require('chai').expect;
var shop_tools = require('./../src/shop-tools.js');

describe('Function getPrices()', function()
{
  it('Expect to return the correct object', function()
  {
    expect(shop_tools.getPrices()).to.eql({ banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 });
  })
});
