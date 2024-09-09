import { RxLayers } from "react-icons/rx";

const HeroSection = () => {
  return (
    <div>
      <section className="pt-8 lg:pt-16 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
            <span className="font-inter text-xs font-medium text-gray-900 ml-3">
              Explore our service categories.
            </span>
            <a
              href="javascript:;"
              className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
            >
              <svg
                width={17}
                height={16}
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
            Simplify Your Life with
            <span className="text-indigo-600 ml-2">Neighbourly</span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Neighbourly connects residents with skilled workers for home
            services, making it easy to hire trusted professionals in your
            community.
          </p>

          <div className="flex justify-center items-center w-full md:w-1/2 rounded-xl bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg mb-4 mx-auto hover:shadow-lg">
            <button className="flex-1 font-bold text-xl bg-white px-2 py-2 rounded-xl ">
            Create an account
            </button>
          </div>

          {/* <div className="flex justify-center">
            <img
              src="https://pagedone.io/asset/uploads/1691054543.png"
              alt="Dashboard image"
            />
          </div> */}

        </div>
      </section>
    </div>
  );
};

export default HeroSection;
