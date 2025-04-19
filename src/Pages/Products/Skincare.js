import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import ProductCategory from '../../components/ProductCategory';

const Skincare = () => {
    const skincareProducts = [
        {
            id: 1,
            name: "Natural Face Serum",
            description: "Organic vitamin C serum with natural extracts",
            price: 429,
            image: "https://i.pinimg.com/474x/55/0e/81/550e812be65a00ff07c869b19a72c913.jpg",
            biodegradability: 9,
            sustainability: 8,
            recyclability: 7
        },
        {
            id: 2,
            name: "Bamboo Face Scrub",
            description: "Gentle exfoliating scrub with bamboo particles",
            price: 399,
            image: "https://i.pinimg.com/474x/ce/5d/c2/ce5dc2d814ec40c141b3dc04934e67a9.jpg",
            biodegradability: 9,
            sustainability: 9,
            recyclability: 8
        },
        {
            id: 3,
            name: "Aloe Vera Moisturizer",
            description: "100% natural aloe vera gel moisturizer",
            price: 449,
            image: "https://i.pinimg.com/474x/6a/5a/c0/6a5ac07e9606d5f4ef33535dacb489b6.jpg",
            biodegradability: 9,
            sustainability: 9,
            recyclability: 9
        },
        {
            id: 4,
            name: "Rose Water Toner",
            description: "Pure rose water toner in recyclable glass bottle",
            price: 299,
            image: "https://i.pinimg.com/474x/fc/3c/c2/fc3cc23e9591b0479bbe587cd0a79b8e.jpg",
            biodegradability: 8,
            sustainability: 9,
            recyclability: 9
        },
        {
            id: 5,
            name: "Clay Face Mask",
            description: "Detoxifying clay mask with natural minerals",
            price: 499,
            image: "https://i.pinimg.com/474x/d8/9f/67/d89f67f0d6803c230ec65bf16241391a.jpg",
            biodegradability: 8,
            sustainability: 8,
            recyclability: 8
        },
        {
            id: 6,
            name: "Organic Lip Balm",
            description: "Nourishing organic lip balm with natural ingredients",
            price: 299,
            image: "https://i.pinimg.com/474x/02/4d/9f/024d9fc0204d6320def3a704922c9ccd.jpg",
            biodegradability: 9,
            sustainability: 9,
            recyclability: 7
        }
    ];

    return (
        <ProductCategory 
            category="Skincare Products"
            icon={<FaLeaf />}
            description="Explore our eco-friendly skincare collection featuring natural and sustainable beauty products that care for both your skin and the environment."
            products={skincareProducts}
        />
    );
};

export default Skincare; 