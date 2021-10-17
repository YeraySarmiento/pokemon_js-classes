class Service {
  urlAPI;

  constructor(urlAPI) {
    this.urlAPI = urlAPI;
  }

  async getData(urlAPI) {
    const response = await fetch(urlAPI);
    const pokemonData = await response.json();
    return pokemonData;
  }

  async createData(pokemon) {
    let response = await fetch(this.urlAPI, {
      method: "POST",
      body: JSON.stringify(pokemon),
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    return response;
  }

  async deleteData(id) {
    fetch(`${this.urlAPI}${id}`, { method: "DELETE" });
    if (response.ok) {
      return true;
    }
    throw new Error("Error bla bla");
  }
}

export default Service;
