// 제네릭 적용 전.
{
  // either: a or b
  interface Either {
    left: () => number;
    right: () => number;
  }

  class SimpleEither implements Either {
    constructor(private leftValue: number, private rightValue: number) {
    }
    left(): number {
      return this.leftValue;
    }
    right(): number {
      return this.rightValue;
    }
  }

  const either = new SimpleEither(4, 5);
  either.left();
  either.right();
}

// 제네릭 적용 후.
{
  interface Either<L, R> {
    left: () => L;
    right: () => R;
  }

  class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) {
    }
    left(): L {
      return this.leftValue;
    }
    right(): R {
      return this.rightValue;
    }
  }

  const either: Either<number, number> = new SimpleEither(4, 5);
  either.left();
  either.right();
  const best: Either<number, string> = new SimpleEither(4, 'hello');
}