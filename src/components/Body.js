import React from 'react'

const Body = () => {
  return (
    <section id="latest-models" className="py-16 bg-neutral-400">

    <div className="container mx-auto px-2">
      <h2 className="text-2xl text-white font-extrabold mb-10">TYPES OF BIKE :</h2>

      <div className="grid lg:grid-cols-3 auto-fill gap-y-10 gap-x-10">
        <div className="w-full shadow-2xl hover:drop-shadow-2xl border-solid rounded-xl overflow-hidden bg-transparent text-center mb-2">
                      <img className=" w-full "
                          src="images/istockphoto-982716664-612x612-removebg-preview-removebg-preview.png" alt='' />
          <div className="px4 py-6">
              <h4 className="font-bold text-white mb-2" >Vintage Style mountain bike</h4>
                          <button data-popover-target="popover-vintage"
                              type="button"
                              className="text-white text-bold bg-black hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-300 dark:focus:ring-black">Details
              </button>
                          <div data-popover
                              id="popover-vintage"
                              role="tooltip"
                              className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-black dark:border-gray-600 dark:bg-gray-300">
              <div className="px-3 py-2 bg-white border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-white">
                  <h3 className="font-bold  text-gray-900 dark:text-black">Vintage Style mountain bike</h3>
              </div>
              <div className="px-3 py-2">
                  <p>vintage bikes are considered to be bicycles manufactured between the late 19th century and the early 1990s. They possess a distinct allure that sets them apart from the modern ones. Three key characteristics contribute to their unique charm: design, craftsmanship, and materials.</p>
              </div>
                  <div data-popper-arrow></div>
            </div>
        </div>
        </div>
        <div className="w-full shadow-2xl hover:drop-shadow-2xl rounded-xl border-solid overflow-hidden bg-transparent text-center mb-2">
          <img className=" w-full" src="images/istockphoto-1331912544-612x612-removebg-preview.png" alt=''/>
        <div className="px4 py-6">
          <h4 className="font-bold text-white  mb-2 my-1" >OFF-ROAD Mountain Bike</h4>
                          <button data-popover-target="popover-offRoad"
                              type="button"
                              className="text-white text-bold bg-black hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-300 dark:focus:ring-black">Details
          </button>
                          <div data-popover id="popover-offRoad"
                              role="tooltip"
                              className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity tion-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-black dark:border-gray-600 dark:bg-gray-300">
          <div className="px-3 py-2 bg-white border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-white">
              <h3 className="font-bold  text-gray-900 dark:text-black">OFF-ROAD Mountain bike</h3>
          </div>
          <div className="px-3 py-2">
              <p>Mountain bike carbon fiber T800 SHlMANO M6100 Groupset MTB 29ER Carbon Bicycle Mountain Bike 29, designed for off-road cycling. Mountain bikes share some similarities with other bicycles, but incorporate features designed to enhance durability and performance in rough terrain, which makes them heavier, more complex and less efficient on smooth surfaces.</p>
          </div>
              <div data-popper-arrow></div>
        </div>
      </div>
      </div> 
        <div className="w-full shadow-2xl hover:drop-shadow-2xl rounded-xl border-solid overflow-hidden bg-transparent text-center mb-2">
            <img className=" w-full " src="images/istockphoto1-1320894369-612x612-removebg-preview.png" alt=''/>
          <div className="px4 py-6">
            <h4 className="font-bold text-white  mb-2 my-1" >Road Bike Mountain bike</h4>
                          <button data-popover-target="popover-roadBike"
                              type="button"
                              className="text-white text-bold bg-black hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-300 dark:focus:ring-black">Details
            </button>
                          <div data-popover
                              id="popover-roadBike"
                              role="tooltip"
                              className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity tion-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-black dark:border-gray-600 dark:bg-gray-300">
            <div className="px-3 py-2 bg-white border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-white">
                <h3 className="font-bold  text-gray-900 dark:text-black">ROAD bike</h3>
            </div>
            <div className="px-3 py-2">
                <p>A road bike is a bicycle designed primarily for riding quickly on paved surfaces. Road bikes have drop handlebars,fairly narrow slick tyres and usually place the rider in a position where their bum is higher than their hands.</p>
            </div>
                <div data-popper-arrow></div>
          </div>
        </div>
        </div>
        <div className="w-full my-2 shadow-2xl hover:drop-shadow-2xl border-solid rounded-xl overflow-hidden bg-transparent text-center">
           <img className=" w-full " src="images/8C3A9144-removebg-preview.png" alt=''/>
         <div className="px4 py-6">
           <h4 className="font-bold text-white mb-2" >Electric Mountain Bike</h4>
                          <button data-popover-target="popover-Emtb"
                              type="button"
                              className="text-white text-bold bg-black hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-300 dark:focus:ring-black">Details
          </button>
                          <div data-popover id="popover-Emtb"
                              role="tooltip"
                              className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity tion-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-black dark:border-gray-600 dark:bg-gray-300">
          <div className="px-3 py-2 bg-white border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-white">
              <h3 className="font-bold  text-gray-900 dark:text-black">Electric Mountain Bike</h3>
          </div>
          <div className="px-3 py-2">
              <p>Electric-assist mountain bikes amplify your pedaling power while amplifying the amount of fun you have on the trail. Go farther, go faster, and go more places on an e-MTB that lets you enjoy more of everything you love about mountain biking..</p>
          </div>
              <div data-popper-arrow></div>
        </div>
      </div>
        </div>
        <div className="w-full my-2 shadow-2xl hover:drop-shadow-2xl border-solid rounded-xl overflow-hidden bg-transparent text-center">
         <img className=" w-full " src="images/ab2b3c06-a1dc-47b6-9d85-5550303ba0a4_1024x1024_2x-removebg-preview.png"alt=''/>
       <div className="px4 py-6">
         <h4 className="font-bold text-white  mb-2 my-1" >Electric Scooter</h4>
         <button data-popover-target="popover-Escooter" type="button" className="text-white text-bold bg-black hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-300 dark:focus:ring-black">Details
        </button>
                          <div data-popover
                              id="popover-Escooter"
                              role="tooltip"
                              className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity tion-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-black dark:border-gray-600 dark:bg-gray-300">
        <div className="px-3 py-2 bg-white border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-white">
            <h3 className="font-bold  text-gray-900 dark:text-black">Electric Scooter</h3>
        </div>
        <div className="px-3 py-2">
            <p>A motorized scooter is a stand-up scooter powered by either a small internal combustion engine or electric hub motor in its front and/or rear wheel. Classified as a form of micro-mobility, they are generally designed with a large center deck on which the rider stands..</p>
        </div>
            <div data-popper-arrow></div>
      </div>
    </div>
        </div>
        <div className="w-full my-2 shadow-2xl hover:drop-shadow-2xl border-solid rounded-xl overflow-hidden bg-transparent text-center">
           <img className=" w-full" src="images/istockphoto-1310997767-612x612-removebg-preview.png"alt=''/>
      <div className="px4 py-6">
        <h4 className="font-bold text-white  mb-2" >Electric Cart</h4>
                          <button data-popover-target="popover-Ecart"
                              type="button"
                              className="text-white text-bold bg-black hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-300 dark:focus:ring-black">Details
        </button>
                          <div data-popover id="popover-Ecart"
                              role="tooltip"
                              className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity tion-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-black dark:border-gray-600 dark:bg-gray-300">
        <div className="px-3 py-2 bg-white border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-white">
            <h3 className="font-bold  text-gray-900 dark:text-black">Electric Cart</h3>
        </div>
        <div className="px-3 py-2">
            <p>Electric utility carts; It is a small vehicle designed to transport two golfers and golf clubs with less effort than walking around a golf course or on desert roads. This is the definition used in the dictionaries. This is the purpose and story of its origin. Later, these vehicles were developed, increasing the person capacity and widening the load area. It has attracted attention in terms of using these vehicles in different areas, making them more efficient by carrying more people and having more load area.</p>
        </div>
            <div data-popper-arrow></div>
        </div>
      </div>

        </div>
        <div className="w-full  my-2 shadow-2xl hover:drop-shadow-2xl border-solid rounded-xl overflow-hidden bg-transparent text-center">
          <img className=" w-full" src="images/91IvF9cwCiL-removebg-preview.png" alt=''/>
          <div className="px4 py-6">
            <h4 className="font-bold text-white  mb-2" >FatBike Mountain Bike</h4>
                          <button data-popover-target="popover-fatbike"
                              type="button"
                              className="text-white text-bold bg-black hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-300 dark:focus:ring-black">Details
            </button>
                          <div data-popover id="popover-fatbike"
                              role="tooltip"
                              className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity tion-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-black dark:border-gray-600 dark:bg-gray-300">
            <div className="px-3 py-2 bg-white border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-white">
                <h3 className="font-bold mt-8 text-gray-900 dark:text-black">FatBike</h3>
            </div>
            <div className="px-3 py-2">
                <p>A fatbike is an off-road bicycle built to accommodate oversized tyres, typically 3.8 in or larger and rims 2.16 in or wider, designed for low ground pressure to allow riding on soft, unstable terrain, such as snow, sand, bogs and mud, While an electric bike motor may help them cover ground more quickly, the extra weight and finite battery capacity hinder their performance and adventurous intentions.</p>
            </div>
                <div data-popper-arrow></div>
            </div>
          </div>
        </div>
        <div className="w-full  my-2 shadow-2xl hover:drop-shadow-2xl border-solid rounded-xl overflow-hidden bg-transparent text-center">
          <img className=" w-full " src="images/japan-removebg-preview.png"alt=''/>
     <div className="px4 py-6">
       <h4 className="font-bold text-white mb-2" >Japanese City Bike</h4>
                              <button data-popover-target="popover-JCbike"
                                  type="button"
                                  className="text-white text-bold bg-black hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-300 dark:focus:ring-black">Details
       </button>
                              <div data-popover
                                  id="popover-JCbike"
                                  role="tooltip"
                                  className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity tion-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-black dark:border-gray-600 dark:bg-gray-300">
       <div className="px-3 py-2 bg-white border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-white">
           <h3 className="font-bold  text-gray-900 dark:text-black">Japanese City Bike</h3>
       </div>
       <div className="px-3 py-2">
           <p>The trusty ‘shopping bicycle’ is ubiquitous in Japan. It’s used for the daily commute to school and work, carrying kids across town, lugging groceries, and taking in the local landscape. You might be familiar with its nickname, mama-chari. Here’s what you need to know about the 2-wheeler; how shopping bicycles came about, as well as handy tips for purchasing, riding and parking.</p>
       </div>
           <div data-popper-arrow></div>
       </div>
     </div>

        </div>
        <div className="w-full my-2 shadow-2xl hover:drop-shadow-2xl border-solid rounded-xl overflow-hidden bg-transparent text-center">
        <img className=" w-full " src="images/download-removebg-preview.png"alt=''/>
   <div className="px4 py-6">
     <h4 className="font-bold text-white mb-2" >Folding Bike</h4>
     <button data-popover-target="popover-foldingBike" type="button" className="text-white text-bold bg-black hover:bg-gray-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-gray-300 dark:focus:ring-black">Details
     </button>
   <div data-popover id="popover-foldingBike" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity tion-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-black dark:border-gray-600 dark:bg-gray-300">
     <div className="px-3 py-2 bg-white border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-white">
         <h3 className="font-bold  text-gray-900 dark:text-black">Folding Bike</h3>
     </div>
     <div className="px-3 py-2">
         <p>A folding bicycle is a bicycle designed to fold into a compact form, facilitating transport and storage. When folded, the bikes can be more easily carried into buildings, on public transportation, and more easily stored in compact living quarters or aboard a car, boat or plane.</p>
     </div>
         <div data-popper-arrow></div>
     </div>
   </div>

        </div>
      </div>
    </div>
  </section>
  )
}

export default Body