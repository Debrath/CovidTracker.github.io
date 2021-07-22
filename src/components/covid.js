import React, { useEffect, useState } from 'react'
import './App.css';

const Covid = () => {
    
    const [data, setData] = useState([]);

    const getCovidData = async () => {
       try{
           const res= await fetch('https://api.covid19india.org/data.json');
            const actualdata = await res.json();
            console.log(actualdata.statewise[0]);
            setData(actualdata.statewise[0]);
        }
       catch(err){
           console.log(err);
       }
    }

    useEffect(() => {
         getCovidData();
    }, []);

   return (
    <>
    <section>
      <h1 class="zoomin">🔴Live</h1>
      <h2>Live Covid Tracker of India💕</h2>
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <h3>Our</h3>
    <h1>Country</h1>
    <h2></h2>
    </div>
    <div class="flip-card-back">
    <h3>Country</h3> 
      <h1>India💕</h1>
      
    </div>
  </div>
</div>
 <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front2">
    <h3>Total</h3>
    <h1>Confirmed</h1>
    
    </div>
    <div class="flip-card-back2">
      <h3>Confirmed</h3> 
      <h1>{data.confirmed}</h1>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front3">
    <h3>Total</h3>
    <h1>Active Cases</h1>
    </div>
    <div class="flip-card-back3">
    <h3>Active</h3> 
    <h1>{data.active}</h1>
      
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front4">
    <h3>Total</h3>
    <h1>Recovered Cases</h1>
    </div>
    <div class="flip-card-back4">
    <h3>Recovered</h3> 
      <h1>{data.recovered}</h1>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front5">
    <h3>Total</h3>
    <h1>Death Cases</h1>
    </div>
    <div class="flip-card-back5">
    <h3>Deaths</h3> 
      <h1>{data.deaths}</h1>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front6">
    <h3>Updated on</h3>
    <h1>Date & Time</h1>
    </div>
    <div class="flip-card-back6">
    <h3>Updated on</h3> 
      <h1>{data.lastupdatedtime}</h1>
    </div>
  </div>
</div>


<div class="flip-card7">
  <div class="flip-card-inner">
    <div class="flip-card-front7">
    <h1><div class="simple" ><b>Made with 💖 by</b></div></h1>
    <h1>⭐Apka Dost⭐<br/>👦</h1>
    </div>
    <div class="flip-card-back7">
    <br/><br/>👇🙏👇<br/><h1 class="simple2">Debasish Rath</h1>👆🙏👆
      
    </div>
  </div>
</div>
      
    </section>
    </>
    );
}

export default Covid
