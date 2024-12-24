import './App.css'
import { GlobalConfiguration } from './components/GlobalConfigration'
import { ThemeWrapper } from './components/ThemeWrapper'
import { Homepage } from './pages/Homepage'

function App() {


  return (
<GlobalConfiguration>
<ThemeWrapper>

  <>
  <Homepage/>
  </>
</ThemeWrapper>
</GlobalConfiguration>
  )
}

export default App
