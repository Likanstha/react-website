import Feature from "../../components/Feature/Feature";

const ThreeDModel = () => {
  return (
    <div className="mx-20">
      <div
        className="flex flex-col p-8 shadow-lg m-5"
        style={{ background: "linear-gradient(to bottom, #032c54, #386da0)" }}
        id="threeDModel"
      >
        <div className="flex mb-8">
          <Feature
            title="What is 3D Modeling?"
            text="3D modeling is the process of creating a mathematical representation of a three-dimensional object or shape. These models are used in various industries such as gaming, film, architecture, and manufacturing."
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center my-8">
          <h1 className="text-white text-4xl font-bold leading-snug max-w-lg">
            Unlock endless possibilities with 3D modeling
          </h1>
          <p className="text-gray-300 text-lg cursor-pointer mt-4 md:mt-0">
            Explore More Models
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <Feature
            title="Game Design"
            text="3D models are widely used in game development to create immersive environments and characters."
          />
          <Feature
            title="Architecture"
            text="Architects use 3D modeling to visualize and present building designs before construction begins."
          />
          <Feature
            title="Product Design"
            text="Companies use 3D models for prototyping, enabling them to refine products before manufacturing."
          />
        </div>
      </div>
    </div>
  );
};

export default ThreeDModel;
