class SwapiService {
    _URL = "https://swapi.co/api";

    getResource = async (url) => {
        const res = await fetch(this._URL + url);
        const body = await res.json();
        return body;
    }

    async getAllPeople() {
        const persons = await this.getResource("/people");
        return persons.map(this._transformPerson);
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    }

    async getAllPlanets() {
        const planets = await this.getResource("/planets");
        return planets.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    async getAllStarships() {
        const ships = await this.getResource("/starships");
        return ships.map(this._transformSpaceship);
    }

    async getStarship(id) {
        const ship = await this.getResource(`/starships/${id}`);
        return this._transformSpaceship(ship);
    }

    _extractId(item) {
        const reg = /\/([0-9]+)\/$/;
        const id = item.url.match(reg);
        console.log("id is - ", id[1]);
        return id[1];
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            diameter: planet.diameter,
            rotationPeriod: planet.rotation_period,
        };
    }

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthOfYear: person.birthOfYear,
            eyeColor: person.eyeColor,
        };
    }

    _transformSpaceship(spaceship) {
        return {
            id: this._extractId(spaceship),
            name: spaceship.name,
            model: spaceship.model,
            manufacturer: spaceship.manufacturer,
            costInCredits: spaceship.costInCredits,
            length: spaceship.length,
            crew: spaceship.crew,
            passengers: spaceship.passengers,
            cargoCapacity: spaceship.cargoCapacity,
        };
    }
}

export default SwapiService;