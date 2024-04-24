import { useState } from 'react'

// React component 須首字大寫命名
function MyButton() {
  const [
    count, // 狀態
    setCount // 狀態的 set function
  ] = useState(0) // React Hook 在括號中給定初始值，會回傳狀態及 set function
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
