const CTA = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8 md:p-16 mx-4 md:mx-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-100">
      <div className="flex flex-col">
        <p className="text-gray-800 font-medium text-sm md:text-base leading-7">
          Request Early Access to Get Started
        </p>
        <h3 className="text-black font-extrabold text-2xl md:text-3xl leading-tight md:leading-snug mt-2">
          Register today & start exploring the endless possibilities.
        </h3>
      </div>
      <div className="flex items-center justify-center mt-4 md:mt-0 ml-0 md:ml-4">
        <button className="bg-black text-white text-lg font-bold py-3 px-6 rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;
