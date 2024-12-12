import styled from "styled-components";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import useMobileChecker from "../hooks/useMobileChecker";

export default function Achievements() {
  const { isMobile } = useMobileChecker();
  return (
    <StyledAchievements $isMobile={isMobile}>
      <div className="title">서동근, 그가 이루어낸 업적</div>
      <div className="subtitle"></div>
      <div className="description"></div>
      <div className="swiper-wrapper">
        <Swiper
          className="swiper"
          slidesPerView={"auto"}
          spaceBetween={0}
          centeredSlides
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>1</SwiperSlide>
          <SwiperSlide>2</SwiperSlide>
          <SwiperSlide>3</SwiperSlide>
          <SwiperSlide>4</SwiperSlide>
          <SwiperSlide>5</SwiperSlide>
          <SwiperSlide>6</SwiperSlide>
          <SwiperSlide>7</SwiperSlide>
          <SwiperSlide>8</SwiperSlide>
          <SwiperSlide>9</SwiperSlide>
          <SwiperSlide>10</SwiperSlide>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </StyledAchievements>
  );
}

const StyledAchievements = styled.section<{
  $isMobile: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? "100%" : "100vh")};
  position: relative;
  background: #dfdfdf;
  ${({ $isMobile }) => $isMobile && "padding: 20px 10px;"};
`;
