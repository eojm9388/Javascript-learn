## 동기
프로그램의 실행 흐름이 순차적으로 진행
> 하나의 작업이 완료된 후에 다음 작업이 실행되는 방식

``` python
# 메인 작업이 모두 수행되어야 마지막 작업이 수행됨
print('첫번째 작업')
for i in range(10):
    print('메인 작업')
print('마지막 작업')
```

``` javascript
// 함수의 작업이 완료될 때까지 기다렸다가 값을 반환해야 계속 진행 가능
const makeGreeting = function (name) {
  return `hello, ${name}!`
}

const name = 'Alice'
const greeting = makeGreeting(name)
console.log(greeting) // 'hello, Alice!'
```

## 비동기
프로그램의 실행 흐름이 순차적이지 않으며, 작업이 완료되기를 기다리지 않고 다음 작업이 실행되는 방식
> 작업의 완료 여부를 신경 쓰지 않고 동시에 다른 작업들을 수행할 수 있음

### 특징
- 병렬적 수행
- 당장 처리를 완료할 수 없고 시간이 필요한 작업들은 별도로 요청을 보낸 뒤 응답이 빨리 오는 작업부터 처리

``` javascript
const slowRequest = function (callBack) {
  console.log('1. 오래 걸리는 작업 시작 ..')
  setTimeout(function () {
    callBack()
  }, 3000)
}

const myCallBack = function () {
  console.log('2. 콜백함수 실행')
}

slowRequest(myCallBack)

console.log('3. 다른 작업 실행')

// 1. 오래 걸리는 작업 시작
// 3. 다른 작업 실행
// 2. 콜백함수 실행
```
