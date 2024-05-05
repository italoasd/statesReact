import './module.css'
import { CounterWithDecrement } from './components/CounterWithDecrement'
import { TextSwitcher } from './components/TextSwitcher'
import { VisibilityToggle } from './components/VisibilityToggle'
import { ColorSwitcher } from './components/ColorSwitcher'

function App() {

  return (
    <>
    <CounterWithDecrement />
    <TextSwitcher />
    <VisibilityToggle />
    <ColorSwitcher />
    </>
  )
}

export default App
