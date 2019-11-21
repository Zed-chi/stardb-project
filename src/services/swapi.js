class SwapiService {
    _apiBaseUrl = "https://swapi.co/api";
    _imgBaseUrl = "https://starwars-visualguide.com/assets/img";


    getResource = async (url) => {
        const res = await fetch(this._apiBaseUrl + url);
        const body = await res.json();
        return body;
    }

    getAllPeople = async ()=> {
        const persons = await this.getResource("/people");
        return persons.results.map(this._transformPerson);
    }

    getPerson = async (id)=> {
        const person = await this.getResource(`/people/${id}`);
        return this._transformPerson(person);
    }

    getAllPlanets = async() => {
        const planets = await this.getResource("/planets");
        return planets.results.map(this._transformPlanet);
    }

    getPlanet = async(id) => {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    getAllStarships = async() => {
        const ships = await this.getResource("/starships");
        return ships.results.map(this._transformSpaceship);
    }

    getStarship = async(id) => {
        const ship = await this.getResource(`/starships/${id}`);
        return this._transformSpaceship(ship);
    }

    _extractId(item) {
        const reg = /\/([0-9]+)\/$/;
        const id = item.url.match(reg);        
        return id[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            diameter: planet.diameter,
            rotationPeriod: planet.rotation_period,
        };
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthOfYear: person.birth_year,
            eyeColor: person.eye_color,
        };
    }

    _transformSpaceship = (spaceship) => {
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

    getPersonImage = ({id})=>{
        return `${this._imgBaseUrl}/characters/${id}.jpg`
    };

    getStarshipImage = ({id})=>{
        return `${this._imgBaseUrl}/starships/${id}.jpg`
    };

    getPlanetImage = ({id})=>{
        return `${this._imgBaseUrl}/planets/${id}.jpg`
    };
}

export default SwapiService;