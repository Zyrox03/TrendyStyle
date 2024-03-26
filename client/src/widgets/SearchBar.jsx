
export const SearchBar = () => {
  return (
    <div dir="rtl" className="flex justify-center items-center mb-6">
    <form action="/search" method="GET" className="relative w-fit text-center">
<input
  type="text"
  name="search" 
  placeholder="بحث..."
  className="bg-purple-700 text-white placeholder:text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:bg-white focus:text-purple-700 transition-colors duration-300 ease-in-out"
/>
<button type="submit" className="absolute left-2 top-1/2 -translate-y-1/2">
  <i className="fa fa-search text-white"></i>
</button>
</form>

    </div>  )
}
