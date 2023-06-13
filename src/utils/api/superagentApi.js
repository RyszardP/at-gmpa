import superagent from 'superagent';
import { apiUrls } from './apiUrls';
import { apiData } from './apiData';


class SuperagentApi {
  static getFeature(appFeature) {
    const url = apiUrls.FEATURE.api.get(appFeature);
    return superagent.get(url)
      .set(`${apiData.header_data}`);
  }

  static createDashboard(data) {
    const url = apiUrls.DASHBOARD.api.post;
    return superagent.post(url)
      .set(apiData.header_data)
      .send(data);
  }

  static deleteDashboard(dashboardId) {
    const url = apiUrls.DASHBOARD.api.delete(dashboardId);
    return superagent.delete(url)
      .set(apiData.header_data);
  }

  static updateDashboard(dashboardId, data) {
    const url = apiUrls.DASHBOARD.api.put(dashboardId);
    return superagent.put(url)
      .set(apiData.header_data)
      .send(data);
  }
}

export default SuperagentApi;
