{
  /**
   * Getter Setter
   * 게터와 세터는 멤버변수처럼 사용이 가능하지만, 어떠한 계산을 해야할때 좀 더 유용하게 사용 할 수 있다.
   * 게터와 세터를 사용하면 조금 더 다양한 계산을 할 수 있고, 유효성 검사를 할 수 있다.
   */
  class User {
    // get,set 키워드를 사용하면 함수형태가 되지만, 사용할때는 아래와같이 맴버변수처럼 사용해야함.
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error(`나이는 0보다 작을 수 없다.`);
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  const user = new User('song', 'hong');
  // setter 호출
  user.age = 6;
  // getter 호출
  console.log(user.fullName);
}