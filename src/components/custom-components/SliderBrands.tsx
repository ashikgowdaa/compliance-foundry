
import { IMAGE_END } from '@/config';
import React from 'react';


interface Brand {
  ClientLogo: {
    url: string;
  };
}

const InfiniteBrandScroller = ({ brands }: { brands: Brand[] }) => {
    return (
        <div className="overflow-hidden relative py-5">
         <div className="scroll-left paused-on-hover whitespace-nowrap ">
          <div className="inline-flex gap-32">
            {[...brands, ...brands, ...brands, ...brands].map((src, index) => (
              <img
                key={index}
                src={`${src.ClientLogo.url}`}
                alt={`Brand ${index + 1}`}
                className="w-100% h-100% object-contain"
              />
        
            ))}
          </div>
        </div>
        <div className="absolute top-0 w-full h-full bg-[linear-gradient(to_right,_#F3F4FA,_transparent,_transparent,_transparent,_#F3F4FA)]" />
      </div>
    );
  };
  

export default InfiniteBrandScroller;
