import ProductSection from "./ProductSection";
import ProductGrid from "../product/ProductGrid";

// Sample product data
const products = [
  {
    id: "1",
    name: "WOMEN BREE WINDPROOF JACKET",
    image: "https://ext.same-assets.com/883735764/1926428362.webp",
    price: 529000,
    category: "Apparel",
    subcategory: "Jaket",
    colorOptions: [
      { color: "Green", colorCode: "#5a7742" },
      { color: "Off White", colorCode: "#f1f0e8" },
    ],
    href: "/d/ws-bree-windproof-jacket?color=green",
  },
  {
    id: "2",
    name: "WAIST BAG WALL RUN 1A",
    image: "https://ext.same-assets.com/1200328107/3735149309.jpg",
    price: 289000,
    originalPrice: 304000,
    category: "Bags",
    subcategory: "Tas Pinggang",
    discount: 5,
    href: "/d/waist-bag-wall-run-1a?color=black",
  },
  {
    id: "3",
    name: "WAGEN SAILOR 15L BAG",
    image: "https://ext.same-assets.com/910365346/1897713069.jpg",
    price: 359000,
    originalPrice: 479000,
    category: "Bags",
    subcategory: "Tas Punggung",
    discount: 25,
    href: "/d/wagen-sailor-15l-bag?color=black",
  },
  {
    id: "4",
    name: "WOMEN BREE SLING BAG",
    image: "https://ext.same-assets.com/4087365343/2547624522.jpg",
    price: 289000,
    category: "Bags",
    subcategory: "Shoulder Bag",
    colorOptions: [
      { color: "Blue", colorCode: "#1c3d5e" },
      { color: "Yellow", colorCode: "#e3b53b" },
      { color: "Green", colorCode: "#5a7742" },
    ],
    href: "/d/women-bree-sling-bag?color=blue",
  },
];

const FeaturedProducts = () => {
  return (
    <ProductSection title="Bundling Lebih Hemat" viewAllLink="/bundle?order=latest">
      <ProductGrid products={products} />
    </ProductSection>
  );
};

export default FeaturedProducts;
