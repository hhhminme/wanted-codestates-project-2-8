# 2022 원티드 프리온보딩 프론트엔드 코스 기업과제 - 더블엔씨

#### 💡[배포 페이지 바로가기](http://52.79.127.54:3000/ )💡

## 사용 스택

<p>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" />
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  <img src="https://img.shields.io/badge/react--icons-brightgreen?style=for-the-badge" />
</p>

## 요구 사항

## 기능 구현

### 1팀 :

### 기능

내용

### 기능

내용

---

### 2팀 : 이장민, 강동진

### Modal, Form 기능
```ts
{modalOpen && (
        <FormModal
          setIsModalOpen={setModalOpen}
          name="asdf"
          address="addr"
          tel="tel"
        />
      )}

```

위와 같은 형태로 사용할 수 있습니다.

handleSubmitBtn의 인자에는 (이름, 주소, 전화번호, 메모)가 들어가게 됩니다.

## 작업 내용 📄

### base modal component

모달을 만들기 앞서 재사용성이 있는 모달을 만들기로 했습니다.

base modal은 비즈니스 로직이 없는 UI만을 가지고 있는 컴포넌트입니다.
모달은 createPortal을 통해 만들어주었습니다.
createPortal은 원하는 돔요소에 리엑트 컴포넌트를 삽입시킬수 있는 함수입니다.
모달을 만들 때 이를 사용한 이유는 두가지 입니다.

1. 모달은 DOM요소의 최상단에 존재한다. 때문에 마크업적으로 보았을 때 부모요소에 들어가 있는것이 어색하다.
2. 최상단의 요소에 있지 않다면, 부모요소의 영향을 받게 된다. 그렇기 때문에 스타일처리를 하기 까다로울 수 있다.

따라서 모달이 open상태라면, root의 형제요소에 create-portal이라는 엘리먼트를 만들고 모달을 삽입하는 것까지를 공통 로직으로 분리했습니다.

### useClickAway훅의 사용 이유

모달의 경우 dim을 클릭했을 때 모달이 꺼지게 하고 싶을 수 있습니다. 때문에 isAway변수를 통해 dim을 클릭했을 때 모달이 켜질지 꺼질지를 다룰 수 있게 하였습니다.

### formModal을 만든 이유 폼의 수정과 등록 모두 같은 UI를 가지고 있습니다. 다만 다른 점은 memo의 초기값의 여부입니다. 따라서 사용하기 편하도록 공통 컴포넌트로 만들어 분리하였습니다.

### 만들면서 고려한 점

중요하게 생각했던 부분은 함수의 역할과 책임입니다.

하나의 함수에 하나의 책임만을 가진다면 테스트하기 쉬워지고 재사용하기 더 편해진다고 생각합니다.

따라서 하나의 기능만을 가질 수 있도록 노력했습니다.

또한 사람들이 index.tsx를 보았을 때 원하는것은 마크업이라 생각합니다.

따라서 tsx에는 마크업만 들어갈 수 있도록 노력하였고, 로직은 훅으로 분리하였습니다.
<table>
  <tr>
    <th>isEditl이 true 경우</th>     <th>isEdit이 false일 경우</th>
  </tr>
  <tr>
    <td>
       <img src="https://user-images.githubusercontent.com/70435257/158145829-c8fc35ef-d407-4b3c-bd4c-014fabf187aa.png" />
    </td>    
    <td>
      <img src="https://user-images.githubusercontent.com/70435257/158145635-50195511-b92b-411e-8947-a2aea08b6f86.png" />
    </td>
  </tr>
  
</table>


### 기능

내용

---

## 팀원 소개

| 이름         | 깃허브                                        |
| ------------ | --------------------------------------------- |
| 강동진       | [jinn2u](https://github.com/jinn2u)           |
| 박상우       | [SangWoo9734](https://github.com/SangWoo9734) |
| 신항민       | [ssinking91](https://github.com/ssinking91)   |
| 이장민       | [leo-xee](https://github.com/leo-xee)         |
| 오카무라카에 | [kaehehehe](https://github.com/kaehehehe)     |
| 허민         | [hhhminme](https://github.com/hhhminme)       |
| 전호용       | [mooroom](https://github.com/mooroom)         |
