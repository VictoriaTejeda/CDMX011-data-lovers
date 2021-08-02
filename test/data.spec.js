import {sortByAtoZ, searchByTeam, searchBySport} from "../src/data.js";
//import data from "./data/athletes/athletes.js";
//import athletes from "../src/data/athletes/athletes.js";
//import athletes from "../src/data/athletes/athletes.js";
import dataX from "./data/dataX.js";
import testSort from "./data/testSort.js";



describe('Deberia ser una función', () => {
  it('es una función', () => {
    expect(typeof sortByAtoZ).toBe('function');
  });

  it('Deberia estar en orden alfabético A-Z', () => {
    const result= sortByAtoZ(dataX["athletes"]);
    console.log("esto traigo " + result);
    expect(result).toEqual(testSort);

  });
});

describe('deberia ser una función', () => {
  it('es una función', () => {
    expect(typeof searchByTeam).toBe('function');
  });

  it('deberia filtrar por pais considerando previos datos', () => {
    const result = searchByTeam(dataX["athletes"], "Russia",false);
    console.log("tamano de filtrado por pais es: "+result.length);
    expect(result.length).toBe(3);
  });

  it('deberia filtrar por pais tomando en cuenta la informacion completa', () => {
    const result = searchByTeam(null, "Russia",true);
    console.log("tamano de filtrado por pais es: "+result.length);
    expect(result.length).toBe(115);
  });
});
describe('deberia ser una función', () => {
  it('es una función', () => {
    expect(typeof searchBySport).toBe('function');
  });

  it('deberia filtrar por deporte considerando previos datos', () => {
    const result = searchBySport(dataX["athletes"], "Taekwondo",false);
    console.log("tamano de filtrado por deporte es: "+result.length);
    expect(result.length).toBe(2);
  });

  it('deberia filtrar por deporte tomando en cuenta la informacion completa', () => {
    const result = searchBySport(null, "Taekwondo",true);
    console.log("tamano de filtrado por deporte es: "+result.length);
    expect(result.length).toBe(32);
  });
});
//searchBySport, searchByGender, searchByMedal*/
