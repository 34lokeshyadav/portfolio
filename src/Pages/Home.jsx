import React from 'react'

const Home = () => {
  return (
    <div> <span><h3>Hi,</h3></span>
    <div className="main">
    <div className="part">
    <h5>I'am Lokesh Yadav</h5> 
    <h4>Frontend Developer</h4>
    </div>
    <div id="tag">
    <i  class="ri-instagram-line"></i><i class="ri-facebook-line"></i><i class="ri-github-line"></i>
    </div>
    <button>Downlod CV</button>
    <div className="part3">
      <img src={("src/assets/Picsart.png")} alt="My photo" />
    </div>
    </div>
    </div>
  )
}

export default Home