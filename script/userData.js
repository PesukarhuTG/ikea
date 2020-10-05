const wishList = [ 'idd005', 'idd100', 'idd077', 'idd033'];

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

const userData = {
    wishListData: [],
    get wishList() {
        return this.wishListData;
    },
    set wishList(id) {
        if (this.wishListData.includes(id)) {
            const index = this.wishListData.indexOf(id);
            this.wishListData.splice(index, 1);
        } else {
            this.wishListData.push(id);
        }
    },

    cartListData: [],
    get cartList() { 
        return this.cartListData;
    },
    set cartList(id) {
        let obj = this.cartListData.find(item => item.id === id);
        if (obj) {
            obj.count++; //если объект есть в корзине, увеличиваем счетчик кол-ва
        } else {
            obj = {
                id,
                count: 1,
            };
            this.cartListData.push(obj); //если объекта нет в корзине, добавляем
        }
    },
};

export default userData;