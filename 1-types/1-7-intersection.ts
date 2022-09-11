{
  /**
   * Intersection Types: &
   * 다양한 Type을 하나로 묶어서 사용.
   */
  type Student = {
    name: string;
    score: number;
  };
  
  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function interWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }
  interWork({
    name: 'song',
    score: 1,
    employeeId: 123,
    work: () => {},
  })
}