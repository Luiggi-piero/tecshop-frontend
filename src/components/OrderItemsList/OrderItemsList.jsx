import { Link } from 'react-router-dom';
import classes from './orderItemsList.module.css';
import Price from '../Price/Price';

function OrderItemsList({ order }) {
    return (
        <table className={classes.table}>
            <tbody>
                <tr>
                    <td colSpan='5'>
                        <h3>Items de la orden: </h3>
                    </td>
                </tr>

                {order.items.map(item => (
                    <tr key={item.product.id}>
                        <td>
                            <Link to={`/product/${item.product.id}`}>
                                <img src={item.product.imageUrl} />
                            </Link>
                        </td>
                        <td>{item.product.name}</td>
                        <td>
                            <Price price={item.product.price} />
                        </td>
                        <td>{item.quantity}</td>
                        <td>
                            <Price price={item.price} />
                        </td>
                    </tr>
                ))}

                <tr>
                    <td colSpan="3"></td>
                    <td><strong>Total: </strong></td>
                    <td>
                        <Price price={order.totalPrice} />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default OrderItemsList