import { useLoaderData } from "react-router-dom";
import Navber from "../Components/Navber";
import FeatureCard from "../Components/featureCard";

const Feature = () => {
  const features = useLoaderData();
  return (
    <div>
      <Navber></Navber>
      <div className="">
        {features?.map((afeature) => (
          <FeatureCard key={afeature.id} afeature={afeature}></FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default Feature;
