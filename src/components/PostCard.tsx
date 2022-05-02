export function PostCard({ post }) {
  return (
    <div className="w-[28.75rem] text-justify">
      <img
        className="w-full h-60 mb-[1.25rem] rounded-2xl object-cover cursor-pointer"
        src={post.thumbnail}
        alt={`Thumbnail da notícia com o título: ${post.title}`}
      />

      <h3 className="mb-[0.625rem] font-bold text-2xl">{post.title}</h3>
      <span className="text-lg">{post.description}</span>
    </div>
  );
}
