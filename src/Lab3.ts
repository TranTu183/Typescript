//1.
const tinhDiemTrungBinh = (toan: number, ly: number, hoa: number): number => {
  return (toan + ly + hoa) / 3;
};

console.log('Điểm TB:', tinhDiemTrungBinh(8, 7, 9));

// 2.
type CheckEvenOdd = (n: number) => boolean;

const isEven: CheckEvenOdd = (n: number) => {
  return n % 2 === 0;
};

console.log('Số 4 chẵn?', isEven(4));
console.log('Số 5 chẵn?', isEven(5));

// 3.
function createUser(
  name: string,
  age: number = 18,
  address?: string
): string {
  return `Tên: ${name}, Tuổi: ${age}, Địa chỉ: ${address ?? 'Chưa cập nhật'}`;
}

console.log(createUser('Tú'));
console.log(createUser('An', 20));
console.log(createUser('Minh', 22, 'Hà Nội'));


// 4
function handleProducts(...products: string[]): string[] {
  let newProducts = ['Sản phẩm mới', ...products];
  return newProducts;
}

let list1 = ['Áo', 'Quần'];
let list2 = ['Giày', 'Mũ'];

let allProducts = handleProducts(...list1, ...list2);
console.log('Danh sách sản phẩm:', allProducts);
