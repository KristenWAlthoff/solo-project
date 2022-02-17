import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import HomePage from './HomePage.jsx';
import BookDisplay from './BookDisplay.js'

//add app here

class App extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1>arches</h1>
                <BookDisplay />
            </div>
        )
    }
}

export default App;

// export default function App(props) {
//   return (
//       <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/:id" element={<BookPage />} />
//         </Routes>
//     </BrowserRouter>
//   )
// }
