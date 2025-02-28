import React, { useEffect, useState } from 'react'
import MemeCard from '../Components/Card';
import { getAllMemes } from '../Api/memes';

const Homepage = () => {

    const [data, setData] = useState([]);

    useEffect(() =>{
        getAllMemes().then((memes) => setData(memes.data.memes))
    }, [])
  return (
    <div className="row">

        {
            data.map((e) => <MemeCard  img={e.url} title={e.name}/>)
        }
        

    </div>
  )
}

export default Homepage;