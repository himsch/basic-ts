{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // @ts-ignore
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript ✨
  // Promise<number> : Promise 를 return 하는데, 그 결과 값은 number type.
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
  // number[] : number 타입의 배열
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1,2,3));
}