import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      {/* First Section */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Empowering Blog Developers
              <br className="hidden lg:inline-block" />
              to Build the Future of Storytelling
            </h1>
            <p className="mb-8 leading-relaxed">
              At Blogify, we believe in empowering blog developers to craft
              engaging platforms that amplify voices and ideas. Whether you are
              a seasoned coder or just starting your journey, Blogify provides
              the tools, resources, and community you need to excel. With
              intuitive development support, cutting-edge technologies, and a
              network of passionate creators, we help you bring your vision to
              life and make a lasting impact in the digital world.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Start Building
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Explore Tools
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/assets/image/11.webp"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
