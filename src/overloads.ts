export {};

//シグネチャー
function double(value: number): number;
function double(value: string): string;

// any型にする、実態の方では型制約必要なし
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));
// console.log(double(true));
