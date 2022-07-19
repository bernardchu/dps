import { IDpsModalContent } from "../donate-modal/IDpsModalContent";
import { IDpsFostersApiResponse } from "../model/IDpsFoster";
import { IDpsIcuAnimal } from "../model/IDpsIcuAnimal";
import { IDpsStickyDog, IDpsStickyDogCompact } from "../model/IDpsStickyDog";
import { IDpsSuccessStory, IDpsSuccessStoryCompact } from "../model/IDpsSuccessStory";
import { IDpsAvailableApiResponse, IDpsAvailableIdResponse, IDpsDatesApiResponse, IDpsInHonorOfResponse, IDpsVolunteerApiResponse } from "./IDpsApiResponses";

export default class DpsApi {
  private static baseUrl = process.env.REACT_APP_API_URL || 'https://api.dpsrescue.info/' // test API;

  private static assembleUrl(endpoint: string, params?: { [key: string]: string }): string {
    const url = new URL(endpoint, DpsApi.baseUrl);
    params && Object.keys(params).forEach(param => url.searchParams.append(param, params[param]));
    return url.toString();
  }

  private static fetchAndReturnJson<T>(endpoint: string, params?: { [key: string]: string }): Promise<T> {
    return fetch(DpsApi.assembleUrl(endpoint, params)).then(async (response: Response) => {
      if (response.ok) { return response.json(); }
      return Promise.reject(await response.json());
    });
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

  public static getSticky(): Promise<IDpsStickyDogCompact[]> {
    return DpsApi.fetchAndReturnJson<IDpsStickyDogCompact[]>('sheets/sticky');
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

  public static getModalContent(): Promise<IDpsModalContent> {
    return DpsApi.fetchAndReturnJson<IDpsModalContent>('sheets/modal');
  }

  public static getInHonorOf(): Promise<IDpsInHonorOfResponse> {
    return DpsApi.fetchAndReturnJson<IDpsInHonorOfResponse>('sheets/in-honor-of');
  }
}