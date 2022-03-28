import React, {useState,useEffect} from 'react'
import { ethers } from 'ethers'
import { customAlphabet } from 'nanoid'

import './MintModal.css'

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz1234567890', 18)

const createAsset = () => ({
  asset_id: nanoid(),
  name: '',
  picture: '',
  external_link: '',
  description: '',
  collection: '',
  supply: null,
  royalties: null,
  date_of_creation: new Date().toISOString()
})

const defaultAssets = [createAsset()]

export default function MintModal({open, closeModal}) {
  const [metamaskAvailable, setMetamaskAvailable] = useState(true)
  const [network, setNetwork] = useState(null)
  const [account, setAccount] = useState('')

  const [assets, setAssets] = useState(defaultAssets)

  const addAsset = (asset) => setAssets(val => [...val, asset])
  const removeAsset = (idx) => {
    setAssets(val => {
      const newVal = [...val]
      newVal.splice(idx, 1)
      return newVal
    })
  }
  const updateAsset = (idx, asset) => {
    setAssets(val => {
      const newVal = [...val]
      newVal[idx] = {...newVal[idx],...asset}
      return newVal
    })
  }

  const handleInput = (e, idx) => {
    const key = e.target.name
    const value = e.target.value
    console.log(key, value)
    updateAsset(idx, {[key]: value})
  }

  const loadData = async () => {
    if(!window.ethereum) return setMetamaskAvailable(false)
    const [currAccount] = await window.ethereum.request({ method: 'eth_requestAccounts' })
    setAccount(currAccount)
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const currNetwork = await provider.getNetwork()
    setNetwork(currNetwork)
  };

  useEffect(() => loadData(), [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      creator_wallet_id: account,
      creator_network: network,
      assets
    }

    console.log('Final Data', data)
  }

  if (!open || !metamaskAvailable) return null

  return (
    <>
      <div className='modal-backdrop' />
      <div className='modal'>
        <form onSubmit={handleSubmit}>
          <div className='actions'>
            <h3>NFT Assets</h3>
            <button className='button' style={{padding: '8px 12px'}} onClick={closeModal}>&times;</button>
          </div>

          {assets.map((asset, idx) => (
            <div key={asset.asset_id} className="asset">
              <input value={asset.name} onChange={e => handleInput(e, idx)} name="name" type="text" placeholder='Asset name' />
              <input value={asset.picture} onChange={e => handleInput(e, idx)} name="picture" type="text" placeholder='Picture url' />
              <input value={asset.supply} onChange={e => handleInput(e, idx)} name="supply" type="number" placeholder='Supply' />
              <input value={asset.collection} onChange={e => handleInput(e, idx)} name="collection" type="text" placeholder='Collection name' />
              <input value={asset.royalties} onChange={e => handleInput(e, idx)} name="royalties" type="text" placeholder='Royalties' />
              <input value={asset.external_link} onChange={e => handleInput(e, idx)} name="external_link" type="text" placeholder='External link' />

              <textarea value={asset.description} name="description" onChange={e => handleInput(e, idx)} placeholder="Description">{asset.description}</textarea>

              <div><button type="button" className='button' onClick={() => removeAsset(idx)}>Remove asset</button></div>
            </div>
          ))}

          <div className='actions'>
            <button type="button" className='button accent' onClick={() => addAsset(createAsset())}>Add asset</button>
            <button type="submit" className='button primary'>Mint NFT</button>
          </div>
        </form>
      </div>
    </>
  );
}
