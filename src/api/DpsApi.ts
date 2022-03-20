import { IDpsFostersApiResponse } from "../model/IDpsFoster";
import { IDpsIcuAnimal } from "../model/IDpsIcuAnimal";
import { IDpsStickyDog } from "../model/IDpsStickyDog";
import { IDpsSuccessStory, IDpsSuccessStoryCompact } from "../model/IDpsSuccessStory";
import { IDpsAvailableApiResponse, IDpsAvailableIdResponse, IDpsDatesApiResponse, IDpsVolunteerApiResponse } from "./IDpsApiResponses";

export default class DpsApi {
  private static baseUrl = process.env.REACT_APP_API_URL || 'https://api.dpsrescue.link/' // test API;

  private static assembleUrl(endpoint: string, params?: { [key: string]: string }): string {
    const url = new URL(endpoint, DpsApi.baseUrl);
    params && Object.keys(params).forEach(param => url.searchParams.append(param, params[param]));
    return url.toString();
  }

  private static fetchAndReturnJson<T>(endpoint: string, params?: { [key: string]: string }): Promise<T> {
    return fetch(DpsApi.assembleUrl(endpoint, params)).then((response: Response) => response.json());
  }

  public static getAvailableCompact(): Promise<IDpsAvailableApiResponse> {
    return DpsApi.fetchAndReturnJson<IDpsAvailableApiResponse>('available/all');
  }

  public static getAvailableById(id: string): Promise<IDpsAvailableIdResponse> {
    return DpsApi.fetchAndReturnJson<IDpsAvailableIdResponse>(`available/object/${id}`);
  }

  public static getDates(): Promise<IDpsDatesApiResponse> {
    return DpsApi.fetchAndReturnJson<IDpsDatesApiResponse>('sheets/dates');
  }

  public static getSticky(): Promise<IDpsStickyDog[]> {
    return DpsApi.fetchAndReturnJson<IDpsStickyDog[]>('sheets/sticky');
  }

  public static getFosters(): Promise<IDpsFostersApiResponse> {
    return DpsApi.fetchAndReturnJson<IDpsFostersApiResponse>('sheets/fosters');
  }

  public static getIcu(): Promise<IDpsIcuAnimal[]> {
    return DpsApi.fetchAndReturnJson<IDpsIcuAnimal[]>('sheets/icu');
  }

  public static getSuccessStories(): Promise<IDpsSuccessStoryCompact[]> {
    return DpsApi.fetchAndReturnJson<IDpsSuccessStoryCompact[]>('/sheets/success/all');
  }

  public static getSuccessStoryById(id: string): Promise<IDpsSuccessStory> {
    // API returns an array even when querying a single story
    return DpsApi.fetchAndReturnJson<IDpsSuccessStory>(`sheets/success/object/${id}`);
  }

  public static getVolunteers(): Promise<IDpsVolunteerApiResponse> {
    return DpsApi.fetchAndReturnJson<IDpsVolunteerApiResponse>('sheets/volunteers');
  }
}