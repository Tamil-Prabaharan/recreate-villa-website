import React from 'react'
import './App.css'
// import logo  from './image/logo-rv-03.png';
import backone  from './image/office-building-2023-11-27-05-26-04-utc.jpg';
// import tr1  from './image/house-2023-11-27-05-11-15-utc.jpg';
// import tr2  from './image/luxury-residential-building-2023-11-27-05-05-22-utc.jpg';
// import tr3  from './image/business-people-meeting-together-about-real-estate-2023-12-14-04-23-58-utc.jpg';

<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"></link>

const App = () => {

  return (
		// <i class="fa-solid fa-phone"></i>
		// <i class="fa-solid fa-envelope"></i>
    // <i class="fa-regular fa-envelope"></i>
		// <i class="fa-brands fa-facebook"></i>
		// <i class="fa-brands fa-linkedin-in"></i>
		// <i class="fa-brands fa-google"></i>
		// <i class="fa-brands fa-square-facebook"></i>
		// <i class="fa-brands fa-linkedin"></i>
		// // <i class="fa-regular fa-envelope"></i>
    // <i class="fa-brands fa-twitter"></i>
    // <i class="fa-brands fa-instagram"></i>
		// <i class="fa-regular fa-clock"></i>
		// <i class="fa-solid fa-bars"></i>
		// <i class="fa-solid fa-arrow-up"></i>
		// <i class="fa-solid fa-location-dot"></i>
    // <i class="fa-solid fa-file"></i>
    // <i class="fa-solid fa-image"></i>
    // <i class="fa-solid fa-user"></i>
    // <i class="fa-solid fa-magnifying-glass"></i>
    // <i class="fa-solid fa-list"></i>
	
    <>
        <div className='navbar1'> 
          <div className='left'>
            <p> <i class="fa-regular fa-envelope"></i> info@website.com | <i className="fa-solid fa-phone"></i>  +33 877 554 332</p>
          </div>
          <div className='right'>
            <div className='backicon'><i class="fa-brands fa-facebook"></i></div>
            <div className='backicon'><i class="fa-brands fa-twitter"></i></div>
            <div className='backicon'><i class="fa-regular fa-envelope"></i></div>
            <div className='backicon'><i class="fa-brands fa-instagram"></i></div>
          </div>
        </div>

          <img src={backone} alt="none" className='backimg' style={{opacity:'0.5'}}></img>
          <div className='backgradient' style={{ backgroundColor: 'yellow',marginTop:'-700px'}}></div>

        <div></div>

        <div className='h'>

        </div>
    </>
    
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
