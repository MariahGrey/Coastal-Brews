let CREATE_URL = (path = "", page = 1) =>
  `https://api.punkapi.com/v2/${path}?page=${page}&per_page=80`;

export const getAllBeers = page => {
  return fetch(CREATE_URL("beers", page))
    .then(response => response.json())
    .catch(error => console.log(error));
};

export const getBeerById = id => {
  return fetch(CREATE_URL(`/beers/${id}`))
    .then(response => response.json())
    .catch(error => console.log(error));
};
