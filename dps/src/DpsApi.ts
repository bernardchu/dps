export default class DpsApi {
  private static baseUrl = 'http://api.dpsrescue.com/api/';
  // private static baseUrl = 'http://roastonbone.com/dps-test/dps-api/api/'; // test API
  private static suffix = '.php';

  private static assembleUrl(endpoint: string, params?: { [key: string]: string }): string {
    const url = new URL(endpoint + DpsApi.suffix, DpsApi.baseUrl);
    params && Object.keys(params).forEach(param => url.searchParams.append(param, params[param]));
    return url.toString();
  }

  public static get featured(): string { return DpsApi.assembleUrl('featured') }
  public static get available(): string { return DpsApi.assembleUrl('available') }
  public static get availableCompact(): string { return DpsApi.assembleUrl('available', { view: 'compact' }) }
  public static get dates(): string { return DpsApi.assembleUrl('dates') }
  public static get volunteers(): string { return DpsApi.assembleUrl('volunteers') }
  public static get fosters(): string { return DpsApi.assembleUrl('fosters') }
  public static get sticky_dogs(): string { return DpsApi.assembleUrl('sticky_dogs') }
  public static get icu(): string { return DpsApi.assembleUrl('icu') }
  public static get success(): string { return DpsApi.assembleUrl('success') }
  public static get newsletters(): string { return DpsApi.assembleUrl('newsletters') }
}