import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div>
      <>
        <div className=" bg-gray-200  dark:bg-gray-800  py-12 flex flex-wrap items-center  justify-center  ">
          <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
            <div className=" h-32 overflow-hidden">
              <img
                className="w-full"
                src="https://i.ibb.co.com/18VK7Cv/cover.png"
                alt=""
              />
            </div>
            <div className="flex justify-center px-5  -mt-12">
              <img
                className="h-32 w-32 bg-white p-2 rounded-full   "
                src={user?.photoURL}
                alt=""
              />
            </div>
            <div className=" ">
              <div className="text-center px-14">
                <h2 className="text-gray-800 text-3xl font-bold">
                  {user?.displayName}
                </h2>
                <a
                  className="text-gray-400 mt-2 hover:text-blue-500"
                  href="https://www.instagram.com/immohitdhiman/"
                  target="BLANK()"
                >
                  @{user?.displayName?.toLowerCase().replace(/\s+/g, "")}
                </a>
                <p className="mt-2 text-gray-500 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </p>
              </div>
              <hr className="mt-6" />
              <div className="flex  bg-gray-50 ">
                <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                  <p>
                    <span className="font-semibold">2.5 k </span> Followers
                  </p>
                </div>
                <div className="border" />
                <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                  <p>
                    {" "}
                    <span className="font-semibold">2.0 k </span> Following
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Profile;
