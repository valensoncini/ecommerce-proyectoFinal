import React, { createContext, useState, useContext } from 'react';
import { sweetAlert, sweetAlertRepregunta } from '../assets/sweetAlert';

const ProductsContext = createContext();
export function ProductsProvider({ children }) {
    const [listaProductos, setListaProductos] = useState([]);
    const [productosOriginales, setOriginales] = useState([]);
    const [encontrado, setEncontrado] = useState([]);


    function obtenerProductos(){
        return(
            new Promise((res, rej) => {
                fetch('https://68790ba663f24f1fdca09cea.mockapi.io/products')
                    .then((respuesta) => respuesta.json())
                    .then((datos) => {
                        //console.log(datos)
                        setListaProductos(datos);
                        setOriginales(datos);
                        //setCargando(false)
                        res(datos);

                    })
                    .catch((error) => {
                        console.error('Error:', error)
                        //setError("Hubo un problema con la carga de productos.")
                       // setCargando(false)
                       rej(error);
                    });
            })
        )
    }


     const agregarProducto = async (producto) => {
        return(
            new Promise(async (res, rej)  =>{
                try {
                    const respuesta = await fetch('https://68790ba663f24f1fdca09cea.mockapi.io/products', {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(producto),
                    });

                    if (!respuesta.ok) {
                        throw new Error('Error al agregar el producto.');
                    }
                     const data = await respuesta.json();
                       
                       // alert('Producto agregado correctamente');
                        res(data);
                    } catch (error) {
                        console.error(error.message);
                        //alert('Hubo un problema al agregar el producto.');
                        rej(error.message);
                    }
            })
        )
};


 function obtenerProducto(id){
        return (
            new Promise((res, rej) => {
                fetch('https://68790ba663f24f1fdca09cea.mockapi.io/products')
                .then((respuesta) => respuesta.json())
                .then((datos) => {
                    const encontrado = datos.find((item) => item.id === id);
                    if(encontrado){
                        setEncontrado(encontrado)
                        res(datos);
                    }else{
                        rej("Producto no encontrado")
                        //setError("Producto no encontrado")
                    }
                    //setCargando(false)
    
                })
                .catch((error) => {
                     console.error('Error:', error)
                     rej("Hubo un problema con la carga de productos.")
                     //setCargando(false)
                });
            })
        )
 }

 function actualizarProducto(producto){
    return(
        new Promise(async(res, rej) => {
            try {
                const respuesta = await fetch(`https://68790ba663f24f1fdca09cea.mockapi.io/products/${producto.id}`, {
                    method: 'PUT',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(producto),
                });
                if (!respuesta.ok) {
                    throw new Error('Error al actualizar el producto.');
                }
                const data = await respuesta.json();
                res(data);
                
            } catch (error) {
                console.error(error.message);
                  rej(error);
               
            }  
        })
    )
 }

    const eliminarProducto = async (id) => {
    return(
        new Promise(async (res, rej) => {
            const confirmar = window.confirm('¿Estás seguro de eliminar?');
            if (confirmar) {
            try {
                const respuesta = await fetch(`https://68790ba663f24f1fdca09cea.mockapi.io/products/${id}`, {
                method: 'DELETE',
                });
                if (!respuesta.ok) throw new Error('Error al eliminar');
                sweetAlert("Producto Eliminado con Exito!", "success", "", "Cerrar")
                res();
            } catch (error) {
                console.error(error.message);
                sweetAlert("Hubo un problema!", "error", error.message, "Cerrar")
                rej(error);
            }
            }
        })
    )

};

function filtrarProductos(filtro){
    
    if(filtro.trim() == ""){
        setListaProductos(productosOriginales); 
        return;
    }
    const productosFiltrados = productosOriginales.filter((producto) => {
       return producto.name.toLowerCase().includes(filtro.toLowerCase());
    })
    
    setListaProductos(productosFiltrados);
}

  
  return (
    <ProductsContext.Provider value={{ obtenerProductos, listaProductos, agregarProducto, encontrado, obtenerProducto, actualizarProducto, eliminarProducto, filtrarProductos}}>
      {children}
    </ProductsContext.Provider> );
}
export const useProductsContext = () => useContext(ProductsContext);