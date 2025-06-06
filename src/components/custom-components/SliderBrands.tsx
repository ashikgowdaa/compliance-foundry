
import { IMAGE_END, imageGenerationUrl } from '@/config';
import React from 'react';


interface Brand {
  ClientLogo: {
    url: string;
  };
}

const InfiniteBrandScroller = ({ brands }: { brands: Brand[] }) => {
    return (
        <div className="overflow-hidden relative py-0 sm:py-2 ">
         <div className="scroll-left paused-on-hover whitespace-nowrap ">
          <div className="inline-flex gap-10 sm:gap-32">
            {[...brands, ...brands, ...brands, ...brands , ...brands, ...brands, ...brands, ...brands].map((src, index) => (
              <div className="w-24">
                <img
                  key={index}
                  src={imageGenerationUrl(src.ClientLogo.url)}
                  alt={`Brand ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
        
            ))}
          </div>
        </div>
        <div className="absolute top-0 w-full h-full bg-[linear-gradient(to_right,_#F3F4FA,_#f3f4fade,_transparent,_transparent,_#f3f4fade,_#F3F4FA)]" />
      </div>
    );
  };
  

export default InfiniteBrandScroller;
