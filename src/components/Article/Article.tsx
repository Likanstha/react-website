const Article = ({
  imgURL,
  date,
  title,
}: {
  imgURL: string;
  date: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col w-full h-full bg-[#123456]">
      {" "}
      {/* Replace bg-[#123456] with your footer color */}
      {/* Article Image */}
      <div className="w-full h-full bg-[#789abc]">
        {" "}
        {/* Replace bg-[#789abc] with your bg color */}
        <img src={imgURL} alt="blog" className="w-full h-full object-cover" />
      </div>
      {/* Article Content */}
      <div className="flex flex-col justify-between p-4 h-full">
        <div>
          <p className="text-white font-bold text-xs leading-9">{date}</p>
          <h3 className="text-white font-extrabold text-xl leading-7 cursor-pointer">
            {title}
          </h3>
        </div>
        <p className="text-white font-bold cursor-pointer">Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
