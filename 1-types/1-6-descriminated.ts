/**
 * Discriminated Union Type
 * 공통적인 property 를 만들어 구분하기 쉽게 사용하는 방법.
 */
{
  // function: login -> success, fail
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    }
  }
  type FailState = {
    result: 'fail';
    reason: string;
  }
  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): SuccessState {
    return {
      result: 'success',
      response: {
        body: 'logged in',
      }
    };
  }

  // printLoginState(state: LoginState)
  // success -> body
  // fail -> reason
  function printLoginState(state: LoginState): void {
    if (state.result === 'success') {
      console.log(`${state.response.body}`);
    } else {
      console.log(`${state.reason}`);
    }
  }
}