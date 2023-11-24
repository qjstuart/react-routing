import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Akai S950" },
  { id: "p2", title: "Akai S2800i" },
  { id: "p3", title: "Akai S6000" },
];

function Products() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
