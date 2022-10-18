import React, { useEffect,useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {countryNames, fetcherCountry, fetcherGlobal} from "./store/slice"
import Chart from './component/Chart';
function App() {

 const [globalSelected,setGlobalSelected]=useState(true)

  const globalData = useSelector((state: any) => state.covidData.global)
  const {countries}:{countries:{name:string}[]}=useSelector((state: any) => state.covidData.countries)
  const countryData= useSelector((state: any) => state.covidData.country)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetcherGlobal());
    dispatch(countryNames())
  },[])

  const getCountry = (e:any)=>{
    if(e.target.value==="Global"){
    setGlobalSelected(true)
    }else{
      setGlobalSelected(false)
    dispatch(fetcherCountry(e.target.value))
    }
    console.log(countryData)
  }

  const mystyle={
    backgroundColor:"orange",borderRadius:"3rem",padding:"5rem"
  }

  return (
    <div className="App">
      <div style={{display:"flex",flexWrap:"wrap",gap:"5rem",justifyContent:"center",marginTop:"5rem"}}>
        {globalData&&globalSelected?
        <>
<div style={mystyle}>Confirmed: {globalData.confirmed.value}</div>
<div style={mystyle}>Recovered:{globalData.recovered.value}</div>
<div style={mystyle}>Death: {globalData.deaths.value}</div>
<div style={mystyle}>Last Update: {globalData.lastUpdate}</div>
<Chart confirmed={globalData.confirmed.value} recovered={globalData.recovered.value} death={globalData.deaths.value}/>
</>
:
countryData&&!globalSelected&&
<>
<div style={mystyle}>Confirmed: {countryData.confirmed.value}</div>
<div style={mystyle}>Recovered:{countryData.recovered.value}</div>
<div style={mystyle}>Death: {countryData.deaths.value}</div>
<div style={mystyle}>Last Update: {countryData.lastUpdate}</div>
<Chart confirmed={countryData.confirmed.value} recovered={countryData.recovered.value} death={countryData.deaths.value}/>
</>
}
</div>
<select onChange={getCountry}>
<option value="Global"> Global</option>
{countries&&
countries.map((item,idx)=>
 <option key={idx} value={item.name}> {item.name}</option>
  )}
  </select>

    </div>
  );
}

export default App;
