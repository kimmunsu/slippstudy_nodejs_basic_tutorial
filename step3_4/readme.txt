3_4에서는 requestHandler 에 보다 기능을 추가하여 각 url 호출의 action 에 대한 return value 로 text 문자를 return 하도록 하자.
그러기 위해서는 router 에서는 requestHandler 의 return 에 대해  server 로 그대로 넘겨줌으로서 router 로서의 역할에 충실하도록 해주자.
물론, router 가 길을 잃을 수 있는 부분에 대하여 대비책도 세워주자.
server 에서는 router 에서 넘어온 data 를 response 로 뿌려주도록 해보자.

이렇게 함으로 server 는 url 요청을 router 로 넘기고, router 는 요청에 해당하는 action 을 찾아 handler 를 호출하거나, handler 가 없다면 server 에게 잘못된 요청이었음을 알려주도록 할 수 있다.
server 는 router가 가져온 정보를 url 요청에 대한 response 로 사용자에게 알려줄 수 있다.

1. requestHandler.js 에서 return value 를 정의해준다.
2. router.js 에서 requestHandler 에서 return 한 value 를 server 에 다시 return 해줄 수 있도록 해준다.
   만약 handler 자체를 찾지 못할 경우 잘못된 요청임을 알려주도록 404 not found 를 return 해주자.
3. server 에서는 router 에서 넘어온 data를 바탕으로 response 출력을 하도록 한다.

step 4 에서 얘기하겠지만, 이 방식은 ryan dahl 이 고안한 nodejs 의 디자인에 어긋나는 디자인이다.
blocking 과 non-blocking 의 차이점에서 비롯되는 이 문제는 step 4 에서 다루도록 한다.
