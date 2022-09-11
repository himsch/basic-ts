{
  // Array
  const fruits: string[] = ['tomato', 'banana', 'apple'];
  const scores: Array<number> = [80, 100, 10, 20];
  function printArray(fruits: readonly string[]) {}

  // Tuple 💩 -> interface, type alias, class 등 으로 대체하자.
  // 배열안 원소들의 타입이 다를 경우 튜플이라고 한다.
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  // Object Destructuring Assignment
  const [name, age] = student;
}