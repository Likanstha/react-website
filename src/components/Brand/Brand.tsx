import google from "../../assets/google.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import slack from "../../assets/slack.png";
import shopify from "../../assets/shopify.png";

const Brand = () => {
  return (
    <div className="flex flex-wrap justify-center items-center py-8">
      <div className="flex justify-center items-center max-w-[150px] min-w-[120px] m-4">
        <img src={shopify} alt="shopify" className="w-full h-auto" />
      </div>
      <div className="flex justify-center items-center max-w-[150px] min-w-[120px] m-4">
        <img src={atlassian} alt="atlassian" className="w-full h-auto" />
      </div>
      <div className="flex justify-center items-center max-w-[150px] min-w-[120px] m-4">
        <img src={dropbox} alt="dropbox" className="w-full h-auto" />
        <div className="flex justify-center items-center max-w-[150px] min-w-[120px] m-4">
          <img src={google} alt="google" className="w-full h-auto" />
        </div>
        <div className="flex justify-center items-center max-w-[150px] min-w-[120px] m-4">
          <img src={slack} alt="slack" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
