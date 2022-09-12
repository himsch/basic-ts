{
  /**
   * Enum
   * 여러가지 관련된 상수앖을 한 곳에 모아서 정의하는 방법.
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 1;
  // 🚫 Enum 으로 타입이 지정된 변수에 다른 어떠한 숫자도 할당이 가능한 문제!
  day = 100;
  console.log(day);
  // ✅ Enum 대신 Union type 을 사용하는 편이다.
  type dayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let dayOfWeek: dayOfWeek = 'Monday';
  dayOfWeek = 'Tuesday';
}