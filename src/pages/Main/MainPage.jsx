import { Link } from 'react-router-dom';
import classes from './mainPage.module.css';

function MainPage() {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <h3 className={classes.title}>TECSHOP</h3>
                <p className={classes.description}>
                    Energía confiable para impulsar tu industria.
                </p>
                <Link to='/home' className={classes.btn_view_products}>
                    Ver Productos
                </Link>
            </div>
        </div>
    )
}

export default MainPage