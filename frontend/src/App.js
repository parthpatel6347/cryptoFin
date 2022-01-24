import { Fragment, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthState from './context/auth/AuthState';
import Login from './views/auth/Login';
import Logout from './views/auth/Logout';
import Register from './views/auth/Register';
import Coin from './views/Coin';
import Dashboard from './views/Dashboard';
import Portfolio from './views/Portfolio';
import PrivateRoute from './views/PrivateRoute';
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import NotFound from './views/NotFound';





const App = () => {

  return (
    <ThemeProvider theme={theme}>
    <AuthState>
        <Router>
        <Fragment>
        <div className='App'>
          <Navbar/>
          <Routes>
            <Route path='/login' element={<Login/>} exact />
            <Route path='/register' element={<Register/>} exact />
            <Route path='/coins/:id' element={<Coin/>} exact />
            <Route path='/portfolio' element={<PrivateRoute/>} exact >
              <Route path='/portfolio' element={<Portfolio/>} exact />
            </Route>     
            <Route path='/dashboard' element={<Dashboard/>} exact />
            <Route path='*' element={<NotFound/>}/>
          </Routes>
          </div>
          </Fragment>
        </Router>
      </AuthState>
      </ThemeProvider>
  );
};

export default App;



// import React from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie'

// class App extends React.Component {
// 	state = {
//         token : '',
//     };
// 	componentDidMount(){
// 		const csrftoken = Cookies.get('csrftoken');
// 		this.setState({token : csrftoken})
// 	}


// 	handleSubmit = (e) => {
//         e.preventDefault();
  
//         axios
//             .post("http://localhost:8000/api/auth/token/login", {
// 				password: "portal2rocks",
// 				email: "p@example.com"
// 			},
// 			// {headers: {
// 			// 	'X-CSRFToken': this.state.token
// 			//   }
// 			// }
// 			)
//             .then((res) => {
//                 console.log(res.data)
//             })
//             .catch((err) => {});
//     };

// render() {
// 	return(
// 	<div>
// 		<form onSubmit={this.handleSubmit}>
// 		{/* <input type="hidden" name="csrfmiddlewaretoken" value={this.state.token} /> */}
// 			<button type="submit">Submit</button>
// 		</form>
// 	</div>
// 	);
// }
// }

// export default App;
