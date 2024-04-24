import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '../components/Button'
import Profile from '../components/Profile'

export default function Intro() {
    return (
        <>
          {/* React return 只接受單一 tag，如果有多個 tag 要用 <> 在最外層包覆 */}
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <Button />
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          <Profile />
        </>
      )
}