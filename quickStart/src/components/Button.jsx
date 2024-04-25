import PropTypes from 'prop-types'

// React component 須首字大寫命名
export default function Button({count, onClick}) {
  return (
    <>
      {/* Remind: 函數不需要帶括號 > 給定的是函數本身，不是執行函數 */}
      <button onClick={onClick}>
        Click {count} times
      </button>
    </>
  )
}

// 子組件有 props 需要對 props 進行定義，不然會出現錯誤提示訊息，但不影響程式執行
Button.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}