import { IDpsFostersApiResponse } from "../model/IDpsFoster";
import { IDpsStickyDog } from "../model/IDpsStickyDog";
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

  private static fetchAndReturnJson<T>(endpoint: string, params?: { [key: string]: string }): Promise<T> {
    return fetch(DpsApi.assembleUrl(endpoint, params)).then((response: Response) => response.json());
  }

  public static getAvailableCompact(): Promise<IDpsAvailableApiResponse> {
    return DpsApi.fetchAndReturnJson<IDpsAvailableApiResponse>('available', { view: 'compact' });
  }

  public static getAvailableById(id: string): Promise<IDpsAvailableIdResponse> {
    return DpsApi.fetchAndReturnJson<IDpsAvailableIdResponse>('available', { id });
  }

  public static getDates(): Promise<IDpsDatesApiResponse> {
    return DpsApi.fetchAndReturnJson<IDpsDatesApiResponse>('dates');
  }

  public static getSticky(): Promise<IDpsStickyDog[]> {
    return DpsApi.fetchAndReturnJson<IDpsStickyDog[]>('sticky_dogs');
  }

  public static getFosters(): Promise<IDpsFostersApiResponse> {
    return DpsApi.fetchAndReturnJson<IDpsFostersApiResponse>('fosters');
  }
}