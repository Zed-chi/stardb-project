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
        const planets = await this.getResource("/planets");
        return planets.results.map(this._transformPlanet);
    }

    async getPlanet(id){
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    async getAllStarships(){
        return await this.getResource("/starships");
    }

    async getStarship(id){
        return await this.getResource(`/starships/${id}`);
    }

    _transformPlanet(planet){
        return {
            name:planet.name,
            population:planet.population,
            diameter:planet.diameter,
            rotationPeriod:planet.rotation_period,
        };
    }
}

export default SwapiService;