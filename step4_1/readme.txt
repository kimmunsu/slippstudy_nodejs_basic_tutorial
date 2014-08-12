step3 을 지나오면서 nodejs 웹서버는 router 와 requesthandler를 가진 server 가 되었고, 사람이 읽기 쉬운 코드가 되기 위해 index.js 라는 welcome 페이지를 갖추게 되었다.
제법 그럴싸하게 되었지만, 이는 우리가 nodejs(javascript) 의 특징을 잘 활용하지 못한 웹서버가 되었다.
멀티쓰레딩을 지원하는 웹서버에서는 별 문제가 없을 이러한 코딩은 싱글쓰레딩으로 request 를 처리하는 nodejs 에서는 심각한 문제를 가져다준다.

무엇이 문제일까?
어떤 문제가 있을지, 우리 프로그래머들은 코드로 답을 찾아보자.

우선 requestHandler 를 수정하여 return 을 늦게해보자. (우린 step3_4에서 requestHandler 에서 start(), upload() 두 함수에 return value 코드를 삽입하였다.)
참, server.js 에서 쓰레드를 슬립시키지 않고 왜 requestHandler 에서 return value 앞에서 이러냐고 묻는다면.
우리는 2개의 url 에 대한 반응으로 2개의 함수를 각각으로 구현하였고, 이를 활용함이 보다 더 직관적으로 이해를 도울 수 있겠다는 판단하에서이다.
그리고 javascript 에서는 java 같은 언어의 sleep() 이 없다.

1. requestHandler.js 의 start() 함수에 sleep() 함수를 구현하고 return 에 앞서 sleep 10초를 해보자.
2. 그리고 이번엔 서버를 실행하고 직접 상황을 지켜보자.
   우선 localhost:8888/start 를 접속하고 아주 재빨리 localhost:8888/upload 에 접속해보자.

차이점을 이해하겠나?
우리의 멀티쓰레딩 환경에선 start 가 느린건 이해하지만 upload 가 느린건 이해가 가질 않는 일이다.
nodejs 는 싱글쓰레딩으로 작동함을 우린 지금 피부로 느끼고 있다.
또한, 우리의 코드가 얼마나 심각한 문제를 야기시킬 수 있는지도 뼈마디로 느끼고있다.
다행히 우린 지금 현업에서 이렇게 코드를 작성하고 있지 않고 공부를 하며 우리의 코드가 얼마나 무시무시한 문제를 가진 코드인지 미리 경험하였다.

ryan dahl 은 nodejs 설계시에 non-blocking 을 이해하고 설계하였다.
blocking 과 non-blocking 은 처리후 응답과 우선 응답이다.
(한국의 컴퓨터 언어 서적에서 말하는 봉쇄,비봉쇄가 blocking 과 non-blocking 을 뜻하니 참고하면 좋겠다.)
blocking 에서는 client 에서 data 요청 호출할 경우 server 에서는 IO에 data를 요청, IO가 data를 건네주면 그제야 data와 함께 응답을 한다.
non-blocking 에서는 client 에서 data 요청 호출할 경우 server 에서는 IO에 data를 요청에 따른 준비를 하고 바로 이어 준비중이라고 client 에 응답하고 client 는 다시 재요청을 하며 server 는 다시 준비중을 응답, 이를 반복하다가 IO가 data 를 server 에 건네준 이후에 client 에서 재요청이 들어오면 server 에서는 data 와 함께 응답을 한다.

blocking 과 non-blocking 에 대해서 동기, 비동기 개념을 묶어 생각하면 곤란한 점은 바로 위 non-blocking 에서 알 수 있다.
client 에서 server 로 의미없어보이는 loop 로 CPU 가 정말 바쁘게 움직이는 일이 생긴다. (OS 에서 이를 잘못 설계하면 busy-waiting 에 빠질 수 있다.)
이를 잘 다루기 위해서는 non-blocking 의 server 에서 준비중 return 이 올 경우에 대한 적절한 client 의 처리가 필요하다.

잠시, 열심히 검색과 아주 오래전 컴퓨터 구조 학습을 열심히 했다는 것을 알리기 위해 다른 얘기를 했는데 더 깊이 있는 얘기는 피하는 것으로 하고.
nodejs 은 non-blocking IO 모델을 기반으로 설계되었다.
별 의미없어 보이는 loop 는 nodejs 의 event loop 가 그 역할을 수행하고 있고 event loop 는 request 들이 들어오게 되면 이것들을 차례로 event table 에 올려둔다.
그럼 이 event table 에 놓인 event 들은 각 처리할 객체가 가져가서 처리하는데 이 동안 event loop 는 event table 에서 처리가 끝난 event 가 있는지 loop 를 돌며 감시하게 된다.

이제 우리는 코드를 작성할 때에 함수로 연결시키지 말고 분리하여야 하는 이유를 이해해가고 있다.
이때, 이 분리가 무얼까? javascript 의 마술. callback 이다.

길게도 아는 척을 했는데 본인도 코드를 봐야 이해가 되므로 이제 코드로 넘어가보자.