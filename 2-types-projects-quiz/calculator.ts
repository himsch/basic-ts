{
  type Command = 'add' | 'subtract' | 'multiply' | 'divide' | 'remainder';
  function calculator(command: Command, x: number, y: number): number {
    switch (command) {
      case 'add':
        return x + y;
      case 'subtract':
        return x - y;
      case 'multiply':
        return x * y;
      case 'divide':
        return x / y;
      case 'remainder':
        return x % y;
    }
  }
}