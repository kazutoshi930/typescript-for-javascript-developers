export {};

let name = 'Atsushi';

name = 'Ham';

let nickname = 'Ham' as const;
nickname = 'Ham';

// as const を書くことで readonly になる
let profile = {
  name: 'Atsushi',
  height: 178 
} as const;

// profile.name = 'Ham';
// profile.height = 180;
