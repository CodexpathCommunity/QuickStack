import Image from "next/image";

function Hero() {
  return (
    <div
      className="
      h-full  w-full text-white 
      relative bg-gradient-to-r from-[#03056b] via-[#7703ef] to-[#35d4fb]
        flex flex-col items-stretch justify-evenly p-10 sm:p-20 sm:flex-row
        "
    >
      <div className="max-w-screen-xl m-auto flex flex-col sm:flex-row align-center justify-evenly">
        <div
          className="
            flex flex-col items-start w-full sm:w-1/2 justify-center 
            "
        >
          <h4 className="text-lg mb-1">
            Our courses is making for aspiring Fullstack developers to actualize
            their dreams.
          </h4>
          <h2 className="text-2xl sm:text-4xl mb-6">
            With a collection of best resources we pace up your learning curve.
          </h2>
          <h4 className="text-lg mb-8">
            Our courses is making for aspiring Fullstack developers to actualize
            their dreams.
          </h4>
          <button className="btn">Start Free</button>
        </div>
        <img src="/images/edu.png" className="w-full sm:w-1/2" />
      </div>
    </div>
  );
}

export default Hero;
