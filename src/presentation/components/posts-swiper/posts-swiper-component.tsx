import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Post from "../../../domain/entities/post";

interface SwiperCarouselProps {
  posts: Post[];
}

const SwiperCarouselComponent = ({ posts }: SwiperCarouselProps) => {
  // Render

  return (
    <Swiper
      modules={[Grid, Pagination, Navigation]}
      spaceBetween={5}
      slidesPerView={4}
      grid={{
        rows: 2,
        fill: "row",
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      style={{ padding: "20px" }}
    >
      {posts.map((post) => (
        <SwiperSlide key={post.id}>
          <img
            src={post.mediaURL}
            alt={`Post ${post.id}`}
            className="swiper-image"
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarouselComponent;
