import Ai from "../../assets/react.svg";
import people from "../../assets/react.svg";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row" id="home">
      <div className="flex-1 flex flex-col justify-center items-start m-5">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
          Build Stunning 3D Models with AI
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-6">
          Transform your ideas into high-quality 3D models effortlessly. Whether
          you're designing for games, animations, or virtual reality, our
          AI-powered tools make it seamless.
        </p>
        <div className="w-full flex flex-row mt-8">
          <input
            type="email"
            placeholder="Your Email Address"
            className="flex-1 min-h-[50px] p-4 bg-gray-800 border-2 border-gray-800 text-white rounded-l-md outline-none"
          />
          <button className="flex-none min-h-[50px] px-6 bg-red-500 border-2 border-red-500 text-white font-semibold rounded-r-md">
            Get Started
          </button>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-8">
          <img src={people} alt="people" className="w-44 h-10" />
          <p className="text-sm text-gray-300 text-center md:ml-4 mt-2 md:mt-0">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={Ai} alt="ai" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Header;
