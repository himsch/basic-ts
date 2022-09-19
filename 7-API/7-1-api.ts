{
  // https://github.com/microsoft/TypeScript/blob/main/lib/lib.es5.d.ts#L1287
  Array;
  [1, 2].map(() => {});

  /**
   * 2가지 방법의 every API 사용하기.
   */
  type Student = {
    passed: boolean;
  };
  const students: Student[] = [{ passed: true }, { passed: false }, { passed: true }];
  const result = students.every(student => student.passed);
  console.log(result);

  class Animal {}
  class Cat extends Animal {
    isCat: boolean = true;
  }
  class Dog extends Animal {
    isDog: boolean = true;
  }
  const animals: Animal[] = [new Cat(), new Cat(), new Cat()];
  function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isCat !== undefined;
  }
  console.log(animals.every<Cat>(isCat));
}