import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import Nopage from "./pages/Nopage.jsx";
import Layout from "./pages/Layout.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} path="home" />
          <Route path="home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
