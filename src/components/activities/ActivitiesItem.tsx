export default function ActivitiesItem() {
  const mockImgSrc = 'https://m.media-amazon.com/images/I/81RCKVLIhDL._AC_UF1000,1000_QL80_.jpg';
  const mockTags: string[] = ['Cyber Security', 'Cloud', 'Web Development'];

  return (
    <div className="flex w-full flex-row justify-start items-start gap-5 rounded-[30px] p-5 hover:bg-vidva/10 transition-transform duration-300">
      <img
        src={mockImgSrc}
        alt=""
        className="h-80 w-64 rounded-3xl object-cover shadow-1"
      />
      <div className="flex flex-col text-wrap items-start justify-start gap-3">
        <h3 className="text-2xl font-normal text-mgray-1">Name of Activities</h3>
        <p className="text-xl font-light text-mgray-2">Company Name</p>
        <div className="flex flex-wrap gap-2 border-t-1 border-t-white pt-3">
          {mockTags.sort().map((tag: string, index) => (
            <span 
              key={index}
              className={`text-blue-800 bg-blue-200 px-3 py-1 rounded-full`}>
            {tag}
          </span>
          ))}
        </div>
        <div className="line-clamp-3 text-lg font-light text-mgray-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor explicabo, provident laboriosam rerum, debitis nobis sed aliquam minima porro qui, ipsa doloremque unde optio! Ducimus eveniet ad tempora pariatur quaerat.
          Hic minus amet quas culpa iusto veritatis velit laborum quasi, consectetur enim mollitia assumenda facere, placeat, omnis expedita praesentium tempora illo cumque sunt totam. Perspiciatis deleniti debitis accusamus cumque impedit.
        </div>
        <p className="text-xl font-light text-mgreen">40 Seat left</p>
      </div>
    </div>
  );
}
