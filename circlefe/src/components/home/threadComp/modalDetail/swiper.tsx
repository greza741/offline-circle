import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import { Scrollbar } from "swiper/modules";
import { IThreadImage } from "@/type/thread";
import { Box } from "@mui/material";

type Props = {
  images: IThreadImage[];
};

export const SwiperComponent: React.FC<Props> = ({ images }) => {
  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      className="mySwiper"
    >
      {images.map((image) => (
        <SwiperSlide
          key={image.id}
          style={{
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            height: "100vh",
          }}
        >
          <Box>
            <img
              src={image.url}
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
