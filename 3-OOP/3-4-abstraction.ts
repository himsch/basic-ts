{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOTS: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBean(beans: number) {
      if (beans < 0) {
        throw new Error(`value for beans should be greater than 0`);
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`griding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOTS) {
        throw new Error(`Not enough coffee beans!`);
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOTS;
    }

    private preheat(): void {
      console.log(`heating up...`);
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots....`);
      return {
        shots,
        hasMilk: false,
      }
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker: CoffeeMaker = CoffeeMachine.makeMachine(32);
}