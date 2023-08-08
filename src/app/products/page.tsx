'use client'
import useSWR from "swr"
//import Button from "@/components/button";


import React, { useState, useEffect } from 'react';

const ProductsApp = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: 0 });

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    setProducts(data);
  };

  const addProduct = async () => {
    const response = await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
    if (response.status === 201) {
      setNewProduct({ name: '', price: 0 });
      fetchProducts();
    }
  };

  const deleteProduct = async (id) => {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE',
    });
    if (response.status === 204) {
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R${product.price.toFixed(2)}
            <button onClick={() => deleteProduct(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      <h2>Adicionar Novo Produto</h2>
      <input
        type="text"
        placeholder="Nome"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Preço"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })
        }
      />
      <button onClick={addProduct}>Adicionar</button>
    </div>
  );
};

export default ProductsApp;
