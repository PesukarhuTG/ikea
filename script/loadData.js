import { getData } from './getData.js';

const cartList = [
        {
            id: 'idd031',
            count: 3
        },
        {
            id: 'idd041',
            count: 1
        },
        {
            id: 'idd051',
            count: 2
        },
];



export const loadData = () => {

    if (location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log(data));
    }

    //getData.catalog((data) => console.log(data));
    //getData.subCatalog("Декор", (data) => console.log(data));

};