import React, { createContext, useContext, useState } from 'react';
// Crear el contexto
const CarritoContext = createContext();

// Proveedor del contexto
export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState([]);
    const agregarAlCarrito = (producto) => {

         const existe = carrito.find(p => p.id === producto.id)
            if(existe){
                const carritoActualizado = carrito.map((p) => {
                    if(p.id === producto.id){
                        const productoActualizado = {...p, cantidad: p.cantidad + producto.cantidad}
                        return productoActualizado
                    }else{
                        return p
                    }
                })
                setCarrito(carritoActualizado)
            }else{
                let nuevoCarrito = [...carrito,producto]
                setCarrito(nuevoCarrito)
            }
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

      function borrarDelCarrito(id){
            const nuevoCarrito = carrito.filter((p) => p.id !== id);
            setCarrito(nuevoCarrito);
        }

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito, borrarDelCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
}

export const useCarritoContext = () => useContext(CarritoContext);