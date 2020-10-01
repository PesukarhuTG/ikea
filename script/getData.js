
//пишем легенду
const PARAM = {
    cat: 'category',
    subcat: 'subcategory',
    search: ['name', 'description', 'category', 'subcategory'],
};


export const getData = {
    url: 'database/dataBase.json',

    /* далее метод делает запрос на сервер с помощью fetch через url, указанный выше
    и получив данные с помощью then обрабатывает promise, который вернулся.
    Обрабатываем и из json формата превращаем в массив и отдаем его в ф-цию process*/
    get(process) {
        fetch(this.url)
            .then((response) => response.json())
            .then(process);
    },

    wishList(list, callback) {
        /*ф-ция process - это та ф-ция, ктр-ю мы передали в get при вызове.
        Она получает данные data от промиса then выше.
        Создается переменная result, в которую мы передаем данные из loadData
        (а именно wishList и ф-цию) и фильтруем их по id (есть ли у нас данные из каталога)*/
        this.get((data) => {
            const result = data.filter((item) => list.includes(item.id));
            callback(result);
        });
    },

    item(value, callback) {
        this.get((data) => {
            const result = data.find(item => item.id === value);
            callback(result);
        });
    },

    cart(list, callback) {
        this.get((data) => {
            const result = data.filter(item => list.some(obj => obj.id === item.id));
            callback(result);
        });
    },

    category(prop, value, callback) {
        this.get((data) => {
            const result = data.filter(item => item[PARAM[prop]].toLowerCase() === value.toLowerCase());
            callback(result);
        });
    },

    search(value, callback) {
        //делаем запрос на сервер, получаем данные
        this.get((data) => {
            //данные фильтруем, перебираем каждый объект
            const result = data.filter(item => {
                //св-ва prop каждого объекта также перебираем через for in
                for (const prop in item) {
                    if (PARAM.search.includes(prop) && 
                        //достаем значение св-ва (~Мебель), приводим к нижнему регистру (~мебель)
                        //и проверяем, есть в этом значении то, что мы искали
                        item[prop].toLowerCase().includes(value.toLowerCase())) {
                        return true;
                    }
                }
            });
            callback(result);
        });
    },

    catalog(callback) {
        this.get((data) => {
            //code
            callback(result);
        });
    },

    subCatalog(value, callback) {
        this.get((data) => {
            //code
            callback(result);
        });
    },


};