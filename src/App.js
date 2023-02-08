
import './App.css';
import {useEffect,useState} from "react"
import axios from 'axios'
import Card from './components/Card'

  const App =() => {
  const [burgers, setBurgers] = useState( null)
  
  const fetchData = async () => {
    const burgerData = await axios.get('http://127.0.0.1:8080/burgers');
    const data = Object.keys(burgerData.data.data).map(burgers=>burgerData.data.data[burgers])
    setBurgers(data)
  }
  useEffect( ()=>{
    fetchData()
  },)

  return (
    <div className="App">
      <div><h1>MES BURGERS PREFERES</h1>
      </div>
    
      <div className='burgers-feed'>
        {burgers?.map(burgers=><Card key={burgers.id} burgers={burgers} />)}
      </div>
    </div>
    
  );
    
  
  }
export default App;
