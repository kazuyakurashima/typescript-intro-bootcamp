// typeは;で区切る
var items = [
    { name: "りんご", price: 100 },
    { name: "バナナ", price: 150, taxRate: 0.08 },
    { name: "みかん", price: 200 }
];
function total(items) {
    return items.reduce(function (sum, item) {
        var _a;
        var rate = (_a = item.taxRate) !== null && _a !== void 0 ? _a : 0.1;
        return sum + item.price * (1 + rate);
    }, 0);
}
console.log('合計金額:${total(items)}円');
