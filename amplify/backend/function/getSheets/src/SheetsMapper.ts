/**
 * The data we get from the sheets DB is basically just a grid of strings, so it's
 * helpful to be able to map them to objects with helpful keys instead of just working
 * directly with the arrays.
 */
export class SheetsMapper {

  /**
   * @param rowsData grid data from sheets DB
   * @param keys the keys to which cell data should be mapped in the order in which they appear in the sheet
   * @returns array of objects with each object pertaining to one cell in a row
   */
  public static mapData<T>(rowsData: string[][], keys: Array<keyof T>): T[] {
    return rowsData.map(row => {
      return keys.reduce((obj, key, index) => {
        obj[key as string] = row[index];
        return obj;
      }, {}) as unknown as T;
    })
  }
}