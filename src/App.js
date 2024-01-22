
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectsPage from './components/pages/ProjectsPage';
import MainSection from './components/MainSection';
import AboutPage from './components/pages/AboutPage';
import ContactsPage from './components/pages/ContactsPage';
import Footer from './components/Footer';

function App() {
  return (
	<main className="flex min-h-screen flex-col bg-main">
		<Navbar/>
	<div className="container mt-24 mx-auto py-4">
	<Router>
	<Routes>
		<Route path='/' exact element={<MainSection/>} />
		<Route path='/work'  element={<ProjectsPage/>} />
		<Route path='/about'  element={<AboutPage/>} />
		<Route path='/contact' element={<ContactsPage/>} />
	</Routes>
	</Router>
	</div>
	<Footer/>
{/* <div className="container mt-24 mx-auto px-12 py-4">
<ProjectSection/>

</div> */}
    </main>
  );
}

export default App;
