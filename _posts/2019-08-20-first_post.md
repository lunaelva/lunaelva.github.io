---
layout: post
title:  "첫포스트"
author: 만
categories: [ html ]
image: assets/images/11.jpg
featured: true
hidden: false
tags: [Jekyll, markdown]
---

> 요약글은 이렇다!

# 마크다운 테스트

#목차 
1. [텍스트](#텍스트) 
2. [인용문](#인용문)
3. [블럭](#블럭)
    - [코드블럭](#코드블럭)
    - [인라인 코드 블럭](#인라인-코드-블럭)
4. [링크](#링크)
5. [목록](#목록)
    - [할일목록](#할일목록)
6. [테이블](#테이블)
7. [이미지](#이미지)


---
# 텍스트 
<pre>
# h1
## h2
### h3
#### h4
##### h5
###### h6

*기울여쓰기(italic)*

_기울여쓰기(italic)_

**굵게쓰기(bold)**

__굵게쓰기(bold)__
</pre>
# h1
## h2
### h3
#### h4
##### h5
###### h6

*기울여쓰기(italic)*

_기울여쓰기(italic)_

**굵게쓰기(bold)**

__굵게쓰기(bold)__

---
# 인용문
<pre>
> 인용문
>> 인용문2
</pre>
> 인용문
>> 인용문2
---

# 블럭
## 코드블럭
<pre>
```java
public static void main(Strign ar[]){
    System.out.println("Hello World");
}
```

```javascript
funciont init(){
    console.log("Hello World");
}
```
</pre>
```java
public static void main(Strign ar[]){
    System.out.println("Hello World");
}
```

```javascript
funciont init(){
    console.log("Hello World");
}
```

## 인라인 코드 블럭
<pre>
`인라인 코드 블럭`
</pre>
`인라인 코드 블럭`

---

# 링크
<pre>
인라인
[Google](http://www.google.co.kr “구글”)

URl 링크
<http://google.com/>
</pre>

인라인
[Google](http://www.google.co.kr “구글”)

URl 링크
<http://google.com/>

---

# 목록
<pre>
1. list1
1. list2 item 2
2. list3 item 3

- list1
    - lista
    - listb
</pre>

1. list1
1. list2 item 2
2. list3 item 3

- list1
    - lista
    - listb

---
## 할일목록
<pre>
- [x] 이거했니? 
- [x] 저거했니? 
- [x] 그거는?
- [ ] ????
</pre>
- [x] 이거했니? 
- [x] 저거했니? 
- [x] 그거는?
- [ ] ????

---

# 테이블 
<pre>
th1 | th2
------------ | -------------
tr1td1 | tr1td2
tr2td1 | tr2td2
</pre>

th1 | th2
------------ | -------------
tr1td1 | tr1td2
tr2td1 | tr2td2

---


# 이미지
<pre>
![내 프로필](/assets/images/maan.jpg)
</pre>
![내 프로필](/assets/images/maan.jpg)

---