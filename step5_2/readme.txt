바로 앞에서 express 프레임워크를 설치하고 간단하게 hello world 도 출력해보았다.
그럼 express 프레임워크의 엄청난 개발생산성을 경험해보자.
이 작업은 무척 당황스러울 수 있으니 긴장하자. [아래의 작업을 잘 이해하여 따라와 주길 부탁한다.]

우선 커맨드창 디렉토리 위치를 step5_2 에 위치시키자.

1. 디렉토리 step5_2를 apps 아래에 생성해주고, 커맨드창 디렉토리를 step5_2로 옮긴 후에 express myapp 을 입력해주자.
2. 그럼 step5_2 아래에 myapp 이란 폴더가 생기고 기본적인 웹서버에 필요한 것들이 구성된다.
3. 커맨드창 디렉토리를 myapp 으로 이동시키고 npm install 을 입력해주자.
4. express 로 기본 웹서버를 구성해주었고, npm install 로 구성된 웹서버에 필요한 것들을 myapp 폴더 이하에 설치하였다.
5. 생성된 myapp 폴더 아래에 app.js 를 열어 제일 하단에 app.listen(8888); 을 추가해주자.
6. 브라우저에서 localhost:8888 을 입력해주자.

우린 단지 커맨드창에서 express myapp 을 이용하여 'myapp'이라는 프로젝트를 구성하였고.
구성된 프로젝트에 필요한 것들을 npm 을 이용하여 프로젝트에 설치하였다.
기본으로 구성된 프로젝트의 app.js 에서 바로 서버를 실행할 수 있도록 listen 코드를 포트와 함께 삽입해주었다.
(사실, bin 폴더 이하의 www 코드에서도 서버를 구동할 수 있긴 하다. debug 를 위해 사용한다고 하는데, 이 부분은 자세히 알지 못하여 기술하지 못하겠다.)
단지 그 작업만으로 우린 웹서버를 구동시킬 수 있음을 확인하였다.

그럼 express myapp 으로 구성된 기본 프로젝트를 살펴보자.

myapp 폴더 이하에는 bin, node_modules, public, routers, views. 그리고 app.js, package.json 으로 구성되어있음을 확인할 수 있다.

bin 아래에는 www 라는 확장자없는 파일이 있는데, 이 부분에 대해서는 아직 학습이 미흡하여 넘어가도록 하겠다. (bin 이라 하여 엄청 쫄았으나 별다른 특이점을 찾지 못하겠다. 다만, www 라는 파일이 디버깅용이란 건 대충 감이 온다.)
node_modules 은 프로젝트 수행을 위한 각종 node 파일, 폴더들이 존재한다.
public 은 실제 어플리케이션 개발에 필요한 리소스 파일들을 저장한다고 보면 되겠다. (nodejs 는 javascript 로 구현되어있으나 리소스와 그렇지 않은 어플리케이션 코드들과의 구분을 express 에서 하고 있음을 확인할 수 있다.)
routers 는 우리가 지난 step 들을 밟으며 진행하였던 그 router 로 보면 되는데, 여기선 express 프레임워크를 활용하여 보여줄 텍스트를 routers 에서 수행했음을 알 수 있다. 실제로 render 되는 부분을 수정하면 수정한 대로 브라우저에서 확인할 수 있다.
views 는 각종 jade 확장자의 파일들이 보인다. 친숙해보이는 파일명과 달리 jade 는 무척 낯설다. express 에서는 view template engine 을 따로이 설정하지 않으면 express 에서는 기본으로 jade 로 설정된다. jade 는 haml 으로부터 영향을 받아 node 를 위해 자바스크립트로 구현된 view template engine 이다.
