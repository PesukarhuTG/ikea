//ф-ция получения данных
const getResourse = async (url) => {

    const response = await fetch(url); //ответ от сервера
    
    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
    }
    return await response.json();

};

//ф-ция отправки данных
const sendData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        //body: JSON.stringify(data), - если точно знаем, что формат json
        body: data,
    });

    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
    }

    return await response.json();
};