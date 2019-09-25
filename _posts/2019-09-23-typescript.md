---
layout: post
title:  "typescript(작성중)"
author: 만
categories: [ script ]
image: assets/images/11.jpg
featured: true
hidden: false
tags: [script, typescript, 웹트랜드]
---

> typescript에 대해서 


## 시작하며
JEST, TypeScript, GraphQL, React Hooks, Serverless를 2019년에 알아야한 최신 웹트렌드로 소개 하는 영상을 보다가
typescript에 대해 궁금해서 찾아 보았습니다.
해당 영상은 Typescript가 뜨고 있는 이유를 다음과 같이 설명합니다.

첫번째는 마소에서 만들었고, 두번째는 마소에서 만들었기 때문에 요새 많이들 쓰고 있는 vscode랑 호환이 잘된다고 합니다.

그리고 당연히 마소에서 만들었으니... 마소에서 사용할 것이고, 페이팔에서도 사용 중이라고 합니다.

## Typescript 란?
Typescript는 대규모 프로젝트에 javascript가 적합하지 않다는 문제점을 보완하기 위해 만들어진 언어로 자바스크립트(ES5)의 Superset(상위확장)입니다.

Microsoft에서 2012년 발표한 오픈소스이고 정적 타이핑을 지원하며 ES6(ECMAScript 2015)의 클래스, 모듈 등과 ES7의 Decorator 등을 지원한다고 합니다.

![출처: https://poiemaweb.com/typescript-introduction](/assets/images/posts/typescript-superset.png)

> Typescript의 목표는 "클래스, 모듈, 정적 타입과 같은 것들을 통해 JavaScript를 강화하는 것" 이며, open-standard 나 크로스 플랫폼에 대한 이점을 포기하지 않는 것이고, 그 결과로 "JavaScript 개발 범위의 어플리케이션을 위한 언어"가 되었고, JavaScript 의 상위언어집합(superset)이 되었습니다.

일반적으로 사용 하고 있는 javascript는 인터프리터지만 타입스크립트는 컴파일 언어입니다. 

Typescript 코드를 생성해서 컴파일 해보면 결국 js 파일이 생성 되는데요. 그럼 Typescript를 사용 하는 이유는 뭘까요? 
 
## Typescript 특징
Typescript를 쉽게 설명하자면 javascript에 type을 지정해서 사용 한다는 것입니다.

javascript의 var, let, const 대신 string이나 number 같은 자료형을 지정해 줌으로써 컴파일시 안정성을 확보해 줍니다.

```javascript
function sum(a, b){
    return a+b;
}
```

위와 같은 코드가 있을때 javascript의 경우 형이 지정되어 있지 않기 때문에 a, b에 어떤 변수를 넣어도 연산이 됩니다.

```javascript
sum(1,2); //연산 결과 3
sum('a','b') //연산 결과 ab
```

위 코드를 타입 스크립트로 변경 하면 아래와 같습니다.

```typescript
function sum(a: number, b: number) {
  return a + b;
}

sum('x', 'y');
// error TS2345: Argument of type '"x"' is not assignable to parameter of type 'number'.
```

타입스크립트의 경우 처음부터 자료형을 설정해 주기 때문에 js의 경우 처럼 문자열로 변수를 지정하면 컴파일시 오류 발생 시킵니다.

이렇게 타입을 명시해 줌으로써 가독성을 높혀 주고 프로그램의 의도를 확실히 해 줄 수 있는 장점이 있습니다. 예외 처리에 대한 설정 또한 불필요게 되지요!!<br>

간혹 실무에서 json 값으로 받아 오는 숫자형 데이터 연산시 parseInt로 형변환 해주지 않으면 1+2 연산 값이 12가 되어 버리는 현상이 나타 나는데 
type을 지정해서 사용해 주면 이런 오류는 좀 줄어 들지 않을까 생각 됩니다.

## 간단한 설치 방법
npm을 위해 노드를 설치 해야 하지만 전 npm이 설치 되어 있으니 생략합니다..

> npm install -g typescript

전 그냥 위와 같이 설정 했는데요 -D면 devDependency로 설치 되고 -g는 global로 설치가 되는 옵션이니 참고 바랍니다.

typescript 설치후 아래와 같은 예제 파일을 만들어 봤습니다.

```typescript
class Coffes {
    name : string;
    price : number;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

}

function coffeeInfo(name : string, price : number){
    return "name : " + name + ", price : " + price;
}
```
간단하게 클래스와 생성자 , 메소드가 있는 예제를 typescriptTest.ts 라는 파일로 만들고 실행을 시키면
같은 이름의 js 파일이 생성 되는 걸 볼 수 있습니다.

실행
> tsc typescriptTest.ts

###### 생성된 화면

![출처: 내가 한 캡처](/assets/images/posts/190926_typescript2.jpg)

``` javascript
//컴파일 된 내용
var Coffes = /** @class */ (function () {
    function Coffes(name, price) {
        this.name = name;
        this.price = price;
    }
    return Coffes;
}());
function coffeeInfo(name, price) {
    return "name : " + name + ", price : " + price;
}

```

# 정리
지금까지 typescript에 대해 수박겉핥기로 알아 봤는데요~

정리 해보면 typescript는 javascript와 비슷하여 접근성이 좋고, 타입을 지정하여 좀 더 가독성 있고 사용하는 변수의 의도를 명확 하게 할 수 있다는 점이 장점으로 꼽힙니다. 

꼭 이걸 사용 해서 뭔가를 하겠다는 생각이 아직 들지는 않지만... 혹시 나중에 써 볼 수도 있지 않을까요? 



## 참고 사이트
- https://www.youtube.com/watch?v=QyxES-SUq_E
- https://poiemaweb.com/typescript-introduction 
- https://han41858.tistory.com/14
- https://velog.io/@dongwon2/TypeScript%EB%A5%BC-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-%EC%A0%84%EC%97%90-%EC%9D%B4%EC%A0%95%EB%8F%84%EB%8A%94-%ED%95%B4%EC%A4%98%EC%95%BC%EC%A7%80