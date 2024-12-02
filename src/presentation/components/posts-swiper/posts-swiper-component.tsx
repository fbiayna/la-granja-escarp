import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Grid } from "swiper/modules";
import "./posts-swiper-component.css";
import "swiper/swiper-bundle.css";
import Post from "../../../domain/entities/post";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import { MediaType } from "../../../domain/interfaces/media-type.enum";
import { grey } from "@mui/material/colors";

interface SwiperCarouselProps {
  posts: Post[];
}

const SwiperCarouselComponent = ({ posts }: SwiperCarouselProps) => {
  // Render

  return (
    <div className="instagram-carousel">
      <Swiper
        modules={[Grid, Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={4}
        grid={{
          rows: 2,
          fill: "row",
        }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            grid: { rows: 2 },
          },
          768: {
            slidesPerView: 2,
            grid: { rows: 2 },
          },
          0: {
            slidesPerView: 1,
            grid: { rows: 1 },
          },
        }}
        navigation
        pagination={{ clickable: true }}
        loop={false}
      >
        {posts
          .filter((post) => post.mediaType !== MediaType.Video)
          .map((post) => (
            <SwiperSlide key={post.id} className="swiper-slide">
              {post.mediaType === MediaType.Carousel && (
                <AutoAwesomeMotionIcon
                  sx={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    color: grey[300],
                    zIndex: 10,
                  }}
                />
              )}
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-instagram-container">
                  <img
                    className="image-instagram-carousel"
                    src={post.mediaURL}
                    alt={post.id || "Instagram post"}
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarouselComponent;
