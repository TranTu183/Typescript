
enum Rate {
  low = 'Thấp',
  medium = 'Trung bình',
  hight = 'Cao'
}

type Product = {
  name: string;
  price: number;
  sale: boolean;
  rate: Rate;
  description?: string;
};


let listProducts: Product[] = [
  { name: 'Áo thun', price: 4, sale: true, rate: Rate.low },
  { name: 'Quần jean', price: 7, sale: true, rate: Rate.medium },
  { name: 'Giày thể thao', price: 10, sale: false, rate: Rate.hight },
  { name: 'Mũ lưỡi trai', price: 3, sale: true, rate: Rate.medium },
  { name: 'Áo khoác', price: 12, sale: true, rate: Rate.hight }
];


listProducts = listProducts.map(p => {
  p.description = p.price > 5 ? 'Tốt' : 'Bình thường';
  return p;
});


console.log('Danh sach');
listProducts.forEach(p => {
  console.log(
    'Tên:', p.name,
    '| Giá:', p.price,
    '| Sale:', p.sale,
    '| Đánh giá:', p.rate
  );
});


let totalPrice = listProducts.reduce((sum, p) => sum + p.price, 0);
console.log('Tổng giá bán:', totalPrice);


let saleProducts = listProducts.filter(
  p => p.sale && (p.rate === Rate.medium || p.rate === Rate.hight)
);

console.log('sale');
saleProducts.forEach(p => {
  console.log(p.name);
});
