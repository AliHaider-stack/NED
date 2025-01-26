import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState([])
  const [data,setData] = useState([])
  const [data2,setData2] = useState([])
  const [data3,setData3] = useState({})
  const [data4,setData4] = useState({})
  const [data5,setData5] = useState({})
  const [data6,setData6] = useState({})
  const [data7,setData7] = useState({})
  const [data8,setData8] = useState({})
  const [data9,setData9] = useState({})
  const [data10,setData10] = useState({})
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
     axios.get('https://api.agify.io/?name='+inputValue).then((res)=>{
          setData5(res.data)
          console.log(data5)
        })
  };
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/userapiprofile/?format=json').then((res) => {
      setCount(res.data);
    });
  
    axios.get('http://universities.hipolabs.com/search?country=Pakistan').then((res) => {
      setData(res.data);
    });
  
    axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then((res) => {
      setData2(res.data.data);
    });
  
    axios.get('https://dog.ceo/api/breeds/image/random').then((res) => {
      setData3(res.data);
    });
  
    axios.get('https://catfact.ninja/fact').then((res) => {
      setData4(res.data); 
    });
  
    axios.get('https://api.zippopotam.us/us/33162').then((res) => {
      setData5(res.data); 
    });
    
    axios.get('https://api.ipify.org?format=json').then((res) => {
      setData6(res.data); 
    });

    axios.get('https://ipinfo.io/161.185.160.93/geo').then((res) => {
      setData7(res.data); 
    });

    axios.get('https://official-joke-api.appspot.com/random_joke').then((res) => {
      setData8(res.data); 
    });

    axios.get('https://randomuser.me/api/').then((res) => {
      setData9(res.data); 
    });

    axios.get('https://www.boredapi.com/api/activity').then((res) => {
      setData10(res.data); 
    });
  }, []);

  return (

<div>


{/* universities start */}
<table border={"1px"}>
  <tr>
    <th>Company</th>
    <th>Country</th>
    <th>Alpha Code</th>
  </tr>

  {data.map((value,index)=> {
    return(
    
    <tr key={index}>
      <td>{value.name}</td>
      <td>{value.country}</td>
      <td>{value.alpha_two_code}</td>
    </tr>)})}
<br/>
</table>
{/* universities end */}




{/* Data USA */}
<table border={"1px"}>
  <tr>
    <th>Country</th>
    <th>Year</th>
    <th>Population</th>
  </tr>
  {data2.map((value,index)=> {
    return(
    
    <tr key={index}>
      <td>{value.Nation}</td>
      <td>{value.Year}</td>
      <td>{value.Population}</td>
    </tr>)})}
 
</table>
{/* Data USA end*/}





{/* Get information about a specified ZIP code START */}
<table border={"1px"}>
  <thead>
    <tr>
      <th>State</th>
      <th>Country</th>
      <th>Latitude</th>
    </tr>
  </thead>
  <tbody>
    {data5.places && data5.places.map((place, index) => (
      <tr key={index}>
        <td>{place.state}</td>
        <td>{data5.country}</td>
        <td>{place.latitude}</td>
      </tr>
    ))}
  </tbody>
</table>
{/* Get information about a specified ZIP code END */}





{/* random cat fact start */}
<div>
  <h4>Random Cat Fact</h4>
  <p>{data4.fact}</p>
</div>
{/* random cat fact end */}





{/* dog image start */}
<div>
  <img src={data3.message}/>
</div>
{/* dog image end */}



{/* my ip start */}
<table border={"1px"}>
  <thead>
    <tr>
      <th>IP</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{data6.ip}</td>
    </tr>
  </tbody>
</table>
{/* my ip end */}


{/* IPinfo start */}
<table border={"1px"}>
  <thead>
    <tr>
      <th>IP</th>
      <th>vity</th>
      <th>region</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{data7.ip}</td>
      <td>{data7.city}</td>
      <td>{data7.region}</td>
    </tr>
  </tbody>
</table>
{/* IPinfo end */}





{/* joke start */}
<div>
  <h4>Programming joke</h4>
  <p>{data8.setup}</p>
  <p>{data8.punchline}</p>
</div>
{/* joke end */}




{/* random user start */}
<table border={"1px"}>
  <thead>
    <tr>
      <th>Gender</th>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
  </thead>
  <tbody>
    {data9.results && data9.results.map((result, index) => (
        <tr key={index}>
          <td>{result.gender}</td>
          <td>{result.name.first}</td>
          <td>{result.name.last}</td>
        </tr>
      ))}
  </tbody>
</table>
{/* random user end */}




<div>
  <h4>Activity to do</h4>
  <p>{data10.activity}</p>
</div>


   </div>
  )
}













export default App
