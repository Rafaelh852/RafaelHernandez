 import React from 'react'

import Fizzbuzz from "../challenges/fizzbuzz";
import Strreverse from "../challenges/strreverse";

const arr= [<Fizzbuzz />, <Strreverse />];



const Challenges = () => {
  return (
    <section id= "Challenges" className="container-fluid py-5 bg-light headerheight textgradlight">
     <h3 className=" pb-3 container ">Coding Challenges</h3>
   
          {arr}   
          
    </section>
  )
}

export default Challenges
