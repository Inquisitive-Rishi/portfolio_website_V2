import BlogCard from "./BlogCard";

export default function BlogPage() {
  return (
    <div className="p-10 text-black grow">
      <p className="text-3xl font-bold">This is a blog Page</p>
      <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </div>
  )
}
