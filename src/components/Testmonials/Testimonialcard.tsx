export default function TestimonialCard({
    photo = "/avatar-jacob.jpg",
    name = "Jacob",
    role = "CEO – IT Solution Company",
    text = `Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio
            maecenas magna eu ultrices aliquam egestas. Erim phasellus eu commodo
            nibh vitae amet elit. Ut natoque dui.`,
  }) {
    return (
      <article className="flex gap-6 bg-[#111111] text-white p-6 rounded-md max-w-xl">
        {/* head‑shot */}
        <img
          src={photo}
          alt={name}
          className="h-28 w-28 rounded-sm object-cover flex-shrink-0"
        />
  
        {/* copy */}
        <div className="space-y-3">
          <header>
            <h3 className="font-medium text-lg">{name}</h3>
            <p className="uppercase text-[11px] tracking-widest text-gray-400">
              {role}
            </p>
          </header>
  
          <p className="text-sm leading-relaxed text-gray-300">{text}</p>
        </div>
      </article>
    );
  }
  