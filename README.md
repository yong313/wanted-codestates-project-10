
<br />

### ๐ย ****wanted-codestates-project-10****
โจย ์ํฐ๋ ํ๋ฆฌ์จ๋ณด๋ฉ ์ฝ์ค - ๊ฐ์ธ ๊ธฐ์ ๊ณผ์  - ์ ์ฉํ

---

### ๐ย  ๋ฐฐํฌ๋งํฌ

- [๋ฐฐํฌ๋งํฌ](https://silly-tapioca-df23d1.netlify.app/)

<br />

### ๐ซย  ํ๋ก์ ํธ ์๊ฐ

- ์ถ์ฒ ๊ฒ์์ด ๊ธฐ๋ฅ์ ์ ๊ณตํ๋ ๊ฒ์์ฐฝ ๊ตฌํ

<br />

### โ๏ธย  ํ๋ก์ ํธ ๊ธฐํ

1. ํ์ ์ฌํญ ๋ฐ ๋์  ๊ณผ์  ํ์ธ
2. [figma](https://www.figma.com/file/Y2E9VQnkhouOGbKZd22VJx/%ED%9C%B4%EB%A8%BC%EC%8A%A4%EC%BC%80%EC%9D%B4%ED%94%84-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9-%EC%A0%84%EC%9A%A9%ED%83%9C?node-id=0%3A1)๋ฅผ ์ฌ์ฉ ui ๋์์ธ
3. GitHub Issues / Projects๋ฅผ ์ฌ์ฉ ui๊ตฌํ ์์ ๋ฐ ๊ธฐ๋ฅ ๊ตฌํ์์ ๊ธฐํ

<br />

### ๐ ย ๊ธฐ๋ฅ ์์ฐย 

![1](https://user-images.githubusercontent.com/85574104/160143893-695c1925-f5a1-49b1-8667-14703ac4339d.gif)

<br />

### ๐จย  ์คํ๋ฐฉ๋ฒ - 1

1. ๋ฐฐํฌ ๋ ์ฃผ์๋ก ์ ์ํด์ฃผ์ธ์. - [๋ฐฐํฌ๋งํฌ](https://silly-tapioca-df23d1.netlify.app/)
2. ์งํ๋ช์ ๊ฒ์ํ  ์ ์๋ ๊ฒ์์ฐฝ์ ์งํ๋ช์ ์๋ ฅํด์ฃผ์ธ์.
3. ์ถ์ฒ ๊ฒ์์ด ๋ชฉ๋ก์ ํค๋ณด๋ ์ํ ๋ฐฉํฅํค๋ก ์ด๋ํ๋ฉฐ ์ ํ ๊ฐ๋ฅํฉ๋๋ค. ์ํ๋ ์ถ์ฒ ๊ฒ์์ด๋ก ์ด๋ํ์ฌ ์ํฐํค๋ฅผ ๋๋ฅด๋ฉด ํด๋น ์งํ์ ๊ธฐ๋ฐ์ผ๋ก ํ ์์์ํ ์ ๋ณด๋ฅผ ์ ๊ณตํ๋ ์น ์ฌ์ดํธ๋ก ์ด๋ํฉ๋๋ค. 

<br />

### ๐งย  ์คํ๋ฐฉ๋ฒ - 2


```jsx
git clone https://github.com/yong313/wanted-codestates-project-10.git

cd wanted-codestates-project-10

npm install

npm start
```

<br />

### ๐จ๐ปโ๐ปย ๊ธฐ๋ฅ ๊ตฌํ ๋ชฉ๋ก

1. ๊ฒ์์ด์๋ ฅ ์๊ฐ์ ๊ฐ๊ฒฉ์ ์ฌ์ฉ APIํธ์ถ ์ต์ ํ
    
    ![3](https://user-images.githubusercontent.com/85574104/160145771-03ca02b3-fb79-4902-8641-124b65e44379.gif)
    
    > ๊ฒ์์ฐฝ์ ํ์คํธ๋ฅผ ์๋ ฅํ  ๋๋ง๋ค API ํธ์ถํ๋ ๊ฒ์ ๋ฐฉ์งํ๊ธฐ ์ํด lodash์ debounce๋ฅผ ์ฌ์ฉํ์ฌ 0.25์ด์ API ํธ์ถ์ ๊ฐ๊ฒฉ์ ๋๊ณ  setTimeout์ ์ฌ์ฉํ์ฌ ๊ฒ์ ์ค์ด๋ผ๋ ๋ฉ์์ง๋ฅผ 0.45์ด ๊ฐ๊ฒฉ์ ์ค์ ์ด 0.7์ด์ ๊ฐ๊ฒฉ์ผ๋ก ๊ฒ์์ด๊ฐ ์๋ ฅ๋  ๋๋ง๋ค ์ผ์ด๋๋ ๋ถํ์ํ API ํธ์ถ์ ์ ์ด
    > 
    
    ```jsx
    // userInputHandler & debounce
    
    const userInputHandler = () => {
        setIsValue(true);
        timeOut = setTimeout(() => {
          setIsUserValue(userSearchInput.current.value);
        }, 450);
      };
    
      const debouceOn = debounce(userInputHandler, 250);
    ```
    
    <br />
    
2. ์ถ์ฒ ๊ฒ์์ด ๋ฆฌ์คํธ๋ฅผ ํค๋ณด๋ ๋ฐฉํฅํค๋ฅผ ์ฌ์ฉํ์ฌ ์ด๋ ๋ฐ ์ ํ escํค๋ฅผ ์ฌ์ฉํ์ฌ ์ถ์ฒ ๊ฒ์ ๋ฆฌ์คํธ ๋ซ๊ธฐ
    
    ![4](https://user-images.githubusercontent.com/85574104/160146327-6e7807de-9c31-4ea9-b5f6-08685ce0ec2c.gif)
    
    > swich ๋ฌธ๊ณผ JavaScript ํค๋ณด๋ ์ด๋ฒคํธ๋ฅผ ์ฌ์ฉํ์ฌ ์ถ์ฒ ๊ฒ์์ด ๋ฆฌ์คํธ์์ ์ ๊ณตํ๋ 7๊ฐ์ ๊ฒ์์ด๋ฅผ ์ด๋ ๋ฐ ์ ํ ์ถ์ฒ ๊ฒ์์ด ์ํ๋ฅผ ๊ด๋ฆฌํ๋ targetIndex๋ฅผ ์ฌ์ฉํ์ฌ props๋ก ์์ ์์์ธ AutoComplete์ ์ ๋ฌํ์ฌ targetIndex์ index ๊ฐ์ ์ผ ํญ ์ฐ์ฐ์๋ก ๋น๊ตํ์ฌ true, false๋ฅผ ๋ฐํ map ํจ์๋ก ์์  ๋ index์ซ์๋งํผ ์ด๋, ์ ํ์ด ๊ฐ๋ฅํ๊ณ  ์ ํ๋ ์์ต css๋ฅผ ์กฐ์ ํ์ฌ ๋ฐฑ๊ทธ๋ผ์ด๋ ๋ฐ ํ์คํธ ์ปฌ๋ฌ ๊ฐ์ ๋ณ๊ฒฝ
    > 
    
    ```jsx
    // ์ถ์ฒ ๊ฒ์์ด ์ํ๊ด๋ฆฌ
    const [targetIndex, setTargetIndex] = useState(-1);
    
    // onKeyUpHandler
    const onKeyUpHandler = (e) => {
        switch (e.key) {
          case "ArrowUp":
            if (targetIndex < 0) {
              return;
            } else {
              setTargetIndex(targetIndex - 1);
            }
            break;
          case "ArrowDown":
            if (targetIndex >= 7) {
              return;
            }
            setTargetIndex(targetIndex + 1);
            break;
          case "Escape":
            if (e.keyCode === 27) {
              setIsUserValue("");
            }
            break;
          case "Enter":
            if (e.key === "Enter" && targetIndex > -1) {
              buttonClickHandler();
            }
            break;
          default:
            break;
        }
      };
    
    // ๊ฒ์ Input
    <SearchInput
      placeholder="์งํ๋ช์ ์๋ ฅํด ์ฃผ์ธ์."
      type="text"
      ref={userSearchInput}
      onChange={debouceOn}
      onKeyUp={onKeyUpHandler}
    />
    
    // ๊ฒ์์ด ๋ฆฌ์คํธ
    <AutoList
    	key={data.id}
      idx={idx}
      targetIndex={targetIndex === idx ? false : true}
    >
    
    // ์ ํ์์ญ css
    const AutoList = styled.div`
      width: 100%;
      height: 50px;
      display: flex;
      padding: 0 24px;
      align-items: center;
      color: ${(props) => (props.targetIndex ? "" : "#fff")};
      background-color: ${(props) => (props.targetIndex ? "#fff" : "#abcbfc")};
    
      .search_icon {
        color: ${(props) => (props.targetIndex ? "#505b65" : "#fff")};
      }
    `;
    ```
    
    <br />
    
3. ์ํฐ ๋ฐ ๊ฒ์ ๋ฒํผ ํด๋ฆญ์ผ๋ก ๊ฒ์ํ ์งํ๋ช ํ์ด์ง๋ก ์ด๋
    
    ![5](https://user-images.githubusercontent.com/85574104/160146599-d5397217-5129-437d-bb43-989d8b178846.gif)
    
    > buttonClickHandler๋ฅผ ๋ง๋ค์ด ๊ฒ์์ด ์์ด ์ํฐ ํน์ ๊ฒ์ ๋ฒํผ์ ํด๋ฆญํ๋ฉด alert๋ฅผ ์ฌ์ฉํ์ฌ ๊ฒ์์ด๋ฅผ ์๋ ฅํ๋๋ก ์ ๋, ๊ฒ์์ด๋ฅผ ์๋ ฅ ์ url๊ณผ ๊ฒ์์ด๋ฅผ ๋ด๊ณ  ์๋ userValue๋ฅผ ์ฌ์ฉํ์ฌ ํด๋น ํ์ด์ง๋ก ์ด๋
    > 
    
    ```jsx
    // onKeyUpHandler
    case "Enter":
      if (e.key === "Enter" && targetIndex > -1) {
        buttonClickHandler();
      }
    break;
        
    // buttonClickHandler
    const buttonClickHandler = () => {
        if (userValue === "") {
          return window.alert("๊ฒ์์ด๋ฅผ ์๋ ฅํด ์ฃผ์ธ์.");
        }
        window.location.href = `https://clinicaltrialskorea.com/studies?condition=${userValue}`;
    };
    ```
    
    <br />
    
4. ๋ฏธ๋์ด ์ฟผ๋ฆฌ๋ฅผ ์ฌ์ฉ ๋ฐ์ํ ์น์ฌ์ดํธ ์ ์ฉ

    ![2](https://user-images.githubusercontent.com/85574104/160144474-5d5a525c-e057-4254-a4ba-09828b64c98a.gif)
    
    > ์ ์ฒด์ ์ธ ์ปดํฌ๋ํธ ์์ฑ ์ width๊ฐ์ % ๋ก ์ค์ ํด ๊ฐ๋ก ์ฌ์ด์ฆ๊ฐ ์ค์ด๋ค๋ ์๋์ผ๋ก ํฌ๊ธฐ๋ฅผ ๊ฐ์ ธ๊ฐ๋๋ก ์ค์ , ๋ฏธ๋์ด ์ฟผ๋ฆฌ๋ฅผ ์ฌ์ฉํด ํน์  ์ปดํฌ๋ํธ ํฌ๊ธฐ ๋ฐ ์์ ๋ธ์ถ ์ฌ๋ถ๋ฅผ ์ปจํธ๋กค ํ์๊ณ , ๋ชจ๋ฐ์ผ ์ฌ์ด์ฆ๊ฐ ๋์์ ๋ ๋ชจ๋ฐ์ผ ์ ์ฉ ํ๋ฒ๊ฑฐ ๋งค๋ด ์ ๊ณต  
    
    ```jsx
    // ํค๋ menu
    <RightBox>
       <p>์์๋ฐ๊ธฐ</p>
       <p>์ ํด/๋ฌธ์</p>
      <MobileIcon id="mobile_menu" onClick={openModal} />
    </RightBox>
    
    // css
    const RightBox = styled(LeftBox)`
    justify-content: flex-end;

    #mobile_menu {
        display: none;
    }

    @media screen and (max-width: 1040px) {
     p {
      display: none;
    }
    #mobile_menu {
      cursor: pointer;
      display: block;
    }
    ```    

<br />    

๐ซ  &nbsp; ์ด๋ ค์ ๋ ์ 

1. Redux-Toolkit
> ๋ฆฌ๋์ค ํดํท์ ์ฒ์ ์ฌ์ฉํ๋ ๊ฑฐ๋ผ ์ด๋ ค์์ ๊ฒช์์ง๋ง ๋ฌธ์์ ๋ ํผ๋ฐ์ค๋ฅผ ์ฐพ์๋ณด๋ฉฐ ์ฌ์ฉ๋ฒ์ ์ตํ, ๋ฆฌ๋์ค์์๋ ๋ฆฌ๋์ค ํดํท์ ์ฌ์ฉ์ ๊ถ์ฅํ์ง๋ง ํ๋ก์ ํธ ํ๊ฒฝ์ ๋ฐ๋ผ ๋ฌ๋ผ์ง๋ค๋ ์ฌ์ค์ ์๊ฒ ๋์๊ณ , ๋ฆฌ๋์ค๋ณด๋ค ์ฌ์ฉํ๊ธฐ ํธํ๊ณ  ๊ฐ์ํ๋์ด์๋ ๊ฑฐ ๊ฐ์ ์ฅ์ ์ด ์๋ค๊ณ  ๋๋

2. ๊ฒ์์ด ์๋ ฅํ๋ ์๊ฐ ๊ฒ์ ์ค ๋ฉ์ธ์ง ๋ธ์ถ ์ํค๊ธฐ
> ๊ฒ์์ด๋ฅผ ์๋ ฅํ๋ input์ ์ํ๋ฅผ ๊ด๋ฆฌํ๋๋ฐ api ํธ์ถ์ ์ค์ด๊ธฐ ์ํด debounce๋ก ๋๋ ์ด ์๊ฐ์ ๊ฑธ์ด๋์ ๊ฒ์ ์ค ๋ฉ์์ง์ ์ถ์ฒ ๊ฒ์์ด ๋ฆฌ์คํธ๊ฐ ๋์์ ๋์ค๋ ์ํฉ์ด ์๊ฒจ์ ์ด๋ค ์กฐ๊ฑด์ ์ค์ผ ํ ์ง ๊ณ ๋ฏผ์ ๋ง์ด ํจ 
> isValue๋ผ๋ input์ ์ํ ๊ฐ์ ํ๋ ๋ ๋ง๋ค๊ณ  ๋ฆฌ๋์ค initialState์ loading์ ๊ธฐ๋ณธ๊ฐ์ false๋ก ์ค์ ํ ๋ค, loading์ ๊ธฐ์ค์ผ๋ก isValue์ ํ์คํธ๊ฐ ์ถ๊ฐ๋๋ฉด ๊ฒ์ ์ค ๋ฉ์์ง๋ฅผ ๋ธ์ถ์ํค๊ณ  api ํธ์ถ์ด ๋๋ฉด ์ถ์ฒ ๊ฒ์์ด ์ปดํฌ๋ํธ๋ฅผ ๋ธ์ถ์ํค๋ ๋ฐฉ๋ฒ์ผ๋ก ํด๊ฒฐ

<br />
