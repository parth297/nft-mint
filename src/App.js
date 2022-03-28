import './App.css';
import Header from './components/Header';
import {useState} from 'react'
import PunkList from './components/PunkList';
import Main from './components/Main';


function App() {
  const[punkListData] = useState([
      {
          "token_id": "5",
          "name": "Green Tennis Hulk",
          "traits": [
              {
                  "trait_type": "price",
                  "value": "18",
                  "display_type": null,
                  "max_value": null,
                  "trait_count": 0,
                  "order": null
              }
          ],
          "image_url": "https://lh3.googleusercontent.com/P8UTYiL1V41jzT5j6fjJ1N1vKofk5f1I6Dx9XJPWAGRkl_eFG1mDVopENDoxKEy8brqIl1F48lY2y1HpvxrJVCzp0AB4EnAdDywunmk",
          "owner": {
              "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/19.png",
              "address": "0x9a34e295c4c966ceccaaded3f1564b3911207b87"
          }
      },
      {
          "token_id": "4",
          "name": "Pirate King Punk",
          "traits": [
              {
                  "trait_type": "price",
                  "value": "37",
                  "display_type": null,
                  "max_value": null,
                  "trait_count": 0,
                  "order": null
              }
          ],
          "image_url": "https://lh3.googleusercontent.com/PRWVFVX-rMpc9IRb4F2sKHLAgXjJkPYQeYbv9U6x7sei7yr5txmufwjsuFNR2Mih151DvVzjDjqDKO6KiXpZ0Nn7r1hoBQw5JydNxA",
          "owner": {
              "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/19.png",
              "address": "0x9a34e295c4c966ceccaaded3f1564b3911207b87"
          }
      },
      {
          "token_id": "3",
          "name": "Captain America Punk",
          "traits": [
              {
                  "trait_type": "price",
                  "value": "17",
                  "display_type": null,
                  "max_value": null,
                  "trait_count": 0,
                  "order": null
              }
          ],
          "image_url": "https://lh3.googleusercontent.com/9RetH-4mIreXJjrTmuzhiOeIXfdZ0E-OJAnCGLkNcnEVWgIPuFf_9uhML-RMQ4U2BwwDuXZ3mg74lBq7ZTwFtWKfBPGOcDX5sfYC",
          "owner": {
              "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/19.png",
              "address": "0x9a34e295c4c966ceccaaded3f1564b3911207b87"
          }
      },
      {
          "token_id": "2",
          "name": "Cigar Hat Punk",
          "traits": [
              {
                  "trait_type": "price",
                  "value": "9",
                  "display_type": null,
                  "max_value": null,
                  "trait_count": 0,
                  "order": null
              }
          ],
          "image_url": "https://lh3.googleusercontent.com/XLCaaKWCaNShDkedPrPwEwypSP0LnZ_TtXyhd77a20DjYxcj6MWvhI3UxD8sBLgx2vCF8ckG4Dwve2jR77g0LxtGmztiuN_bCdW6",
          "owner": {
              "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/19.png",
              "address": "0x9a34e295c4c966ceccaaded3f1564b3911207b87"
          }
      },
      {
          "token_id": "1",
          "name": "Cyber Punk",
          "traits": [
              {
                  "trait_type": "price",
                  "value": "13",
                  "display_type": null,
                  "max_value": null,
                  "trait_count": 0,
                  "order": null
              }
          ],
          "image_url": "https://lh3.googleusercontent.com/yj_iIkip0HvQFaeF8BOr6nH6Ww_klrbTYhxMz7t1hhbv4ZVXKOifiHIAit4TOkH-S25KGxVBLxtj4YDKfSG4SJ6PrQqLPUXDXiroZg",
          "owner": {
              "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/19.png",
              "address": "0x9a34e295c4c966ceccaaded3f1564b3911207b87"
          }
      },
      {
          "token_id": "0",
          "name": "Bandana Punk",
          "traits": [
              {
                  "trait_type": "price",
                  "value": "8",
                  "display_type": null,
                  "max_value": null,
                  "trait_count": 0,
                  "order": null
              }
          ],
          "image_url": "https://lh3.googleusercontent.com/6wsfg93b9lM6cCDActzzhgIOffeG_XN6kLUR2FHdelFYsIXqN3yssoDkBTpvfk3YlHbN78UDwemiYsXp99xBwOtpyjDli9apQyzvXA",
          "owner": {
              "profile_img_url": "https://storage.googleapis.com/opensea-static/opensea-profile/19.png",
              "address": "0x9a34e295c4c966ceccaaded3f1564b3911207b87"
          }
      }
  ])
  const[selectedPunk, setSelectedPunk] = useState(0)

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
