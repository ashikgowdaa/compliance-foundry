
import Image from "next/image";

export default async function BlogDetail() {
//   const { id } = params;

//   const res = await fetch(`https://your-strapi.com/api/blogs/${id}?populate=*`, {
//     next: { revalidate: 60 }, // optional ISR
//   });
//   const data = await res.json();
//   const blog = data.data;

//   if (!blog) return <div>Blog not found</div>;

//   const { title, content, image } = blog.attributes;
//   const imageUrl = image?.data?.attributes?.url;

  return (
    <div className="p-6 space-y-4">
      {/* <h1 className="text-3xl font-bold">{title}</h1>
      {imageUrl && (
        <Image
          src={`https://your-strapi.com${imageUrl}`}
          alt={title}
          width={800}
          height={400}
          className="rounded"
        />
      )}
      <div className="prose max-w-none">{content}</div> */}
    </div>
  );
}
