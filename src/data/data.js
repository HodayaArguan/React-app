import IsraelFlag from "../assets/state_of_israel.jpg"
import JapanFlag from "../assets/japan.jpg"
import ItalyFlag from "../assets/italy.jpg"
import BrazilFlag from "../assets/brazil.jpg"
import GermanyFlag from "../assets/Germany.jpg"
import USAFlag from "../assets/USA.jpg"
import CanadaFlag from "../assets/Canada.jpg"
import AustraliaFlag from "../assets/Australia.jpg"
import MexicoFlag from "../assets/Mexico.jpg"
import SpainFlag from "../assets/Spain.jpg"

const countries = [
    {id: 2002, name: "Brazil", famousBeer: "Skol", capital: "Brasília", topAttraction: "Christ the Redeemer", flag: BrazilFlag},
    {id: 2003, name: "Germany", famousBeer: "Weihenstephaner", capital: "Berlin", topAttraction: "Neuschwanstein Castle", flag: GermanyFlag},
    {id: 2004, name: "Italy", famousBeer: "Peroni", capital: "Rome", topAttraction: "Colosseum", flag: ItalyFlag},
    {id: 2009, name: "Spain", famousBeer: "Estrella Damm", capital: "Madrid", topAttraction: "Sagrada Familia", flag: SpainFlag},
    {id: 2005, name: "USA", famousBeer: "Budweiser", capital: "Washington, D.C.", topAttraction: "Grand Canyon", flag: USAFlag},
    {id: 2006, name: "Canada", famousBeer: "Molson Canadian", capital: "Ottawa", topAttraction: "Niagara Falls", flag: CanadaFlag},
    {id: 2007, name: "Australia", famousBeer: "Foster's", capital: "Canberra", topAttraction: "Sydney Opera House", flag: AustraliaFlag},
    {id: 2008, name: "Mexico", famousBeer: "Corona", capital: "Mexico City", topAttraction: "Chichen Itza", flag: MexicoFlag},
    {id: 2010, name: "Israel", famousBeer: "Goldstar", capital: "Jerusalem", topAttraction: "Western Wall", flag: IsraelFlag},
    {id: 2001, name: "Japan", famousBeer: "Sapporo", capital: "Tokyo", topAttraction: "Mount Fuji", flag: JapanFlag},
];

export default countries;