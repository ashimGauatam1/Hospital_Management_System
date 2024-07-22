import React from "react";
import Gallary from "../assets/img/home_gallery/gallery";

const Gallery = () => {
  
  return (
    <div>
      <section class="text-gray-600 body-font -mt-20">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-cyan-600">
              Our Key Features
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-900 italic">
            A comprehensive overview of key healthcare services, featuring high-quality images and detailed descriptions. It includes offerings such as one-to-one doctor consultations, virtual prescriptions, health notifications, insurance plans, diagnostic services, and vaccinations. Each entry highlights the service's unique aspects, aimed at enhancing user understanding and engagement.
            </p>
          </div>
          <div class="flex flex-wrap -ml-9">
            {Gallary.map((item)=>{
              return (
                
            <div class="lg:w-1/3 sm:w-1/2 p-4 relative group ">
            <img
              alt="gallery"
              class="absolute inset-0 w-full h-full object-cover object-center transition-all duration-300 group-hover:blur-sm group-hover:brightness-50"
              src={item.img}
            />
            <div class="relative z-10 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="px-8 py-10 border-4 border-gray-200 bg-white bg-opacity-80">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  {item.title}
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                {item.subtitle}
                </h1>
                <p class="leading-relaxed">
                  {item.des}
                </p>
              </div>
            </div>
          </div>
              )
            })

            
}
</div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
