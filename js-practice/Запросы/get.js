// URL, к которому будет выполнен GET запрос
const apiUrl = 'https://api.example.com/data';

// Заголовки запроса
const headers = {
  'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  'Custom-Header': 'Custom-Value',
};

// Опции для GET запроса
const requestOptions = {
  method: 'GET',
  headers: headers,
};

// Выполняем GET запрос
fetch(apiUrl, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Данные получены:', data);
  })
  .catch(error => {
    console.error('Произошла ошибка:', error);
  });
