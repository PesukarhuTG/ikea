import { getData } from './getData.js'; //для получения subcatalog
import generateSubcatalog from './generateSubcatalog.js'; //для формирования subcatalog

export const catalog = () => {
    const updateSubCatalog = generateSubcatalog();
    const btnBurger = document.querySelector('.btn-burger');
    const catalog = document.querySelector('.catalog');
    const subCatalog = document.querySelector('.subcatalog');
    //const subCatalogHeader = document.querySelector('.subcatalog-header');
    //const btnRetun = document.querySelector('.btn-return');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    //document.body.insertAdjacentElement('beforeend', overlay);
    document.body.append(overlay);

    const openMenu = () => {
        catalog.classList.add('open');
        overlay.classList.add('active');
    };

    const closeMenu = () => {
        closeSubMenu();
        catalog.classList.remove('open');
        overlay.classList.remove('active');
    };

    const handlerCatalog = (e) => {
        e.preventDefault();
        const target = e.target;
        const itemList = target.closest('.catalog-list__item');

        if (itemList) {
            getData.subCatalog(target.textContent, (data) => {
                updateSubCatalog(target.textContent, data);
                subCatalog.classList.add('subopen');
            });
        }

        if (e.target.closest('.btn-close')) {
            closeMenu();
        }
    };

    const closeSubMenu = () => {
        subCatalog.classList.remove('subopen');
    };

    btnBurger.addEventListener('click', openMenu);
    overlay.addEventListener('click', closeMenu);
    catalog.addEventListener('click', handlerCatalog);
    subCatalog.addEventListener('click', e => {
        //const btnReturn = e.target.closest('.btn-return');
        if (btnBurger) {
            closeSubMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            closeMenu();
        }
    });

};

