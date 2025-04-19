import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import ProductCategory from '../../components/ProductCategory';

const Haircare = () => {
    const hairProducts = [
        {
            id: 1,
            name: "Herbal Shampoo Bar",
            description: "Crafted with natural herbs and essential oils, this zero-waste shampoo bar ensures gentle care for your hair while protecting the planet",
            price: 399,
            image: "https://i.pinimg.com/474x/78/ad/be/78adbead8c636d21939220544e1bfa6d.jpg",
            biodegradability: 9,
            sustainability: 9,
            recyclability: 9,
            ratings_explanation: {
                biodegradability: "100% natural ingredients that decompose easily",
                sustainability: "Zero-waste, plastic-free packaging",
                recyclability: "Paper packaging, fully recyclable"
            }
        },
        {
            id: 2,
            name: "Tea Tree Shampoo",
            description: "Nourishing shampoo and conditioner with tea tree oil and aloe vera",
            price: 299,
            image: "https://i.pinimg.com/474x/62/6e/bc/626ebc04322709600e2e35e05dcf67a7.jpg",
            biodegradability: 6,
            sustainability: 2,
            recyclability: 4,
            ratings_explanation: {
                biodegradability: "Natural ingredients, easily biodegradable",
                sustainability: "Sustainably sourced coconut milk",
                recyclability: "Glass bottle with minimal plastic"
            }
        },
        {
            id: 3,
            name: "Hydrating Shampoo Bar",
            description: "Hydrating shampoo bar with cocoa butter and cedarwood",
            price: 469,
            image: "https://i.pinimg.com/736x/13/9d/8c/139d8c9bdac412f3ce84f175d287c765.jpg",
            biodegradability: 8,
            sustainability: 9,
            recyclability: 7,
            ratings_explanation: {
                biodegradability: "Natural bamboo charcoal base",
                sustainability: "Sustainable bamboo source",
                recyclability: "Partially recyclable packaging"
            }
        },
        {
            id: 4,
            name: "Pure Shampoo",
            description: "Pure Precious Shampoo with exclusive 'pure complex' (certified 100% organic extracts) gently cleanses and repairs, nourishes all fragile dry or weak hair types.",
            price: 499,
            image: "https://i.pinimg.com/474x/89/de/d6/89ded6026822f508e2034a36abe92c61.jpg",
            biodegradability: 9,
            sustainability: 8,
            recyclability: 8,
            ratings_explanation: {
                biodegradability: "Pure aloe vera base, fully biodegradable",
                sustainability: "Sustainably grown aloe vera",
                recyclability: "Recyclable glass jar"
            }
        },
        {
            id: 5,
            name: "Shampoo Cream",
            description: "Repair damaged hair with this SLS-free cream repair shampoo, made with protein-rich silken tofu that restores the strength of over processed hair.",
            price: 349,
            image: "https://i.pinimg.com/736x/1c/35/13/1c351349f902acaf213ec6483b74224c.jpg",
            biodegradability: 1,
            sustainability: 2,
            recyclability: 3,
            ratings_explanation: {
                biodegradability: "Solid bar format, no liquid waste",
                sustainability: "Fair trade argan oil",
                recyclability: "Zero-waste packaging"
            }
        },
        {
            id: 6,
            name: "Organic Alovera Shampoo",
            description: "With a combination of Aloe Vera and a select blend of naturally derived cleansers, this soothing shampoo leaves the hair feeling silky soft, nourished and looking beautifully glossy.",
            price: 599,
            image: "https://i.pinimg.com/474x/d9/59/8d/d9598d73556cccbbc95fa22447aca044.jpg",
            biodegradability: 9,
            sustainability: 9,
            recyclability: 8,
            ratings_explanation: {
                biodegradability: "Pure natural oils, fully biodegradable",
                sustainability: "Locally sourced ingredients",
                recyclability: "Glass bottle with dropper"
            }
        }
    ];

    return (
        <ProductCategory
            category="Haircare Products"
            icon={<FaLeaf />}
            description="Discover our range of eco-friendly shampoos, conditioners, and hair treatments that nourish your hair while protecting the environment."
            products={hairProducts}
        />
    );
};

export default Haircare; 