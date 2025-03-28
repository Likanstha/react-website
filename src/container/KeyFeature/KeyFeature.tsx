import Feature from "../../components/Feature/Feature";

const featuresData = [
  {
    title: "Realistic 3D Rendering",
    text: "Create stunning, lifelike 3D models with advanced rendering techniques. Enhance realism with lighting, textures, and shading.",
  },
  {
    title: "Optimized for Performance",
    text: "Ensure smooth performance with optimized polygon counts, efficient textures, and seamless animations for real-time applications.",
  },
  {
    title: "Seamless Integration",
    text: "Easily integrate 3D models into various platforms, including web, mobile, and VR applications for immersive experiences.",
  },
  {
    title: "Customizable and Scalable",
    text: "Adapt 3D models to different use cases, from gaming to industrial design, with scalable assets and customizable features.",
  },
];

const KeyFeature = () => {
  return (
    <div
      className="w-full flex flex-col md:flex-row justify-between p-8"
      id="features"
    >
      <div className="flex-1 flex flex-col justify-start items-start md:mr-20 text-left">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
          Unlock the Power of 3D Modeling. Elevate Your Designs with Advanced
          Techniques.
        </h1>
        <p className="text-gray-400 text-lg font-medium mt-6">
          Explore the Future of 3D Visualization Today.
        </p>
      </div>
      <div className="flex-1.5 flex flex-wrap flex-col justify-start items-center">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default KeyFeature;
