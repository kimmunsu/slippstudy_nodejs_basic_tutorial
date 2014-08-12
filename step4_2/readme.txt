step4_1 에서 길게도 non-blocking 에 대해서 알아보았다.
이제 직접 non-blocking 에 대해 이해하고 코드를 작성해보자.

우선 server.js 를 수정하여 requestHandler 에서 직접 response 를 작성하여 non-blocking 스타일의 코드를 이해하기 쉽게 해보자.
requestHandler 에서 response 를 직접 다룬 다는 부분에서 우린 router 를 그냥 지나칠 수 없다.
router 에서는 requestHandler 에서 다룰 수 없는 request 에 대하여 404 not found 를 return 해주고 있었으니 이를 return 이 아니라 직접 response 에 작성하도록 router 도 수정하자.
requestHandler 에서 non-blocking 지원 함수인 exec() 를 통하여 비싼 작업이라고 하는 작업을 수행하도록 해준다.

1. server.js 를 수정하여 route 함수 호출시점에 response 를 넘겨준다.
2. router.js 를 수정하여 404 not found 를 직접 response 에 write 해준다.
3. requestHandlers.js 를 수정하여 response write 를 해도록 해주고, start 함수에는 exec() 함수를 이용한 비싼 작업을 수행토록 한다.
4. step3_4 때와 마찬가지로 /start 를 호출하고 바로 재빨리 /upload 를 호출해주자.

사실 비싼 작업을 본인이 찾지를 못하겠어서 아... 그렇구나.. 하고 이해하고 넘어가고 있다.
여러분은 무척 비싼 작업을 수행할 수 있기를 바랍니다.