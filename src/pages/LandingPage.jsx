import React from "react";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import UserSearch from "../components/UserSearch";
import PricingTable from "../components/PricingTable";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";


const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <ServiceCard />
      <UserSearch />
      <PricingTable />
      <ContactForm />
      <Footer/>
    </div>
  );
};

export default LandingPage;
