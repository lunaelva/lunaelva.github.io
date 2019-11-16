---
layout: post
title:  "window10 home Docker 설치"
categories: [docker]
image: assets/images/11.jpg
featured: true
hidden: false
tags: [microservice, docker]
---

> 마이크로 서비스 관련 공부를 위하여 docker 설치를 하는데 내 노트북은 windows10 home 버전이었다. 
windows10  home은 hyper-v 지원이 안되기 때문에 일반 적인 방법으로는 docker 설치가 되지 않아 나중에 또 설치 할 때 보기 위해 정리해 봄.


1. 작업관리자 > 성능 을 열어 가상화가 사용 중인지 확인.
![출처: 내가 한 캡처](/assets/images/posts/191116_docker1.jpg)

2. docker toolbox 설치
https://github.com/docker/toolbox/releases
DockerToolbox-19.03.1 버전 설치.

3. 다운 받은 DockerToolbox-19.03.1 실행후 쭉쭉 진행!
![출처: 내가 한 캡처](/assets/images/posts/191116_docker2.jpg)
![출처: 내가 한 캡처](/assets/images/posts/191116_docker3.jpg)
![출처: 내가 한 캡처](/assets/images/posts/191116_docker4.jpg)
virtual box와 git은 설치가 되어 있기 때문에 선택 안함.
![출처: 내가 한 캡처](/assets/images/posts/191116_docker5.jpg)
![출처: 내가 한 캡처](/assets/images/posts/191116_docker6.jpg)
![출처: 내가 한 캡처](/assets/images/posts/191116_docker7.jpg)

4. 설치가 끝난 뒤 폴더가 열리면 Docker Quickstart Terminal 실행
![출처: 내가 한 캡처](/assets/images/posts/191116_docker8.jpg)

5. 터미널이 열리면 필요한 파일들을 다운 받고 마지막에 아래와 같이 고래 그림이 나오면 설치 완료.
![출처: 내가 한 캡처](/assets/images/posts/191116_docker9.jpg)

6. docker run hello-world를 실행하여 start가 되면 제대로 설치된것!
![출처: 내가 한 캡처](/assets/images/posts/191116_docker10.jpg)



출처 : https://docs.docker.com/toolbox/toolbox_install_windows/