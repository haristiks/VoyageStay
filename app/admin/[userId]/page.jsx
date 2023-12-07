import Heading from "@/app/components/Heading";
import getAllUsers from "../actions/getAllUsers";
import Image from "next/image";
import isAdmin from "@/app/actions/isAdmin";
import ActionButton from "../components/ActionButton";



async function UserDetailsPage({ params }) {
  const { userId } = params;
  const Allusers = await getAllUsers();
  const user = Allusers.find((user) => user.id == userId);
  const Admin = await isAdmin();
  console.log("Access:", Admin);
 

  return (
    <main className="profile-page">
      <section
        className="relative block shadow-xl"
        style={{ height: "300px" }}
      ></section>
      <section className="relative py-16 bg-gray-300">
        <div className="container mx-auto px-4 ">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6 border-[1px] rounded">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src={user.image || "/images/Placeholder.png"}
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                      style={{ maxWidth: "150px" }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    {user.adminSuspended ? (
                      <ActionButton
                        actionLabel="unsuspend"
                        actionId={userId}
                      />
                    ) : (
                      <ActionButton
                        actionLabel="suspend"
                        actionId={userId}
                      />
                    )}
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {user.listings.length}
                      </span>
                      <span className="text-sm text-gray-500">Properties</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {user.reservations.length}
                      </span>
                      <span className="text-sm text-gray-500">
                        Reservations
                      </span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {user.favoriteIds.length}
                      </span>
                      <span className="text-sm text-gray-500">Favorites</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 ">
                  {user.name}
                </h3>
                <hr className="mb-4" />
                <Heading
                  title="Listings"
                  subtitle={`Property listings by ${user.name}`}
                />
                <div className="pt-10 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                  {user?.listings.map((listing) => (
                    <div
                      className="col-span-1 cursor-pointer group"
                      key={listing._id}
                    >
                      <div className="flex flex-col gap-2 w-full">
                        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                          <Image
                            fill
                            alt="Listing"
                            src={listing.imageSrc}
                            className="object-cover h-full w-full group-hover-scale-110 transition"
                          />
                        </div>
                        <div className="font-semibold text-lg">
                          {listing.title}
                        </div>
                        <div className="font-light text-neutral-500">
                          {listing.category}
                        </div>
                        <div className="flex flex-row items-center justify-center gap-1">
                          <div className="font-semibold">₹ {listing.price}</div>
                          <div className="font-light">night</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default UserDetailsPage;
