# React 筆記

- React component 須首字大寫命名
  ```js
  function MyButton() {
    return (
    )
  }
  ```

- React `return` 只接受單一 tag，如果有多個 tag 要用 `<>` 在最外層包覆
- React 在編譯 JSX 時會將大括號中的內容視為 JS 讀取

  ```jsx
  function MyButton() {
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

## Tools

- [HTML -> JSX 轉換器](https://transform.tools/html-to-jsx)
