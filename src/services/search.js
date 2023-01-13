import http from "../commons/httpCharacters"

const getAllCharacters = () => {
  return http.get(`character`);
};

const getByName = (name) => {
  return http.get(`character/?name=${name}`);
}

const Search = {
  getAllCharacters,
  getByName,
};

export default Search;