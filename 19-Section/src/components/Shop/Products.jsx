import ProductItem from './ProductItem';
import classes from './Products.module.css';

const PRODUCTS = [
    {
        key: 1,
        qt: 0,
        title: 'Product1',
        price: 6,
        total: 0,
    },
    {
        key: 2,
        qt: 0,
        title: 'Product2',
        price: 2.45,
        total: 0,
    },
];

const Products = () => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {PRODUCTS.map((el) => {
                    return <ProductItem key={el.key} item={el} />;
                })}
            </ul>
        </section>
    );
};

export default Products;
