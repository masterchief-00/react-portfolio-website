import React from "react";
import "./testimonials.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import AV1 from "../../assets/avatar1.jpg";
import AV2 from "../../assets/avatar2.jpg";
import AV3 from "../../assets/avatar3.jpg";
import AV4 from "../../assets/avatar4.jpg";

const Testimonials = () => {
  const data = [
    {
      avatar: AV1,
      name: "Tina Show",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores itaque quia voluptates corporis excepturi et doloribus? Possimus dolorem explicabo doloremque facilis facere amet nemo reiciendis corporis iure. Quas, neque voluptates.",
    },
    {
      avatar: AV2,
      name: "Shatta Wale",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores itaque quia voluptates corporis excepturi et doloribus? Possimus dolorem explicabo doloremque facilis facere amet nemo reiciendis corporis iure. Quas, neque voluptates.",
    },
    {
      avatar: AV3,
      name: "Kwame Despite",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores itaque quia voluptates corporis excepturi et doloribus? Possimus dolorem explicabo doloremque facilis facere amet nemo reiciendis corporis iure. Quas, neque voluptates.",
    },
    {
      avatar: AV4,
      name: "Anna McBrown",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores itaque quia voluptates corporis excepturi et doloribus? Possimus dolorem explicabo doloremque facilis facere amet nemo reiciendis corporis iure. Quas, neque voluptates.",
    },
  ];

  // swiper.update();
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={60}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
