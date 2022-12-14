{
  // JavaScript ๐ฉ
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript โจ
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript ๐ฉ
  function jsFetchNum(id) {
    // @ts-ignore
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript โจ
  // Promise<number> : Promise ๋ฅผ return ํ๋๋ฐ, ๊ทธ ๊ฒฐ๊ณผ ๊ฐ์ number type.
  function fetchNum(id: string): Promise<number> {
    // @ts-ignore
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
}

{
  // Optional parameter => ? undefined
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName('song', 'hong');
  printName('song');
  printName('song', undefined);
}

{
  // Default parameter
  function printMessage(message: string = 'default parameter') {
    console.log(message);
  }
  printMessage();
}

{
  // Rest parameter
  // number[] : number ํ์์ ๋ฐฐ์ด
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1,2,3));
}