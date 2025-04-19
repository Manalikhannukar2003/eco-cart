import React from 'react';
import { FaClinicMedical } from 'react-icons/fa';
import ProductCategory from '../../components/ProductCategory';

const Medicine = () => {
    const medicineProducts = [
        {
            id: 1,
            name: "Herbal Immunity Booster",
            description: "Natural immunity booster made from organic herbs and spices. Supports overall wellness.",
            price: 499,
            image: "https://i.pinimg.com/736x/a7/fc/2c/a7fc2c5b9209ab64ba9c1e5eaeb1133c.jpg",
            biodegradability: 9,
            sustainability: 8,
            recyclability: 7,
            ratings_explanation: {
                biodegradability: "Natural herbal ingredients",
                sustainability: "Sustainably sourced herbs",
                recyclability: "Eco-friendly packaging"
            }
        },
        {
            id: 2,
            name: "Organic Cough Syrup",
            description: "Chemical-free cough syrup made with honey, tulsi, and other natural ingredients.",
            price: 299,
            image: "https://i.pinimg.com/474x/d0/c7/93/d0c793a3fb40c224a1d10d3cafa99be9.jpg",
            biodegradability: 8,
            sustainability: 9,
            recyclability: 8,
            ratings_explanation: {
                biodegradability: "100% natural ingredients",
                sustainability: "Organic farming practices",
                recyclability: "Glass bottle packaging"
            }
        },
        {
            id: 3,
            name: "Ayurvedic Pain Balm",
            description: "Traditional ayurvedic balm for headache and body pain relief. Made with natural oils.",
            price: 199,
            image: "https://i.pinimg.com/474x/13/5f/0a/135f0ab31b2a31d14c4cb950d937bb1e.jpg",
            biodegradability: 9,
            sustainability: 8,
            recyclability: 7,
            ratings_explanation: {
                biodegradability: "Natural oil-based formula",
                sustainability: "Traditional preparation methods",
                recyclability: "Minimal packaging waste"
            }
        },
        {
            id: 4,
            name: "Herbal Digestive Tablets",
            description: "Natural digestive aid tablets made from organic herbs. Promotes healthy digestion.",
            price: 349,
            image: "https://i.pinimg.com/474x/a4/57/8e/a4578eb7ee9246b7ad4d03840afef4b0.jpg",
            biodegradability: 8,
            sustainability: 9,
            recyclability: 8,
            ratings_explanation: {
                biodegradability: "Plant-based ingredients",
                sustainability: "Sustainable harvesting",
                recyclability: "Eco-conscious packaging"
            }
        },
        {
            id: 5,
            name: "Organic Multivitamin",
            description: "Organics Whole Food Multivitamin 60 Veg Capsules",
            price: 599,
            image: "https://i.pinimg.com/474x/1e/d1/05/1ed1058a2dac9715a660fa388b30d0bc.jpg",
            biodegradability: 9,
            sustainability: 8,
            recyclability: 7,
            ratings_explanation: {
                biodegradability: "Natural herb blend",
                sustainability: "Responsibly sourced",
                recyclability: "Recyclable container"
            }
        },
        {
            id: 6,
            name: "Herbal Drink",
            description: "Plant Based Herbal Tonics Packaging Design | Design Ispiration | Organic Natural Herbal Drink Branding | Organic Natural Herbal Drink",
            price: 799,
            image: "https://i.pinimg.com/474x/b2/a6/46/b2a64684cc5e5c891a544bcc02087de2.jpg",
            biodegradability: 1,
            sustainability: 2,
            recyclability: 3,
            ratings_explanation: {
                biodegradability: "Natural healing ingredients",
                sustainability: "Eco-friendly production",
                recyclability: "Sustainable packaging"
            }
        }
    ];

    return (
        <ProductCategory 
            category="Natural Medicine"
            icon={<FaClinicMedical />}
            description="Discover our range of natural and herbal medicines. Each product is carefully formulated using traditional knowledge and sustainable practices."
            products={medicineProducts}
        />
    );
};

export default Medicine; 