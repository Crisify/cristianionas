import {Injectable} from '@angular/core';
import mixpanel from "mixpanel-browser";

@Injectable({
  providedIn: 'root'
})
export class MixpanelService {
  projectToken = 'b2fe2caf7579b3e40bf30f83bf1e84d1';

  constructor() {
    this.init();
  }

  /**
   * Initialize mixpanel.
   *
   * @memberof MixpanelService
   */
  init(): void {
    mixpanel.init(this.projectToken);
    mixpanel.identify(this.projectToken);
  }

  /**
   * Push new action to mixpanel.
   *
   * @param {string} id Name of the action to track.
   * @param {*} [action={}] Actions object with custom properties.
   * @memberof MixpanelService
   */
  track(id: string, action: any = {}): void {
    const defaultAction: any = {
      ...action,
      sessionId: mixpanel.get_distinct_id()
    };
    mixpanel.track(id, defaultAction);
  }
}
