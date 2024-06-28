import {useEffect,useState} from 'react'

export default function Pokeman({url}){
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  if(Object.keys(data).length < 1){
    return <h1>LOADING...</h1>  
  }
  return(<>
    <h1>{data.forms[0].name.toUpperCase()}</h1>
    {/* Make the image clickable, to get a detailed view.(Another page with things like moves, hp, and what ever else you want to add) */}
    <img height="100px" alt={data.forms[0].name} src={data.sprites.other.home.front_default}/>
  </>)
  
  
}