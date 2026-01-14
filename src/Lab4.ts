// BÀI 1
type Student = {
  id: number;
  name: string;
  score: number;
};

const student1: Student = {
  id: 1,
  name: 'Tú',
  score: 8.5
};

console.log('Student:', student1);

// BÀI 2
interface User {
  id: number;
  email: string;
  phone?: string;
}

const user1: User = {
  id: 1,
  email: 'tu@gmail.com'
};

const user2: User = {
  id: 2,
  email: 'an@gmail.com',
  phone: '0123456789'
};

console.log('User 1:', user1);
console.log('User 2:', user2);

// BÀI 3: 
type Calculate = (a: number, b: number) => number;

const add: Calculate = (a, b) => {
  return a + b;
};

const multiply: Calculate = (a, b) => {
  return a * b;
};

console.log('Add:', add(3, 4));
console.log('Multiply:', multiply(3, 4));

// BÀI 4:
type ApiStatus = 'idle' | 'loading' | 'success' | 'error';

function logStatus(status: ApiStatus): void {
  if (status === 'loading') {
    console.log('Đang tải...');
  } else if (status === 'success') {
    console.log('Thành công');
  } else if (status === 'error') {
    console.log('Có lỗi xảy ra');
  }
}

logStatus('loading');
logStatus('success');
logStatus('error');
