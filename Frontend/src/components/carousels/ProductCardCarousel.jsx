import ProductCard from "../Cards/ProductCard";
import styles from "./ProductCardCarousel.module.scss";

function ProductCardCarousel(props) {
  return (
    <div className={`container ${styles.carouselComp}`}>
      <p className={styles.carouseltitle}>{props.title}</p>
      <div className={` ${styles.carousel}`}>
        <div className={styles.carouselItem}>
          <ProductCard
            img="https://images.pexels.com/photos/16471745/pexels-photo-16471745/free-photo-of-camara-fotografo-amarillo-fotografia.jpeg?auto=compress&cs=tinysrgb&w=400"
            title="Cámara retro"
            price="100"
          />
        </div>
        <div className={styles.carouselItem}>
          <ProductCard
            img="https://images.unsplash.com/photo-1675953935278-205312cb305a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Cooler PC"
            price="350"
          />
        </div>
        <div className={styles.carouselItem}>
          <ProductCard
            img="https://images.pexels.com/photos/16471745/pexels-photo-16471745/free-photo-of-camara-fotografo-amarillo-fotografia.jpeg?auto=compress&cs=tinysrgb&w=400"
            title="Cámara retro"
            price="100"
          />
        </div>
        <div className={styles.carouselItem}>
          <ProductCard
            img="https://images.unsplash.com/photo-1675953935278-205312cb305a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Cooler PC"
            price="350"
          />
        </div>
        <div className={styles.carouselItem}>
          <ProductCard
            img="https://images.pexels.com/photos/16471745/pexels-photo-16471745/free-photo-of-camara-fotografo-amarillo-fotografia.jpeg?auto=compress&cs=tinysrgb&w=400"
            title="Cámara retro"
            price="100"
          />
        </div>
        <div className={styles.carouselItem}>
          <ProductCard
            img="https://images.unsplash.com/photo-1675953935278-205312cb305a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Cooler PC"
            price="350"
          />
        </div>
        <div className={styles.carouselItem}>
          <ProductCard
            img="https://images.pexels.com/photos/16471745/pexels-photo-16471745/free-photo-of-camara-fotografo-amarillo-fotografia.jpeg?auto=compress&cs=tinysrgb&w=400"
            title="Cámara retro"
            price="100"
          />
        </div>
        <div className={styles.carouselItem}>
          <ProductCard
            img="https://images.unsplash.com/photo-1675953935278-205312cb305a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Cooler PC"
            price="350"
          />
        </div>
        <div className={styles.carouselItem}>
          <ProductCard
            img="https://images.pexels.com/photos/16471745/pexels-photo-16471745/free-photo-of-camara-fotografo-amarillo-fotografia.jpeg?auto=compress&cs=tinysrgb&w=400"
            title="Cámara retro"
            price="100"
          />
        </div>
        <div className={styles.carouselItem}>
          <ProductCard
            img="https://images.unsplash.com/photo-1675953935278-205312cb305a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Cooler PC"
            price="350"
          />
        </div>
        <div className={styles.carouselItem}>
          <ProductCard
            img="https://images.pexels.com/photos/16471745/pexels-photo-16471745/free-photo-of-camara-fotografo-amarillo-fotografia.jpeg?auto=compress&cs=tinysrgb&w=400"
            title="Cámara retro"
            price="100"
          />
        </div>
        <div className={styles.carouselItem}>
          <ProductCard
            img="https://images.unsplash.com/photo-1675953935278-205312cb305a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Cooler PC"
            price="350"
          />
        </div>
        <div className={styles.carouselItem}>
          <ProductCard
            img="https://images.pexels.com/photos/16471745/pexels-photo-16471745/free-photo-of-camara-fotografo-amarillo-fotografia.jpeg?auto=compress&cs=tinysrgb&w=400"
            title="Cámara retro"
            price="100"
          />
        </div>
        <div className={styles.carouselItem}>
          <ProductCard
            img="https://images.unsplash.com/photo-1675953935278-205312cb305a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Cooler PC"
            price="350"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCardCarousel;
