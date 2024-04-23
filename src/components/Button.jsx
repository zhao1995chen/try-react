import { useState } from 'react'

// React component 須首字大寫命名
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

export default MyButton
