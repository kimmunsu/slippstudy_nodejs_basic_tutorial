3_1 에서는 url path 를 출력하는 코드를 onRequest 에 넣었다.
이를 통해 우린 url path 를 파싱할 수 있었으므로 우리가 직접 router를 구현하여
우리가 원하는 서비스를 제공할 수 있음을 알 수 있다.

그럼 임시로 router 인 척 하는 녀석을 구현해보자.
router 에서 우리가 원하는 대로 결과를 return 할 수 있지만,
조금 더 코드를 우아하게 작성하는게 우리의 태생적 성격이므로
router 에서 다룰 request handler 도 작성을 할 예정이다.

우선 여기서는 router 인 척 하는 녀석까지만 구현을 한다.

1. url path를 매개변수를 가진 route라는 함수를 작성하여 exports에 정의하도록하는 router.js 파일을 만든다.
2. onRequest() 함수에 route 매개변수를 받도록 하고 url path 를 route 함수에 매개변수로 넣어 route함수를 호출한다.
3. index.js 에서 router 를 참조하도록 하고 start 시에 참조한 router의 route 함수를 매개변수로 주입하여준다.