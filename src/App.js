import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import {useState, useEffect} from 'react'
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';


function App() {
  const[punkListData, setPunkListData] = useState([])
  const[selectedPunk, setSelectedPunk] = useState(1)

  useEffect(() =>{
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x6CCE6e9E7FFA0dF7B8de6BC28b66e8bbf3fac6Aa&order_direction=asc'
        )
        console.log(openSeaData.data.assets)
        // console.log(openSeaData.reverse().data.assets) 
        console.log(openSeaData.data.assets.reverse(),'😎') 
        setPunkListData(openSeaData.data.assets.reverse())
    }
    return getMyNfts()
  }, [])
  return (
  <div className='app'>
    <Header />
    {
      punkListData.length > 0 && (
      <>
      <Main punkListData={punkListData} selectedPunk={selectedPunk} />
      <PunkList 
        punkListData={punkListData} 
        setSelectedPunk={setSelectedPunk} 

      />
      </>)
    }
    
  </div>
  )
}

export default App;
