class SwapiService {
    _URL = "https://swapi.co/api";

    getResource = async (url) => {
        const res = await fetch(this._URL + url);
        const body = await res.json();
        return body;
    }
    
    async getAllPeople(){
        return await this.getResource("/people");
    }

    async getPerson(id){
        return await this.getResource(`/people/${id}`);
    }

    async getAllPlanets(){
        return await this.getResource("/planets");
    }

    async getPlanet(id){
        return await this.getResource(`/planets/${id}`);
    }

    async getAllStarships(){
        return await this.getResource("/starships");
    }

    async getStarship(id){
        return await this.getResource(`/starships/${id}`);
    }
}

export default SwapiService;