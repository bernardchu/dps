import { sheets_v4 } from 'googleapis';

export class SheetDataProcessor {
  /**
   * Simplifies and trims data from Google sheets API
   * @param data Row data from sheets
   * @returns array of string arrays representing just the data in the grid
   */
  public static simplify(data: sheets_v4.Schema$RowData[]) {
    // get rid of the unnecessary complexity and nesting from Google's data structure
    const rowValues = data.map(row => row.values);
    const justValues = rowValues.map(row => row.map(cell => cell.formattedValue));
    // the first row will be headers; we don't want those.
    justValues.shift();
    // Google also returns a bunch of empty rows that we don't need; trim those
    const filtered = justValues.filter(row => !row.every(cell => cell === undefined));
    return filtered;
  }
}