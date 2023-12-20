import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'



const Contact = () => {
  return (
    <div>
    
<section className="c-wrapper">

 <div className = "paddings innerWidth flexCenter c-container">
  <div className=' flexColStart c-left'>
    
  <span className= "orangeText">Our Contacts </span>
  <span className='primaryText'>Easy to Contact us </span>
  <span className = "secondaryText">We always ready to help by providijng the best services for you.
  We beleive a good blace to live can make your life better</span>

 <div className='flexColStart contactModes'>
 <div className='flexStart row '>

 {/*second mode*/}
 
 <div className="flexColCenter mode">
  <div className='flexStart'>
  <div className='flexCenter icon'>
 <MdCall size={25}/>

  </div>
  <div className='flexColStart detail'>
  <span className = "primaryText">Call</span>
  <span className="secondaryText">011 -25-25</span>
  </div>
  </div>
<div className='flexCenter button'>Call Now </div>

 </div>
 </div>

{/*second mode*/}
<div className='flexStart row'>
<div className="flexColCenter mode">
  <div className='flexStart'>
  <div className='flexCenter icon'>
 <BsFillChatDotsFill size={25}/>

  </div>
  <div className='flexColStart detail'>
  <span className = "primaryText">Call</span>
  <span className='secondaryText'>011 -25-25</span>
  </div>
  </div>
<div className='flexCenter button'>Chat  Now </div>

 </div>

{/*fourth Mode */}
<div className='flexStart row'>
<div className="flexColCenter mode">
  <div className='flexStart'>
  <div className='flexCenter icon'>
 <BsFillChatDotsFill size={25}/>

  </div>
  <div className='flexColStart detail'>
  <span className = "primaryText">Call</span>
  <span className='secondaryText'>011 -25-25</span>
  </div>
  </div>
<div className='flexCenter button'>Chat  Now </div>

 </div>

 {/* fifth mode */}

 <div className="flexColCenter mode">
  <div className='flexStart'>
  <div className='flexCenter icon'>
 <HiChatBubbleBottomCenter size={25}/>

  </div>
  <div className='flexColStart detail'>
  <span className = "primaryText">Call</span>
  <span className='secondaryText'>011 -25-25</span>
  </div>
  </div>
<div className='flexCenter button'>Chat  Now </div>

 </div>
 </div>



 </div>
 </div>
 
 </div>

  </div>


  <div className = "c-right">
 <div className='image-container'>

 <img src='./contact.jpg' alt='' />
 </div>

  </div>



</section>








    </div>
  )
}

export default Contact
