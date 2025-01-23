import Link from "next/link";
import CommentSection from "../../../../components/CommentSection";
import Image from "next/image";

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
      "This is a detailed post about technology and how it shapes our lives. Technology has radically transformed how we communicate, work, and live. From smartphones to AI, the technological landscape continues to evolve rapidly. Our daily lives are now intertwined with devices and systems that allow us to connect with the world in ways never imagined before. Innovations like quantum computing, 5G, and smart cities are leading us into a future where technology is at the core of every aspect of our existence. As we continue to innovate, it's crucial to consider both the benefits and challenges these advancements bring.",
    date: "2024-12-25",
    author: "John Doe"
  },
  {
    id: 2,
    title: "The 400 Blows",
    category: "Cinema",
    description: "A deep dive into iconic films and their cultural impact.",
    image: "https://media.istockphoto.com/id/1494642262/photo/people-in-the-cinema-auditorium-with-empty-white-screen.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q9NOP_pk04R_EVWtlVBZI75eSrXwYY_oz0wuk04rO7M=",
    content:
      "This is a detailed post about cinema and the timeless pieces that inspire us. Cinema is a powerful medium that transcends time and place, influencing cultures and shaping societal narratives. From the early days of silent films to the explosion of blockbuster franchises today, movies have the power to reflect and shape our collective consciousness. Directors, actors, and writers continue to create cinematic masterpieces that resonate with audiences around the world. Whether it's a thought-provoking drama or a heartwarming story, cinema has the ability to entertain, educate, and move us. As we look back at the history of film, we can see how it has evolved with technology, becoming more immersive and innovative with each passing year.",
    date: "2024-12-24",
    author: "Jane Smith"
  },
  {
    id: 3,
    title: "Shooting Stars",
    category: "Astronomy",
    description:
      "An exploration of the night sky and the stars that light up our universe.",
    image: "https://images.unsplash.com/photo-1605882171181-e31b036e4ceb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BhY2VzfGVufDB8fDB8fHww",
    content:
      "This is a detailed post about stargazing and the wonders of space. The night sky is a vast, mysterious canvas, filled with countless stars, planets, and galaxies. Stargazing is not just a hobby but a journey of discovery that connects us to the universe. With the help of telescopes and modern technology, we can explore the far reaches of space and learn about the stars, black holes, and the fundamental forces that govern the cosmos. As we continue to explore space, new discoveries continue to challenge our understanding of the universe and our place in it. Whether it's observing a distant supernova or marveling at the beauty of the Milky Way, the night sky is a reminder of the infinite possibilities that exist beyond our world.",
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
      <Image
        src={post.image}
        alt={post.title}
        className="rounded-lg w-full mb-5"
      />
      <p>{post.content}</p>
      <button // Navigates back to the blog list page
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        <Link href={"/blog"}>Back to Blog</Link>
      </button>
      <CommentSection />
    </div>
  );
}
