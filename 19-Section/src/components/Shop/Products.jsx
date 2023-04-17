import ProductItem from './ProductItem';
import classes from './Products.module.css';

const items = [
    {
        id: 1,
        title: 'Product1',
        price: 6,
        description: 'Product Description',
    },
    {
        id: 2,
        title: 'Product2',
        price: 2.45,
        description: 'Product Description',
    },
    {
        id: 3,
        title: 'Product3',
        price: 8.3,
        description: 'Product Description',
    },
    {
        id: 4,
        title: 'Product4',
        price: 6.3,
        description: 'Product Description',
    },
];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {items.map((el) => {
                    return <ProductItem key={el.id} title={el.title} price={el.price} description={el.description} />;
                })}
            </ul>
        </section>
    );
};

export default Products;
