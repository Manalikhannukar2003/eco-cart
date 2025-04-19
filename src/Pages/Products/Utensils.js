import React from 'react';
import { FaUtensils } from 'react-icons/fa';
import ProductCategory from '../../components/ProductCategory';

const Utensils = () => {
    const utensilProducts = [
        {
            id: 1,
            name: "Bamboo Cutlery Set",
            description: "Eco-friendly bamboo cutlery set including fork, spoon, knife, and chopsticks with cotton carry pouch.",
            price: 299,
            image: "https://i.pinimg.com/474x/5d/1a/eb/5d1aeb7087dea2fe361dc675aaf26fde.jpg",
            biodegradability: 9,
            sustainability: 9,
            recyclability: 8,
            ratings_explanation: {
                biodegradability: "Made from 100% natural bamboo",
                sustainability: "Sourced from sustainable bamboo forests",
                recyclability: "Fully biodegradable materials"
            }
        },
        {
            id: 2,
            name: "Bamboo Straw Set",
            description: "Reusable bamboo drinking straws with cleaning brush, perfect alternative to plastic straws.",
            price: 199,
            image: "https://i.pinimg.com/474x/ee/82/53/ee82539943c8721a92b4897ad3668cbc.jpg",
            biodegradability: 5,
            sustainability: 2,
            recyclability: 1,
            ratings_explanation: {
                biodegradability: "Natural bamboo material",
                sustainability: "Eco-friendly harvesting methods",
                recyclability: "Compostable product"
            }
        },
        {
            id: 3,
            name: "Bamboo Bowl Set",
            description: "Set of 4 handcrafted bamboo bowls, perfect for salads and soups. Natural and chemical-free.",
            price: 599,
            image: "https://i.pinimg.com/474x/ea/df/8c/eadf8c856afff0e07ffe25880b27afb1.jpg",
            biodegradability: 8,
            sustainability: 9,
            recyclability: 8,
            ratings_explanation: {
                biodegradability: "Pure bamboo construction",
                sustainability: "Traditional crafting methods",
                recyclability: "Natural materials"
            }
        },
        {
            id: 4,
            name: "Bamboo Serving Tray",
            description: "Elegant bamboo serving tray with handles, ideal for serving drinks and snacks.",
            price: 449,
            image: "https://i.pinimg.com/474x/df/5f/fc/df5ffce18388bc1d66cdc359515416cb.jpg",
            biodegradability: 8,
            sustainability: 8,
            recyclability: 7,
            ratings_explanation: {
                biodegradability: "Natural bamboo material",
                sustainability: "Sustainable production",
                recyclability: "Eco-friendly finish"
            }
        },
        {
            id: 5,
            name: "Bamboo Kitchen Tools",
            description: "5-piece bamboo kitchen utensil set including spatula, spoons, and turner.",
            price: 399,
            image: "https://i.pinimg.com/474x/47/d3/ca/47d3ca90661a9ed8a9e5e53a4663eb0d.jpg",
            biodegradability: 9,
            sustainability: 9,
            recyclability: 8,
            ratings_explanation: {
                biodegradability: "100% natural bamboo",
                sustainability: "Responsibly sourced",
                recyclability: "Biodegradable materials"
            }
        },
        {
            id: 6,
            name: "Bamboo Lunch Box",
            description: "Two-tier bamboo lunch box with secure strap, perfect for meal prep and storage.",
            price: 649,
            image: "https://i.pinimg.com/474x/0c/05/ed/0c05ed357f9dbc77b7cc2c1d8837b6bc.jpg",
            biodegradability: 8,
            sustainability: 8,
            recyclability: 7,
            ratings_explanation: {
                biodegradability: "Eco-friendly materials",
                sustainability: "Sustainable bamboo source",
                recyclability: "Reusable design"
            }
        }
    ];

    return (
        <ProductCategory 
            category="Bamboo Utensils"
            icon={<FaUtensils />}
            description="Explore our collection of eco-friendly bamboo utensils and sustainable kitchenware. Each piece is crafted with care for both your kitchen and the environment."
            products={utensilProducts}
        />
    );
};

export default Utensils; 