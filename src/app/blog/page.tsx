import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type Post = {
  title: string;
  date: string;
  slug: string;
};

export default function Blog() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDirectory);

  const posts: Post[] = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(postsDirectory, filename),
      "utf-8"
    );
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(".mdx", ""),
      title: data.title,
      date: data.date,
    };
  });

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <span className="text-blue-500 cursor-pointer">
                {post.title} - {post.date}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
