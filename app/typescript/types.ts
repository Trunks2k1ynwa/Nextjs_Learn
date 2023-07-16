// Interface : object,parameter(object)
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: 'Hai',
  id: 23,
};
console.log('🚀 ~ user:', user);

// Composing Types : Sáng tác các types
// Unions : khai báo type thuộc 1 hoặc nhiều type khác

type age = 'male' | 'felmale';
type author = 'admin' | 'user' | 23 | 'sale' | string[];
const huong: age = 'male';
console.log('🚀 ~ age:', huong);
function getType(account: author) {
  console.log('🚀 ~ account:', account);
}
getType(['name', 'user']);

// Generics : Cung câp biến cụ thể cho types nào đó, ví dụ type cho từng giá trị trong 1 array
type stringArray = Array<string>;
type stringNumber = Array<number>;
type objectWithNameArray = Array<{ name: string }>;
let products: stringArray = ['sfà', 'sdà', 'ầd', '242'];
// let products: string[] = ['sfà', 'sdà', 'ầd', 'sdf'];
let numbers: stringNumber = [24, 35, 243];
let objsName: objectWithNameArray = [{ name: 'Strung' }, { name: 'ngan' }];
console.log('🚀 ~ products:', products, numbers, objsName);
