"use client";
import { useRef, ReactNode, ComponentType } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface SwiperCarouselProps<T extends object> {
  data: T[];
  SlideComponent: ComponentType<T>;
  gap?: number;
  slidesPreview?:number;
  getKey?: (item: T, index: number) => string | number;
}

type IdOrKey<T> = T extends { id: infer U }
  ? U extends string | number
    ? true
    : false
  : false;

export default function SwiperCarousel<T extends object>({
  data,
  SlideComponent,
  gap = 40,
  slidesPreview = 1 ,
  getKey,
}: SwiperCarouselProps<T> &
  (IdOrKey<T> extends true
    ? object
    : { getKey: (item: T, idx: number) => string | number })) {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <section className="relative">
      <Swiper
        // modules={[Navigation]}
        // navigation={{ nextEl: ".btn-next", prevEl: ".btn-prev" }}
        onSwiper={(s) => (swiperRef.current = s)}
        loop
        spaceBetween={gap}
        slidesPerView={slidesPreview}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={
              getKey
                ? getKey(item, index)
                : // TS knows `id` exists (string | number) when getKey is absent
                  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                  (item as { id: string | number }).id
            }
          >
            <SlideComponent {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-6 mt-6">
        <NavBtn dir="prev" swiperRef={swiperRef}>
          <ChevronLeft size={16} />
        </NavBtn>
        <NavBtn dir="next" swiperRef={swiperRef}>
          <ChevronRight size={16} />
        </NavBtn>
      </div>
    </section>
  );
}



interface NavBtnProps {
  dir: "next" | "prev";
  children: ReactNode;
  swiperRef: React.RefObject<SwiperInstance | null>;
}

function NavBtn({ dir, children, swiperRef }: NavBtnProps) {
  const handleClick = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (dir === "prev") {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  };

  return (
    <button
      className={`btn-${dir} h-10 w-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
