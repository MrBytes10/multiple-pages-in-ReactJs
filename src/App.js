// Filename - App.js

import React from "react";
import Navbar from "./components/navBar/Navbar";

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/index" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route path="/sign-up" element={<SignUp />}	/>
			</Routes>
		</Router>
	);
}

export default App;
