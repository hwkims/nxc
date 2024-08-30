function onStartInfaceAuth() {
  // 사용자 작업을 여기에서 수행 할 수 있습니다.
  // console.log('onStartInfaceAuth inface 호출 이후', inface.auth);
  // const isSignedIn = inface.auth.isSignedIn();
  //
  // // console.log('로그인 여부', isSignedIn);
  // if (!isSignedIn) {
  //   const pathname = window.location.pathname;
  //
  //   switch (pathname) {
  //     case '/reservation/result/1':
  //       window.alert('로그인이 필요합니다');
  //       inface.auth.gotoSignIn();
  //       break;
  //   }
  // }
}

function onErrorInfaceAuth(error) {
  // 자바스크립트 SDK 초기화 실패시 호출됩니다.
  // console.error('onErrorInfaceAuth', error);
  // {code: 113002, name: "FAIL_TO_INIT", message: "초기화를 실패했습니다.", data: TypeError: _content...}
}
