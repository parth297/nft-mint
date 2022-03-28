import React, {useState, useEffect} from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'
import MintModal from './MintModel'
import { ethers } from 'ethers'

function WalletBalance() {
    const [metamaskAvailable, setMetamaskAvailable] = useState(true)
    const [balance, setBalance] = useState(0);
    
    const getBalance = async () => {
        if(!window.ethereum) return setMetamaskAvailable(false)
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance));
    };

    useEffect(() => getBalance(), [])

    if (!metamaskAvailable) {
        <div>No Metamask</div>
    }

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Balance: {balance} Eth</h5>
        </div>
      </div>
    );
};

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className='header'>
        <div className='logoContainer'>
            <img src={punkLogo} className='punkLogo' alt="" />
        </div>  

        <div className='searchBar'>
            <div className='searchIconContainer'>
                <img src={searchIcon} />
            </div>
            <div>
                <input
                    className='searchInput' 
                    placeholder='Collection, item, user...' 
                />
            </div>
        </div>
        <WalletBalance />
        <div className='loginButton' onClick={() => setModalOpen(val => !val)}>MINT NFT</div>
        <MintModal open={modalOpen} closeModal={() => setModalOpen(false)} />
    </div>
  )
}

export default Header
