type Post = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  content: string;
  date: string;
  author: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: "The Catalyzer",
    category: "Tech",
    description:
      "Exploring the latest in technology and its effects on our world.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "This is a detailed post about technology and how it shapes our lives.",
    date: "2024-12-25",
    author: "John Doe"
  },
  {
    id: 2,
    title: "The 400 Blows",
    category: "Cinema",
    description: "A deep dive into iconic films and their cultural impact.",
    image: "https://source.unsplash.com/721x401/?film",
    content:
      "This is a detailed post about cinema and the timeless pieces that inspire us.",
    date: "2024-12-24",
    author: "Jane Smith"
  },
  {
    id: 3,
    title: "Shooting Stars",
    category: "Astronomy",
    description:
      "An exploration of the night sky and the stars that light up our universe.",
    image: "https://source.unsplash.com/722x402/?space",
    content:
      "This is a detailed post about stargazing and the wonders of space.",
    date: "2024-12-23",
    author: "Alice Cooper"
  }
];

export default function BlogDetail({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-5">
        {post.category} | {post.date} | {post.author}
      </p>
      <img
        src={post.image}
        alt={post.title}
        className="rounded-lg w-full mb-5"
      />
      <p>{post.content}</p>
    </div>
  );
}
