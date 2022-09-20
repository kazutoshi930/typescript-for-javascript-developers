export {};

let name: any = 'Ham';

// let length = (<string>name).length;
// let length = (name as string).length;
let length = name.length as number;

// length = 'foo';