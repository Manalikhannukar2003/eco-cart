import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import ProductCategory from '../../components/ProductCategory';

const Food = () => {
    const foodProducts = [
        {
            id: 1,
            name: "Organic Quinoa",
            description: "Premium organic quinoa sourced from sustainable farms. High in protein and fiber, packed in eco-friendly packaging.",
            price: 299,
            image: "https://i.pinimg.com/474x/e3/9f/ea/e39fea97afad73d5490ff7b990759741.jpg",
            biodegradability: 9,
            sustainability: 9,
            recyclability: 9,
            ratings_explanation: {
                biodegradability: "100% biodegradable packaging",
                sustainability: "Sustainably farmed and ethically sourced",
                recyclability: "Eco-friendly paper packaging"
            }
        },
        {
            id: 2,
            name: "Organic Honey",
            description: "Pure, unprocessed wild honey collected from forest regions. Natural sweetness in a reusable glass jar.",
            price: 449,
            image: "https://i.pinimg.com/474x/c7/b0/cf/c7b0cf1ba1e990bb317f8fb3e31c2293.jpg",
            biodegradability: 8,
            sustainability: 9,
            recyclability: 8,
            ratings_explanation: {
                biodegradability: "Natural product in glass container",
                sustainability: "Supports local forest communities",
                recyclability: "Reusable glass jar packaging"
            }
        },
        {
            id: 3,
            name: "Organic Chia Seeds",
            description: "Nutrient-rich chia seeds from certified organic farms. High in omega-3, packed in zero-waste containers.",
            price: 199,
            image: "https://i.pinimg.com/474x/ac/c5/84/acc584b743f9a72738a70f683888d766.jpg",
            biodegradability: 7,
            sustainability: 6,
            recyclability: 5,
            ratings_explanation: {
                biodegradability: "Natural seeds with eco packaging",
                sustainability: "Organic farming practices",
                recyclability: "100% recyclable container"
            }
        },
        {
            id: 4,
            name: "Green Tea Leaves",
            description: "Hand-picked organic green tea leaves from sustainable gardens. Rich in antioxidants, in compostable packaging.",
            price: 349,
            image: "https://i.pinimg.com/474x/c4/c0/35/c4c03535a8441f1862a16a1303d1aad5.jpg",
            biodegradability: 9,
            sustainability: 9,
            recyclability: 8,
            ratings_explanation: {
                biodegradability: "Compostable tea leaves and packaging",
                sustainability: "Sustainable farming methods",
                recyclability: "Eco-friendly packaging materials"
            }
        },
        {
            id: 5,
            name: "Mixed Dry Fruits",
            description: "Premium selection of organic dry fruits including almonds, raisins, and cranberries. No added sugar or preservatives.",
            price: 599,
            image: "https://i.pinimg.com/474x/4a/17/2a/4a172a943a1e2395872fe117e94c39e1.jpg",
            biodegradability: 3,
            sustainability: 2,
            recyclability: 3,
            ratings_explanation: {
                biodegradability: "Natural products in glass container",
                sustainability: "Sustainably sourced and processed",
                recyclability: "Reusable and recyclable packaging"
            }
        },
        {
            id: 6,
            name: "Organic Coconut Oil",
            description: "Cold-pressed virgin coconut oil from organic farms. Pure and unrefined, perfect for cooking and skincare.",
            price: 399,
            image: "https://i.pinimg.com/474x/95/4b/46/954b46d1142ba686f00a8b4cd4ef7f83.jpg",
            biodegradability: 6,
            sustainability: 5,
            recyclability: 5,
            ratings_explanation: {
                biodegradability: "100% natural oil product",
                sustainability: "Sustainable farming practices",
                recyclability: "Glass bottle packaging"
            }
        }
    ];

    return (
        <ProductCategory 
            category="Food Products"
            icon={<FaLeaf />}
            description="Discover our range of organic, sustainably sourced food products that are good for both you and the environment."
            products={foodProducts}
        />
    );
};

export default Food; 