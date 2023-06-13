import { AxiosApi, ScenarioContext, SuperagentApi } from '../utils';
import { initUrl } from '../../configs/modeConfiguration';

class ApiService {
  static apiVersion = initUrl.api_ver.apiVer;

  static selectClient() {
    const clientVersionMap = {
      axios: AxiosApi,
      superagent: SuperagentApi,
    };
    return clientVersionMap[this.apiVersion];
  }

  static getIdInResponse(responseData) {
    const apiClientMap = {
      axios: responseData.data,
      superagent: responseData._body,
    };
    return ScenarioContext.setContextProperty('dashboardId', apiClientMap[this.apiVersion].id);
  }
}

export default ApiService;
