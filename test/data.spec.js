import {name, searchByTeam} from "../src/data.js";
//import athletes from "../src/data/athletes/athletes.js";
import data from "./data/athletes.js";
import testSort from "./data/testSort.js";


describe('should be an object', () => {
  test('is an object', () => {
    expect(typeof name).toBe('object');
  });

  test('should sort by name descendent', () => {
    const result= name(data["athletes"], "a" , "b")
    expect(result).toEqual(testSort);
  });
});

describe('should be a function', () => {
  it('is a function', () => {
    expect(typeof searchByTeam).toBe('function');
  });

  it('should filter by team', () => {
    const result = searchByTeam(data["athletes"], "dataX", "team", "buscarTodo");
    expect(result).toEqual(testSort);
  });
});
//searchBySport, searchByGender, searchByMedal*/
