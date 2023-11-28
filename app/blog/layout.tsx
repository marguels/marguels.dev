import BlogHeader from "@/components/blogHeader/BlogHeader";
import Header from "@/components/header/Header";

export const metadata: { title: string; description: string } = {
  title: "Marguino",
  description: "A place for my notes and thoughts",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
        <div className="blog-layout">
          <BlogHeader/>
        {children}
        </div>
  );
}
