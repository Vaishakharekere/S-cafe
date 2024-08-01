import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import './App.css';
import './index.css';


const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const MenuPage = lazy(() => import('./pages/Menu'));
const Order = lazy(() => import('./components/Order'));
const Payment = lazy(() => import('./components/Payment'));
const Specials = lazy(() => import('./components/Specials'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FeedbackPage = lazy(() => import('./pages/FeedbackPage'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const UserDashboard = lazy(() => import('./pages/UserDashboard'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));


const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
