import logo from "../../assets/react.svg";

const Footer = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-900 text-white py-16 px-6"
      id="contact"
    >
      <div className="text-center mb-12 w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight gradient-text">
          Do you want to step into the future before others
        </h1>
      </div>
      <div className="border border-white px-6 py-3 cursor-pointer mb-24 text-lg font-medium">
        Request Early Access
      </div>
      <div className="flex flex-wrap justify-between w-full max-w-6xl text-left">
        <div className="m-4 w-60 flex flex-col">
          <img src={logo} alt="gpt3" className="w-28 h-8 mb-4" />
          <p className="text-sm">Likan Shrestha, All Rights Reserved</p>
        </div>
        <div className="m-4 w-60">
          <h4 className="text-lg font-bold mb-3">Links</h4>

          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="m-4 w-60">
          <h4 className="text-lg font-bold mb-3">Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="m-4 w-60">
          <h4 className="text-lg font-bold mb-3">Get in touch</h4>
          <p>Auburn, Sydney</p>
          <p>123-45678</p>
          <p>info@likanshrestha.com.np</p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        <p>© 2025 3D Modeling. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
