import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
type PostProps = {
  params: { slug: string };
};

export default async function BlogPost({ params }: PostProps) {
  const filePath = path.join(process.cwd(), "posts", `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContents);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <MDXRemote source={content} />
    </div>
  );
}
