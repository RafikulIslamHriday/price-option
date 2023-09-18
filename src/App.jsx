 
import './App.css'
import LineChart from './components/lineChart/LineChart'
import Nav from './components/navber/Nav'
import PriceOptions from './components/price-options/PriceOptions'

function App() {
 
  return (
    <>
      <Nav></Nav>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
