import Article from "../../components/Article/Article";
import blog01 from "../../assets/react.svg";
import blog02 from "../../assets/react.svg";
import blog03 from "../../assets/react.svg";
import blog04 from "../../assets/react.svg";
import blog05 from "../../assets/react.svg";

const Blog = () => {
  return (
    <div className="flex flex-col py-16 px-4 md:px-8" id="blog">
      {/* Blog Heading */}
      <div className="mb-20 text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-200 leading-tight">
          A lot is happening, We are blogging about it.
        </h1>
      </div>

      {/* Blog Content */}
      <div className=" flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
        {/* Main Article (Group A) */}
        <div className="flex-1">
          <Article
            imgURL={blog01}
            date="26 Sept 2022"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
        </div>

        {/* Other Articles (Group B) */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-2">
          <Article
            imgURL={blog02}
            date="26 Sept 2022"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
          <Article
            imgURL={blog03}
            date="26 Sept 2022"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
          <Article
            imgURL={blog04}
            date="26 Sept 2022"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
          <Article
            imgURL={blog05}
            date="26 Sept 2022"
            title="GPT-3 and Open AI is the future. Let us explore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
