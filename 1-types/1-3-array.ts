{
  // Array
  const fruits: string[] = ['tomato', 'banana', 'apple'];
  const scores: Array<number> = [80, 100, 10, 20];
  function printArray(fruits: readonly string[]) {}

  // Tuple π© -> interface, type alias, class λ± μΌλ‘ λμ²΄νμ.
  // λ°°μ΄μ μμλ€μ νμμ΄ λ€λ₯Ό κ²½μ° ννμ΄λΌκ³  νλ€.
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  // Object Destructuring Assignment
  const [name, age] = student;
}