export {};

// * owner
//   * 所有者
//   * 初期化時に設定
//   * 途中変更不可
//   * 参照可能
// * secretNumber
//   * 個人番号
//   * 初期化時に設定
//   * 途中変更可能
//   * 参照不可

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number; 

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

// getter：参照可能、途中変更不可
  get owner() {
    return this._owner;
  }

// setter：参照不可のまま、途中変更可能
  set secretNumber(secretNumber:number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('はむさん', 1234567890);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());
// card.owner = 'Ham';
console.log(card.owner);
// card.secretNumber;
// card._secretNumber;
console.log(card.secretNumber);
