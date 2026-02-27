import React from "react";

export default function ProductsSection() {
  return (
    <section style={{ backgroundColor: "#161B22", color: "white", padding: "40px", display: "flex", justifyContent: "space-around", borderRadius: "8px" }}>
      {[1, 2, 3].map((num) => (
        <div key={num} style={{ backgroundColor: "#21262D", borderRadius: "8px", padding: "20px", width: "250px", textAlign: "center" }}>
          <div style={{ backgroundColor: "#30363D", height: "150px", borderRadius: "8px", marginBottom: "15px" }} />
          <h2 style={{ margin: "0 0 10px 0" }}>Product {num}</h2>
          <p style={{ margin: 0 }}>Short description of product {num}</p>
        </div>
      ))}
    </section>
  );
}