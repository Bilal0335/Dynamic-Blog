import Link from "next/link";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Catalyzer",
      category: "Tech",
      description:
        "Exploring the latest in technology and its effects on our world. Innovations that change how we live.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "The 400 Blows",
      category: "Cinema",
      description:
        "A deep dive into iconic films and their cultural impact. A closer look at timeless cinematic pieces.",
      image: "https://source.unsplash.com/721x401/?film",
    },
    {
      id: 3,
      title: "Shooting Stars",
      category: "Astronomy",
      description:
        "An exploration of the night sky and the stars that light up our universe. Discover the wonders above.",
      image: "https://source.unsplash.com/722x402/?space",
    },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {posts.map((post) => (
              <div className="p-4 md:w-1/3" key={post.id}>
                <Link href={`/blog/${post.id}`}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden cursor-pointer">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={post.image}
                      alt={post.title}
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {post.category}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {post.title}
                      </h1>
                      <p className="leading-relaxed mb-3">{post.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
