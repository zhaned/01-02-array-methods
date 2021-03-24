const { maps, filters, findIndexes, reduces, everys } = require('./index');

describe('tests functions similar to array operations', () => {
  it('takes an array and doubles it', () => {
    const array = [1, 2, 3, 4, , 5];
    const callback = (item) => item * 2;

    const newArray = maps(array, callback);

    expect(newArray).toEqual([2, 4, 6, 8, , 10]);
  });

  it('takes array and callback and returns first index thats true', () => {
    const array = ['flower', 'rock', 'tree', 'cloud', 'field'];
    const callback = (item) => {
      if(item.startsWith('f')) return item;
    };
    const newArray = filters(array, callback);

    expect(newArray).toEqual(['flower', 'field']);
  });
  
});
