import styles from "../styles/Catalog.module.css";

const products = [
  { name: "Zapatillas Running", image: "/products/zapatillas.jpg" },
  { name: "Balón de Fútbol", image: "/products/balon.jpg" },
  { name: "Bicicleta", image: "/products/bicicleta.jpg" },
];

export default function Catalog() {
  return (
    <section className={styles.catalog}>
      <h2>Catálogo de Productos</h2>
      <div className={styles.products}>
        {products.map((product, index) => (
          <div key={index} className={styles.card}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
