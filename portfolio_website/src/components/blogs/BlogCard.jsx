
export default function BlogCard() {
  return (
    <div className="rounded-md hover:border-2 border-solid border-black shadow-lg shadow-indigo-500/40 overflow-hidden">
      <div className="h-[300px] bg-blue-400"></div>
      <div className="p-4">
        <p className="font-bold text-2xl">This is a title</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, vitae pariatur praesentium dicta accusantium eos officiis numquam maiores officia minus!</p>
        <p className="font-bold">24th Dec 2023</p>
      </div>
    </div>
  )
}
// {title, date}