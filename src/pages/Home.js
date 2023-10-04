import React from "react";

const Home = () => {
  return (
    <main id="features" className="py-16 bg-yellow-100">
      <div className="container mx-auto px-2">
        <div className="grid lg:grid-cols-2 gap-y-3 gap-x-3">
          <div className="text-black text-left">
            <div>
              <h2 className="text-3xl text-neutral-700 font-extrabold text-center">
                Welcome to Dirty BIKE
              </h2>
              <p className="text-md font-bold mt-2 indent-16 text-left">
                At Dirty BIKE, we're passionate about all things cycling, and
                we're thrilled to have you here. Whether you're a seasoned
                rider, a weekend warrior, or just beginning your cycling
                journey, you've come to the right place.
              </p>
              <p className="text-md text-neutral-700 font-bold mt-2 text-left indent-16">
                Our mission is simple: to provide you with the best bikes, gear,
                and expertise to make your cycling experience exceptional. We
                believe that cycling is more than just a mode of transportation;
                it's a lifestyle, a community, and a way to explore the world
                around us.
              </p>
            </div>
            <div className="text-xl font-bold mt-6 text-center">
              Why choose us?
              <img
                className="mx-auto mt-2 w-40 h-40 rounded-full"
                src="images/Bicycle_inspection.webp"
                alt=""
              />
              <ul className="text-center">
                <li className="text-sm text-neutral-700 mt-2 text-left">
                  <span className="font-bold">Quality Selection:</span> We offer
                  a carefully curated selection of bikes and accessories from
                  top brands, ensuring you have the best tools for your cycling
                  adventures.
                </li>
                <li className="text-sm text-neutral-700 mt-2 text-left">
                  <span className="font-bold">Community Connection</span> We're
                  not just a store; we're a hub for cyclists in our community.
                  Join us for group rides, workshops, and events to meet fellow
                  riders and expand your cycling horizons.
                </li>
              </ul>
              <p className="text-sm text-neutral-700 mt-5 text-left indent-16">
                Explore our website to discover our wide range of products, read
                our helpful guides, and stay updated on the latest cycling news.
                Don't hesitate to reach out if you need assistance or have any
                questions – we're here to help you on your cycling journey.
              </p>
              <p className="text-sm text-neutral-700 mt-5 text-left indent-16">
                Thank you for choosing Dirty BIKE as your cycling partner. Let's
                ride together, explore new paths, and create unforgettable
                memories on two wheels. <br />
                <span className="font-bold text-neutral-700 text-lg">
                  Happy cycling!
                </span>
              </p>
            </div>
          </div>
          <div
            id="default-carousel"
            className="relative w-full"
            data-carousel="slide"
          >
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-66 overflow-hidden rounded-lg md:h-96">
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="images/istockphoto-1247921833-612x612.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* Add more carousel items here */}
            </div>
            <h2 className="text-black text-xl font-bold text-center mt-10">
              in{" "}
              <span className="text-4xl font-bold text-neutral-700">
                DIRTY BIKE
              </span>{" "}
              all bikes are premium{" "}
              <span className="text-4xl font-bold text-neutral-700">
                QUALITY BIKES
              </span>
              ...
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
