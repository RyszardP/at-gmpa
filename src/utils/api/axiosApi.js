import axios from 'axios';
import { apiUrls } from './apiUrls';
import { apiData } from './apiData';

const axiosInstance = axios.create({
  headers: apiData.header_data,
});

class AxiosApi {
  static getFeature(appFeature) {
    const url = apiUrls.FEATURE.api.get(appFeature);
    return axiosInstance.get(url);
  }

  static createDashboard(data) {
    const url = apiUrls.DASHBOARD.api.post;
    return axiosInstance.post(url, data);
  }

  static deleteDashboard(dashboardId) {
    const url = apiUrls.DASHBOARD.api.delete(dashboardId);
    return axiosInstance.delete(url);
  }

  static updateDashboard(dashboardId, data) {
    const url = apiUrls.DASHBOARD.api.put(dashboardId);
    return axiosInstance.put(url, data);
  }
}

export default AxiosApi;
