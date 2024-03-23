import React from "react";
import Features from "./Features";

const FeaturesComp = () => {
  return (
    <main className="flex md:flex-row flex-col gap-10 md:gap-0 justify-evenly my-10 md:my-20">
      <Features
        src="images/icons/icon-delivery.svg"
        title="Free and fast delivery"
        text="Free delivery for all order above $140"
      />
      <Features
        src="images/icons/icon-service.svg"
        title="24/7 customer service"
        text="Friendly 24/7 support"
      />
      <Features
        src="images/icons/icon-secure.svg"
        title="Money back guarantee"
        text="We return money within 30 days"
      />
    </main>
  );
};

export default FeaturesComp;
