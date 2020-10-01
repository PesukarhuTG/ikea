import { getData } from './getData.js';

const wishList = ['idd005', 'idd100', 'idd055', 'idd010', 'idd025'];

const generateGoodsPage = () => {

    const mainHeader = document.querySelector('.main-header');
    const goodsList = document.querySelector('.goods-list');

    const generateCards = (data) => {
        goodsList.textContent = '';
        data.forEach(item => {
            goodsList.insertAdjacentHTML('afterbegin', `
            <li>${item.name}</li>
            `);
        });
    };

    if (location.pathname.includes('goods') && location.search) {
        //чтобы не кодировался русский непонятными знаками, декодируем:
        const search = decodeURI(location.search);

        //полученную выше строку разбиваем и записываем значения в переменные
        const prop = search.split('=')[0].substring(1); // subcat
        const value = search.split('=')[1]; //название категории

        if (prop === 's') {
            getData.search(value, generateCards);
            mainHeader.textContent = `Поиск: ${value}`;
        } else if (prop === 'wishlist') {
            getData.wishList(wishList, generateCards);
            mainHeader.textContent = `Список желаний`;
        } else if (prop === 'cat' || prop === 'subcat') {
            getData.category(prop, value, generateCards);
            mainHeader.textContent = value;
        }
    }
};

export default generateGoodsPage;