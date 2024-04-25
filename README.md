# React 筆記

## Memo

- React component 須首字大寫命名
  ```js
  function Button() {
    return (
    )
  }
  ```

- React `return` 只接受單一 tag，如果有多個 tag 要用 `<>` 在最外層包覆
- React 在編譯 JSX 時會將大括號中的內容視為 JS 讀取

  ```jsx
  function Button() {
    const [count, setCount] = useState(0)

    return (
      <>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </>
    )
  }
  ```

## React Hook

### `useState`

- 用於狀態管理
- 會回傳狀態及 set function
- 當 set function 被呼叫時，狀態會被更新為傳入的參數值，畫面會重新渲染

## 組件傳值

```jsx
// App.jsx
import Button from './components/Button'

export default function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count++)
  }

  return (
    <>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </>
  )
}
```

```jsx
// Button.jsx
export default function Button({ count, onClick }) {
  return (
    <button oClick={onCLick}>
      Click {count} times
    <button/>
  )
}

Button.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
```

- 子組件有 props 需要對 props 進行定義，不然會出現錯誤提示訊息，但不影響程式執行

# JS 筆記

- 如果條件判斷不需要 false 可以直接用 `&&` 取代
  ```jsx
  export default function App() {
    let isLoggedIn = false, showIntro = true
    return (
      <>
        { showIntro && <Intro /> }
      </>
  }
  ```

## Tools

- [HTML -> JSX 轉換器](https://transform.tools/html-to-jsx)
