
import React, { useState, useRef } from 'react';

const Card = ({ title, description, details }) => {
  const [showDetails, setShowDetails] = useState(false);
  const detailRef = useRef(null);

  const handleToggle = () => {
    setShowDetails(!showDetails);
    if (!showDetails) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300); // Wait for animation to start
    }
  };

  return (
    <div
      className="relative bg-white rounded-lg shadow-md p-6 text-center transition-transform hover:scale-105 cursor-pointer overflow-hidden"
      onClick={handleToggle}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      <div
        ref={detailRef}
        className={`transition-all duration-500 ease-in-out ${
          showDetails ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <p className="text-sm text-gray-700 text-left mt-4 px-2">{details}</p>
      </div>
    </div>
  );
};





function App() {
  return (
    <div className="flex flex-col items-center px-4 py-10 bg-gradient-to-r from-[#fef08a] via-[#84cc16] to-[#16a34a]">
      <h1 className="text-6xl font-bold mb-4 text-green-500">Agora-Market</h1>
      <p className="text-black text-lg mb-12 text-center max-w-xl">
        We plan to make a digital market for businesses and customers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        <Card
          title="Offer Services"
          description="Let vendors showcase their expertise and connect with customers seeking solutions ."
          details="Agora Market empowers skilled professionals and service providers to showcase what they do best. Whether you're a plumber, designer, tutor, or consultant, you can create a profile that highlights your expertise, availability, and customer reviews. This makes it easier for potential clients to find and trust you. By bridging the gap between demand and talent, Agora helps service providers grow their reach and build lasting relationships with customers."
        />
        <Card
          title="Setup an Online Shop"
          description="Enable businesses to create storefronts, manage inventory, and accept orders seamlessly ."
          details="Starting a digital storefront has never been simpler. Agora Market enables businesses to create sleek, customizable shops where they can upload products, manage inventory, and accept orders—all from one dashboard. Whether you're selling handmade crafts, electronics, or fresh produce, the platform supports secure transactions and smooth logistics. It's designed to help entrepreneurs go digital fast, without the usual tech headaches."
        />
        <Card
          title="Discover Products"
          description="Help customers explore curated listings, trending items, and local favorites . "
          details="For customers, Agora is a gateway to discovering unique and locally relevant products. From trending items to hidden gems, the marketplace is curated to reflect what people truly want. Smart filters, personalized recommendations, and vendor highlights make browsing intuitive and enjoyable. Whether you're shopping for essentials or exploring new finds, Agora makes the experience feel personal, efficient, and rewarding."
        />
      </div>
    </div>
  );
}

export default App;
