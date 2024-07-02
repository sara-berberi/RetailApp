import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontBar from '../components/topBarFirstpage.tsx';
import Slideshow from '../components/slideshow.tsx';
import TopCategories from '../components/topCategories.tsx';
import App from '../pages/Index.tsx';
import SingleProduct from '../components/singleProduct.tsx';
import ProductGrid from '../components/productGrid.tsx';
import AddProductForm from '../pages/addProduct.tsx';

const AllRoutes = () => {
    return (
        <Router>

            <Routes>

            <Route path='' element={<ProductGrid />} />

            </Routes>

        </Router>
    )
}

export default AllRoutes;