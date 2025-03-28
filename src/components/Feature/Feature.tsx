const Feature = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="w-full flex flex-row justify-between items-start m-4">
      <div className="flex-1 max-w-[180px] mr-8">
        <div className="w-[38px] h-[3px] bg-gradient-to-r from-pink-500 to-yellow-500 shadow-md mb-1" />
        <h1 className="text-white font-bold text-lg leading-6 tracking-tight">
          {title}
        </h1>
      </div>
      <div className="flex-2 max-w-[390px] flex">
        <p className="text-gray-300 text-base font-medium leading-6">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
