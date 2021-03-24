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
      if (item.startsWith('f')) return item;
    };
    const newArray = filters(array, callback);

    expect(newArray).toEqual(['flower', 'field']);
  });

  it('takes array and callback and returns index of first true item', () => {
    const array = ['flower', 'rock', 'tree', 'cloud', 'field'];
    const callback = (item) => {
      if (item.startsWith('r')) return item;
    };
    const newArray = findIndexes(array, callback);

    expect(newArray).toEqual(1);
  });

  it('takes array and callback and returns accumulator', () => {
    const array = [1, 2, 3, , 4];
    const callback = (accumulator, item) => {
      return accumulator + item;
    };
    const newArray = reduces(array, callback, 4);

    expect(newArray).toEqual(14);
  });

  it('takes array and callback and returns true if all are true', () => {
    const array = ['flower', 'rock', 'tree', 'cloud', 'field'];
    const callback = (item) => item.startsWith('f');
    const newArray = everys(array, callback);

    expect(newArray).toBeFalsy();
  });

  it('takes array of numbers and callback and returns true if all are true', () => {
    const array = [1, 2, 3, 4, 4];
    const callback = (item) => typeof item === 'number';
    const newArray = everys(array, callback);

    expect(newArray).toBeTruthy();
  });
});
