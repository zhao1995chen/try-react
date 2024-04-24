
import './assets/styles/App.css'
import Admin from './layouts/Admin'
import Default from './layouts/Default'
import Intro from './pages/Intro'

export default function App() {
  let isLoggedIn = false, showIntro = true
  let layout = isLoggedIn ? <Admin /> : <Default />

  return (
    <>
      {layout}
      { showIntro && <Intro /> }
    </>
  )
}
