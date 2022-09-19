{
  // Java: Exception
  // JavaScript: Error
  // const array = new Array(10000000000);

  // Error(Exception) Handling: try -> catch -> finally

  function readFile(filename: string): string {
    if (filename === 'not exist!') {
      throw new Error(`file not exist! ${filename}`);
    }
    return 'file contents';
  }

  function closeFile(file: string) {
    // 파일 닫기.
  }

  function run() {
    const fileName = 'not exist!';

    try {
      console.log(readFile(fileName));
    } catch(error) {
      console.log(`caught!!`);
    } finally {
      closeFile(fileName);
      console.log(`closed`);
    }
  }
  run();
}