import { getData } from './getData.js';

const wishList = ['idd005', 'idd100', 'idd055', 'idd010', 'idd025'];
    
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

    if (location.search) {
        //чтобы не кодировался русский непонятными знаками, декодируем:
        const search = decodeURI(location.search);

        //полученную выше строку разбиваем и записываем значения в переменные
        const prop = search.split('=')[0].substring(1); // subcat
        const value = search.split('=')[1]; //название категории

        if (prop === 's') {
            getData.search(value, (data) => console.log(data));
        } else if (prop === 'wishlist') {
            getData.wishList(wishList, (data) => console.log(data));
        } else if (prop === 'cat' || prop === 'subcat') {
            getData.category(prop, value, (data) => console.log(data));
        }
    }

    if (location.hash) {
        getData.item(location.hash.substring(1), (data) => console.log(data));
    }

    if (location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log(data));
    }

    getData.catalog((data) => console.log(data));
    getData.subcatalog("Декор", (data) => console.log(data));

};