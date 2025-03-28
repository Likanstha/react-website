import possibilityImage from "../../assets/react.svg";

const Possibility = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between p-8"
      id="possibility"
    >
      <div className="flex-1 flex justify-start items-center md:mr-8">
        <img
          src={possibilityImage}
          alt="3D Model Preview"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-start items-start text-left mt-6 md:mt-0">
        <h4 className="text-lg font-medium text-cyan-400">
          Experience Next-Gen 3D Modeling
        </h4>
        <h1 className="text-4xl font-extrabold leading-tight bg-gradient-to-r from-blue-700 to-gray-500 text-transparent bg-clip-text my-4">
          Transform Your Designs into Reality
        </h1>
        <p className="text-gray-400 text-lg font-medium mb-6">
          Explore cutting-edge 3D modeling techniques to bring your ideas to
          life. From realistic rendering to seamless animation, our tools
          empower designers and engineers alike.
        </p>
        <h4 className="text-lg font-medium text-orange-400">
          Start Your 3D Journey Today
        </h4>
      </div>
    </div>
  );
};

export default Possibility;
