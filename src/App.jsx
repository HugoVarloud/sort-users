import './App.css'
import SortUsers from './components/SortUsers/SortUsers'

function App() {
  const users = [{firstName: 'Hans', lastName: 'Zimmer'}, {firstName: 'Lance', lastName: 'Armstrong'}]
  return (
    <>
        <SortUsers users={users}/>
    </>
  )
}

export default App
