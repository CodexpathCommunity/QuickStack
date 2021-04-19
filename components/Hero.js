import Image from "next/image";

function Hero() {
  return (
    <div
      className="
      h-[94vh] sm:h-[50vh] w-full text-white relative bg-gradient-to-r from-[#03056b] via-[#7703ef] to-[#35d4fb]
        flex flex-col items-stretch justify-evenly w-full p-10 sm:p-20 sm:flex-row
        "
    >
      <div
        className="
            flex flex-col items-start w-full sm:w-1/3
            "
      >
        <h4 className="text-lg mb-2">
          Our courses is making for aspiring Fullstack developers to actualize
          their dreams.
        </h4>
        <h2 className="text-2xl sm:text-4xl mb-4">
          With a collection of best resources we pace up your learning curve.
        </h2>

        <button className="btn">Start Free</button>
      </div>
      <img src="/images/learncode.svg" className="w-full sm:w-1/3" />
    </div>
  );
}

export default Hero;
