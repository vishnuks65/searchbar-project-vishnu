import Suggestion from './components/Suggestion'

import './App.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]
const getMembersData=async()=>{
  const url = 'https://localhost:3005/stocks'
  const response = await fetch(url)
  const data = await response.json()
  const updatedData=data.map(eachItem=>({
    id:eachItem.id,
    name: eachItem.name,
    role:eachItem.role,
    email:eachItem.email,
  }))
  this.setState({members:updatedData,loading:false})
}
const App = () => <Suggestion suggestionsList={suggestionsList} />

export default App
