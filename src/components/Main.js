import React, { useEffect, useState } from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = ({ selectedPunk, punkListData}) => {
    const[activePunk, setActivePunk] = useState(punkListData[0])
    const [account, setAccount] = useState('')

    const loadData = async () => {
        if(!window.ethereum) return 
        const [currAccount] = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setAccount(currAccount)
        
      };
    
      useEffect(() => loadData(), [])
    
    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    },[punkListData, selectedPunk])
    // console.log(selectedPunk)
    // console.log(activePunk, activePunk.token_id)
  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='punkHighlight'>
                <div className='punkContainer'>
                    <img
                      className='selectedPunk'
                      src={punkListData[activePunk.token_id].image_url} 
                      alt="" 
                    />
                </div>
            </div>

            <div className='punkDetails' style={{color:'#fff'}}>
                <div className='title'>
                {punkListData[activePunk.token_id].name}
                <span className='itemNumber'>•#{punkListData[activePunk.token_id].token_id}</span>
            </div>

            <div className='owner'>
                <div className='ownerImageContainer'>
                    <img src={activePunk.owner.profile_img_url} alt="" />
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div>{account}</div>
                        <div className='ownerHandle'>@parth297</div>
                    </div>
                    <div className='ownerLink'>
                        <img src={instagramLogo} alt="" />
                    </div>
                    <div className='ownerLink'>
                        <img src={twitterLogo} alt="" />
                    </div>
                    <div className='ownerLink'>
                        <img src={moreIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Main