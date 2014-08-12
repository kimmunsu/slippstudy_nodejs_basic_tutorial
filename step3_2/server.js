var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    if("/favicon.ico" != pathname){	// 많은 브라우저에서 domain으로부터 favicon.ico 를 요청하는데, 보기 귀찮으니 제거하자.
		console.log("Request for " + pathname + " received.");	
		route(pathname);
	}
	
	response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;