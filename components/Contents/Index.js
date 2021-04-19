import Link from "./Link";

function Contents() {
  return (
    <div className="flex flex-col w-full p-5">
      <div className="flex items-center space-x-4 ">
        <h3
          className="
        text-xl text:blue-200 p-2 font-semibold 
        p-2 border-b-4 border-border-[#03056b]  
        hover:border-[#03056b] cursor-pointer
        "
        >
          Recent
        </h3>
        <Link />
        <h3 className="text-lg text:blue-200 p-2 ">Recent</h3>
        <h3 className="text-lg text:blue-200 p-2 ">Recent</h3>
      </div>
    </div>
  );
}

export default Contents;
