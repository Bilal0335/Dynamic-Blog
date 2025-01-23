import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Welcome to Blogify
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your go-to place for all things tech, cinema, astronomy, and more!
            Discover articles that inspire, inform, and entertain.
          </p>
          <Link href="/blog">
            <span className="inline-block px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600">
              Explore Our Blog
            </span>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Featured Articles
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Tech Article"
                  width={1170} 
                  height={780} 
                />
                <div className="p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-2">
                    The Catalyzer
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Exploring the latest in technology and its effects on our world. Innovations that change how we live.
                  </p>
                  <Link href="/blog/1">
                    <span className="text-blue-500 hover:text-blue-600 font-semibold">
                      Read More
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://media.istockphoto.com/id/1494642262/photo/people-in-the-cinema-auditorium-with-empty-white-screen.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q9NOP_pk04R_EVWtlVBZI75eSrXwYY_oz0wuk04rO7M="
                  alt="Cinema Article"
                  width={612} 
                  height={612} 
                />
                <div className="p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-2">
                    The 400 Blows
                  </h2>
                  <p className="text-gray-600 mb-4">
                    A deep dive into iconic films and their cultural impact. A closer look at timeless cinematic pieces.
                  </p>
                  <Link href="/blog/2">
                    <span className="text-blue-500 hover:text-blue-600 font-semibold">
                      Read More
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1605882171181-e31b036e4ceb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BhY2VzfGVufDB8fDB8fHww"
                  alt="Astronomy Article"
                  width={400} 
                  height={267} 
                />
                <div className="p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-2">
                    Shooting Stars
                  </h2>
                  <p className="text-gray-600 mb-4">
                    An exploration of the night sky and the stars that light up our universe. Discover the wonders above.
                  </p>
                  <Link href="/blog/3">
                    <span className="text-blue-500 hover:text-blue-600 font-semibold">
                      Read More
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
