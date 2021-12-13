import _ from "lodash";
import { IDpsSuccessStory, IDpsSuccessStoryUpdate } from "./IDpsSuccessStory";

export default class DpsSuccessStoryWrapper {
  private readonly _photos: string[] = [];
  constructor(private readonly successStory: IDpsSuccessStory) {
    this._photos = _.flatMap(successStory.updates, (update) => update.photos);
  }

  public get id(): string { return this.successStory.id; }
  public get name(): string { return this.successStory.name; }
  public get photos(): string[] { return this._photos; }
  public get updates(): IDpsSuccessStoryUpdate[] { return this.successStory.updates; }
}