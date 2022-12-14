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

  // unknown π© μ΄λ€ νμμ΄ μ¬μ§ λͺ¨λ₯Όλ.
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any π© λͺ¨λ  νμ
  let anything: any = 0;
  anything = 'hello';

  // void ν¨μμμ μλ¬΄κ²λ return νμ§ μμλ.
  function print(): void {
    console.log('hello');
  }
  let unusable: void = undefined; // π© λ³μμμλ μ¬μ©νμ§ μμ.

  // never ν΄λΉ ν¨μμμ returnμ μ λ νμ§μμλ.
  function throwError(message: string): never {
    throw new Error(message);
  }

  // object π©
  let obj: object = [3, 4];
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({name: 'song'});
  acceptSomeObject({animal: 'dog'});
  acceptSomeObject(() => {});
}