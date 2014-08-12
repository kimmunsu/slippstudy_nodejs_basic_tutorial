spte2 웹서버는 어떠한 url 이 넘어와도 도메인이 같다면(물론 포트도) hello world 만 출력한다.
우리가 일반적으로 알고 있는 웹서버는 이렇게 멍청한 녀석이 아니고, 우리가 하려는 것도 그건 아니다.
url path 와 http method 에 따라 각기 다른 return 이 필요하다.
일반적으로 우린 그걸 route 라고 표현하며, 많은 웹서버가 이러한 route 를 지원하고 있다.
step2 에서 모듈화시킨 server.js 에 추가적인 작업으로 router 를 구현해보자.

1. url path 와 query string 을 파싱할 수 있는 url 모듈을 참조한다. - require("url")
2. server.js 의 onRequest() 함수에 url path 가 무엇인지 console 에 출력하는 로직을 추가한다.



*참고
URL path, query string 을 통해 우리는 하나의 도메인으로, 사용자에게 좋은 웹 경험을 줄 수 있다.
                               url.parse(string).query
                                           |
           url.parse(string).pathname      |
                       |                   |
                       |                   |
                     ------ -------------------
http://localhost:8888/start?foo=bar&hello=world
                                ---       -----
                                 |          |
                                 |          |
              querystring(string)["foo"]    |
                                            |
                         querystring(string)["hello"]