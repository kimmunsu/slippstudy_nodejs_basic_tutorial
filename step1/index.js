// step 1 : 8888번 포트를 이용하여 hello world 출력만 하는 기본 웹서버
var http = require("http");
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
console.log('start server');

// step 1. 1 : step 1의 createServer 에서 익명함수를 꺼내 함수정의 하여 사용함으로 재사용성을 높이는 리팩토링 작업
// 			   이를 통해 javascript 가 가진 특성 중 하나인, 함수를 객체화 하여 전달한다는 것을 이해할 수 있다.
//var http = require("http");
//function onRequest(request, response) {
//  response.writeHead(200, {"Content-Type": "text/plain"});
//  response.write("Hello World");
//  response.end();
//}
//http.createServer(onRequest).listen(8888);

