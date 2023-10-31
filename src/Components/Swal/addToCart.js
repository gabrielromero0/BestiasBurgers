import Swal from "sweetalert2";

export function addToCart(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Producto agregado al carrito',
    showConfirmButton: false,
    timer: 1000,
  });
}