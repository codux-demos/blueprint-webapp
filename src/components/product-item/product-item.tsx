import type React from 'react';
import { Elevation, Card, Icon } from '@blueprintjs/core';
import classNames from 'classnames';
import defaultItemPhoto from '../../assets/pprmint.png';
import styles from './product-item.module.scss';

export interface ProductItemProps {
    itemPhotoURL?: string;
    itemName?: string;
    itemPrice?: number;
    itemDescription?: string;
    isFavorite?: boolean;
    children?: React.ReactNode;
    className?: string;
}

/**
 * This Product Item component is a simple demo component to showcase the capabilities of Codux,
 * it is a basic implementation, which is not meant to be utilized in a production environment.
 *
 * Use this demo to get a feel for how easy and fun it is to create and edit components in Codux using Blueprint.js, a 3rd party React-based UI toolkit.
 *
 */
export const ProductItem = ({
    className,
    children,
    itemPhotoURL = defaultItemPhoto,
    itemName = 'Peppermint Mocha',
    itemPrice = 18.0,
    itemDescription = 'An espresso roast combined with steamed milk, sweet mocha sauce and peppermint-flavored syrup, topped with whipped cream.',
    isFavorite = false,
}: ProductItemProps) => {
    return (
        <Card className={classNames(styles.product_wrapper, className)} elevation={Elevation.FOUR}>
            <img className={styles.product_image} src={itemPhotoURL} />
            <Card className={styles.product_body}>
                <div className={styles.product_row}>
                    <p className={styles.product_name}>{itemName}</p>
                    <p className={styles.product_price}>{'$' + itemPrice}</p>
                </div>
                <div className={styles.product_row}>
                    <p className={styles.product_option}>Big</p>
                    <input type="radio" name="radio" defaultChecked />
                </div>
                <div className={styles.product_row}>
                    <p className={styles.product_option}>Medium</p>
                    <input type="radio" name="radio" />
                </div>
                <div className={styles.product_row}>
                    <p className={styles.product_option}>Small</p>
                    <input type="radio" name="radio" />
                </div>
                <div className={styles.product_row}>
                    <p className={styles.product_desc}>{itemDescription}</p>
                </div>
                <div className={styles.product_row}>{children}</div>
                <div className={styles.product_row}>
                    <button className={styles['btn-icon']} type="button">
                        <Icon icon="heart" color={isFavorite ? '#ff7979' : 'white'} size={20} />
                    </button>
                    <button className={styles['btn-add']} type="button">
                        Add to cart
                    </button>
                </div>
            </Card>
        </Card>
    );
};
