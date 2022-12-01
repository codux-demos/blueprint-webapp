import { createBoard } from '@wixc3/react-board';
import { ProductItem } from '../../../components/product-item/product-item';
import itemPhoto from '../../../assets/macchiato.png';

export default createBoard({
    name: 'Esspresso Macchiato',
    Board: () => (
        <ProductItem
            itemDescription="A European-style classic. Rich espresso marked with dollop of steamed milk and foam."
            itemName="Espresso Macchiato"
            itemPhotoURL={itemPhoto}
            itemPrice={9.5}
        />
    ),
    environmentProps: {
        windowWidth: 600,
        windowHeight: 800,
    },
});
