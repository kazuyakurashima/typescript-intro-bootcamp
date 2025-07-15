type Item = {
  name:string;
  price:number;
  taxRate?:number;//?はあってもなくてもOKという意味
}

const items: Readonly<Item[]> = [
  {name:"りんご",price:100},
  {name:"バナナ",price:150,taxRate:0.08},
  {name:"みかん",price:200}
];

function total(items:readonly Item[]):number{
  return items.reduce((sum,item) => {
    const rate = item.taxRate ?? 0.1;//taxRateが無ければ0.1にする
    return sum + item.price * (1+rate);
  },0);
}

console.log(`合計金額：${total(items)}円`);