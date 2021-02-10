import React from "react";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import ClientsSection from "./../components/ClientsSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import NewsletterSection from "./../components/NewsletterSection";
import CtaSection from "./../components/CtaSection";

function IndexPage(props) {
  return (
    <>
      <HeroSection
        color="primary"
        size="large"
        backgroundImage="https://source.unsplash.com/ugnrXk1129g/1600x800"
        backgroundImageOpacity={0.3}
        title="Koolaglass Window"
        subtitle="Welcome to KoolaGlass Window Tinting. Koolaglass Window Tinting can offer you 30 years of experience and expertise. Our goal is to provide you with an array of Industry Leading Window Film Solutions and a concise analysis of the best fit requirements for our customers rather than a 'one size fits all' mode of thinking. With today's modern home being built with an abundance of glass the need for Home Window Film has never been greater. Not only does it provide up to 99.0% UV protection from the sun's damaging rays but it also reduces the sun's radiant heat from entering your home through the glass. For an obligation free quote, call now on; 9455 5589 or 0418 844 450"
        buttonText="Get Started"
        buttonColor="indigo"
        buttonInverted={false}
        buttonPath="/contact"
      />
      <FeaturesSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Features"
        subtitle="All the features you need to move faster"
        columns={2}
      />
      <ClientsSection
        color="light"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="You're in good company"
        subtitle=""
      />
      <TestimonialsSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      />
      <NewsletterSection
        color="light"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        buttonInverted={false}
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
      <CtaSection
        color="primary"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Ready to get started?"
        buttonText="Get Started"
        buttonColor="white"
        buttonInverted={false}
        buttonPath="/pricing"
      />
    </>
  );
}

export default IndexPage;
