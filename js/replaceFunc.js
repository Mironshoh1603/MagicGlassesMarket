module.exports = function (html, obj) {
  let out = html.replace("{ProductID}", obj.id);
  out = out.replace("{ProductName}", obj.productName);
  out = out.replace("{ProductPrice}", obj.price);
  out = out.replace("{ProductSold}", obj.sold);
  return out;
};
