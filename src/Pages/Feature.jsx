import { useLoaderData } from "react-router-dom";
import Navber from "../Components/Navber";
import FeatureCard from "../Components/featureCard";

const Feature = () => {
  const features = useLoaderData();

  return (
    <div>
      <Navber></Navber>
      <div className="">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature}></FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default Feature;
