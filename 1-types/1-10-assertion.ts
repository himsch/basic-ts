{
  /**
   * Type Assertions π©
   * κ°μ ν νμμ΄ λ€λ₯Ό κ²½μ° μ΄νλ¦¬μΌμ΄μμ΄ μ’λ£λ¨.
   */
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);
}

{
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // π±

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  // const numbers = findNumbers()!;
  numbers!.push();

  // μ€μ  Example
  const button = document.querySelector('class');
  // button!.nodeValue;
  if (button) {
    button.nodeValue;
  }
}