import { ArrowRight } from "lucide-react";

interface SlideContentProps {
  title: string;
  desc: string;
  img: string;
  tech: string[];
}

export default function SlideContent({ title, desc, img, tech }: SlideContentProps) {
    return (
      <div className="md:flex gap-10 items-start">
        <figure className="md:w-1/2">
          {/* <img
            src={img}
            alt={title}
            className="w-full h-auto rounded-sm object-cover shadow-md"
          /> */}
          {img}
        </figure>
  
        <div className="md:w-1/2 space-y-6 mt-8 md:mt-0">
          <div>
            <p className="uppercase text-xs tracking-widest text-gray-400">
              Category
            </p>
            <h3 className="text-xl md:text-2xl font-medium mt-1">{title}</h3>
            <p className="text-sm text-gray-300 mt-4 max-w-md">{desc}</p>
          </div>
  
          <div>
            <p className="uppercase text-xs tracking-widest text-gray-400 mb-4">
              Technology
            </p>
            <div className="flex gap-8 text-4xl">
              {tech.map((cls) => (
                <i key={cls} className={`devicon-${cls}`} />
              ))}
            </div>
          </div>
  
          <button className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 rounded-sm hover:bg-white/10 transition">
            View Case Study <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }