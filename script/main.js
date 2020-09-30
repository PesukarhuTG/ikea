const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');
const subCatalog = document.querySelector('.subcatalog');
const subCatalogHeader = document.querySelector('.subcatalog-header');
const btnRetun = document.querySelector('.btn-return');

const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
};

const closeMenu = () => {
    closeSubMenu();
    catalog.classList.remove('open');
    overlay.classList.remove('active'); 
};

const openSubMenu = (e) => {
    e.preventDefault();
    const itemList = e.target.closest('.catalog-list__item');
    if (itemList) {
        subCatalogHeader.innerHTML = itemList.innerHTML;
        subCatalog.classList.add('subopen');
    }
};

const closeSubMenu = () => {
    subCatalog.classList.remove('subopen');
};

btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);
btnRetun.addEventListener('click', closeSubMenu);

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        closeMenu();
    }
});


//subcatalog