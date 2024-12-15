import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "../styles/OffersCarousel.module.css";

const offers = [
  { name: "Zapatillas Running", discount: "20%" },
  { name: "Balón de Fútbol", discount: "30%" },
  { name: "Bicicleta", discount: "15%" },
];

export default function OffersCarousel() {
  return (
    <section className={styles.carousel}>
      <h2>Ofertas Destacadas</h2>
      <Swiper spaceBetween={50} slidesPerView={1}>
        {offers.map((offer, index) => (
          <SwiperSlide key={index}>
            <div className={styles.offer}>
              <h3>{offer.name}</h3>
              <p>{offer.discount} de descuento</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
