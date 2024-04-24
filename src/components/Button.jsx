import { useState } from 'react'

// React component 須首字大寫命名
function MyButton() {
  const [count, setCount] = useState(0)
  const handleClick = () => setCount((count) => count + 1)

  return (
    <>
      {/* Remind: 函數不需要帶括號 > 給定的是函數本身，不是執行函數 */}
      <button onClick={handleClick}>
        count is {count}
      </button>
    </>
  )
}

export default MyButton
