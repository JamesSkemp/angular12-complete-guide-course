import { Ingredient } from './ingredient.model';

describe('Ingredient', () => {
  it('should create an instance', () => {
    expect(new Ingredient('Test', 1)).toBeTruthy();
  });
});
