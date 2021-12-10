import { IDpsAvailableApiResponse, IDpsAvailableIdResponse, IDpsDatesApiResponse } from "./IDpsApiResponses";

export default class DpsApi {
  private static baseUrl = 'http://api.dpsrescue.com/api/';
  // private static baseUrl = 'http://roastonbone.com/dps-test/dps-api/api/'; // test API
  private static suffix = '.php';

  private static assembleUrl(endpoint: string, params?: { [key: string]: string }): string {
    const url = new URL(endpoint + DpsApi.suffix, DpsApi.baseUrl);
    params && Object.keys(params).forEach(param => url.searchParams.append(param, params[param]));
    return url.toString();
  }

  private static get featured(): string { return DpsApi.assembleUrl('featured') }
  private static get available(): string { return DpsApi.assembleUrl('available') }
  private static get availableCompact(): string { return DpsApi.assembleUrl('available', { view: 'compact' }) }
  private static get dates(): string { return DpsApi.assembleUrl('dates') }
  private static get volunteers(): string { return DpsApi.assembleUrl('volunteers') }
  private static get fosters(): string { return DpsApi.assembleUrl('fosters') }
  private static get sticky_dogs(): string { return DpsApi.assembleUrl('sticky_dogs') }
  private static get icu(): string { return DpsApi.assembleUrl('icu') }
  private static get success(): string { return DpsApi.assembleUrl('success') }
  private static get newsletters(): string { return DpsApi.assembleUrl('newsletters') }

  private static fetchAndReturnJson<T>(path: string): Promise<T> {
    return fetch(path).then((response: Response) => response.json());
  }

  public static getAvailableCompact(): Promise<IDpsAvailableApiResponse> {
    return this.fetchAndReturnJson<IDpsAvailableApiResponse>(DpsApi.availableCompact);
  }

  public static getAvailableById(id: string): Promise<IDpsAvailableIdResponse> {
    const url = new URL(DpsApi.available);
    url.searchParams.append("id", id);
    return this.fetchAndReturnJson<IDpsAvailableIdResponse>(url.toString());
  }

  public static getDates(): Promise<IDpsDatesApiResponse> {
    return this.fetchAndReturnJson<IDpsDatesApiResponse>(DpsApi.dates);
  }
}