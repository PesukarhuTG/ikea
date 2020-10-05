import { getData } from './getData.js';
import userData from './userData.js';

const COUNTER = 6; //условный счетчик кол-ва товаров для вывода "новинка"

const generateGoodsPage = () => {

    const mainHeader = document.querySelector('.main-header');

    const generateCards = (data) => {
        
        const goodsList = document.querySelector('.goods-list');

        goodsList.textContent = '';
        if (!data.length) {
            const goods = document.querySelector('.goods');
            goods.textContent = location.search === '?wishlist' ? 'Список желаний пуст' : 'К сожалению, по вашему запросу ничего не найдено';
        }

        data.forEach(item => {
            /*осуществим деструктуризацию: у нашего объекта item
            вытащим все интересующие нас св-ва в переменные и вставим их в верстку*/
            const { name: itemName, count, description, id, img: image, price } = item;


            goodsList.insertAdjacentHTML('afterbegin', `
            <li class="goods-list__item">
					<a class="goods-item__link" href="card.html#${id}">
						<article class="goods-item">
							<div class="goods-item__img">
								<img src=${image[0]}
									${image[1] ? `data-second-image=${image[1]}` : ''}>
                            </div>
                            ${count >= COUNTER ? '<p class="goods-item__new">Новинка</p>' : ''}
                            ${!count ? '<p class="goods-item__new">Нет в наличии</p>' : ''}
							<h3 class="goods-item__header">${itemName}</h3>
							<p class="goods-item__description">${description}</p>
							<p class="goods-item__price">
								<span class="goods-item__price-value">${price}</span>
								<span class="goods-item__currency"> ₽</span>
                            </p>
                            ${count ? `<button class="btn btn-add-card" 
                                            aria-label="Добавить в корзину" 
                                            data-idd="${id}"></button>` : ''}
							
						</article>
					</a>
				</li>
            `);
        });

        goodsList.addEventListener('click', e => {
            const btnAddCard = e.target.closest('.btn-add-card');
            if (btnAddCard) {
                e.preventDefault(); //запрет перезагрузки стр
                userData.cartList = btnAddCard.dataset.idd;
            }
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
            getData.wishList(userData.wishList, generateCards);
            mainHeader.textContent = `Список желаний`;
        } else if (prop === 'cat' || prop === 'subcat') {
            getData.category(prop, value, generateCards);
            mainHeader.textContent = value;
        }
    }

};

export default generateGoodsPage;