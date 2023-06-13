import { initUrl } from '../../../configs/modeConfiguration';

export const apiUrls = {
  FEATURE: {
    api: {
      get: appFeature => `${initUrl.rp_ui.baseUrl}/api/v1/superadmin_personal/${appFeature}`,
    },
  },
  DASHBOARD: {
    api: {
      put: dashboardId => `${initUrl.rp_ui.baseUrl}/api/v1/superadmin_personal/dashboard/${dashboardId}`,
      post: `${initUrl.rp_ui.baseUrl}/api/v1/superadmin_personal/dashboard`,
      delete: dashboardId => `${initUrl.rp_ui.baseUrl}/api/v1/superadmin_personal/dashboard/${dashboardId}`,
    },
  },
};
