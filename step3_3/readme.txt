3_2에서 router 인 척 하는 녀석을 통해 url 을 다루는 route 구현이 가능함을 알았으니
어떠한 url 이 올지를 정의 하여 router 에게 알려주자.

어떠한 url 이 올지에 대한 정의에 대해서는 사람마다 여러 생각을 할 수 있겠다.
여기서는 그에 대한 정의를 index.js 에서 하도록 한다.
여기서의 각 모듈의 방향은
server 는 url parsing 만 잘하면 되고.
router 는 parsing 된 url 을 통하여 action 만 잘 취해주면 된다.

우리는 각각의 url 로 부터 action 을 기대하지만.
현재 우리는 아직 시스템이 완벽하지 않은 웹서버를 개발중에 있고, router 의 기능에 대해 집중하기 위해
심플한 request handler 를 만들어 router 에 집중하도록 하자.

두번째 문단에서 말하지 않은 새로이 추가될 모듈인 request handler 의 방향은 url 매핑시에 따르는 action 에 대한 정의이다.

1. action 을 취하도록 할 심플한 requestHandler.js 모듈을 구현한다.
   action 에 대한 함수를 만들고 그 함수를 exports 에 정의해준다.
2. index.js 에서 requestHandler.js 를 참조한다.
3. 어떤 url 을 다룰지 미리 정의하는 handle 이라는 배열을 index.js 에서 정의하고, 각 원하는 url 을 key 로, action에 해당하는 requesthandler 의 함수를 value 로 정의하여 배열에 추가한다.
4. server와 router에 handle 을 매개변수로 추가하고, router 에서는 url 과 handle 배열의 key 와 매칭을 따져 매칭이 된다면 그에 따른 value 를 꺼내어 action 을 취하도록 한다.
