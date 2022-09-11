{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function array ...
   */

  // number
  const num: number = 6;

  // string
  const str: string = '';

  // boolean
  const bool: boolean = true;

  // undefined
  let name: undefined;
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null;
  let person2: string | null;
  person = null;
  person2 = '1';
}

{
  /**
   * TypeScript
   * types: unknown, any, void, never, object
   */

  // unknown 💩 어떤 타입이 올지 모를때.
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 💩 모든 타입
  let anything: any = 0;
  anything = 'hello';

  // void 함수에서 아무것도 return 하지 않을때.
  function print(): void {
    console.log('hello');
  }
  let unusable: void = undefined; // 💩 변수에서는 사용하지 않음.

  // never 해당 함수에서 return을 절대 하지않을때.
  function throwError(message: string): never {
    throw new Error(message);
  }

  // object 💩
  let obj: object = [3, 4];
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({name: 'song'});
  acceptSomeObject({animal: 'dog'});
  acceptSomeObject(() => {});
}