import { BsCart4 } from 'react-icons/bs';
import { useContext } from 'react'; 
import { CartContext } from '../../context/CartContext';
import styles from './CartWidget.module.css'; // Importar archivo CSS

const CartWidget = () => {
  const {getCartTotalQuantity} = useContext(CartContext);
  const totalProducts = getCartTotalQuantity();

  return (
    <div className={styles.cartWrapper}>
      <div className={styles.cartIcon}>
        <BsCart4 />
      </div>
      {totalProducts > 0 && ( // Mostrar el contador solo si hay productos en el carrito
        <div className={styles.productCount}>
          {totalProducts}
        </div>
      )}
    </div>
  );
};

export default CartWidget;

