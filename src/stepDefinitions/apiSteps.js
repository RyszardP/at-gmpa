import { Given, Then, When } from '@wdio/cucumber-framework';
import { ScenarioContext } from '../utils';
import { expect } from 'chai';
import { EntityGenerator, ApiService } from '../service';

When(/^Send GET request for "([^"]*)"$/, async appFeature => {
  const apiClient = await ApiService.selectClient();
  const responseData = await apiClient.getFeature(appFeature);
  await ScenarioContext.setContextProperty('response', responseData);
});

Then(/^Response status code should be ([1-5]\d\d)$/, async expectedStatusCode => {
  const responseBody = await ScenarioContext.getContextProperty('response');
  const actualStatusCode = responseBody.status;
  console.log('Response status:' + actualStatusCode);  // eslint-disable-line
  const errorMessage = `Response status code should be ${expectedStatusCode}, actual is ${actualStatusCode}`;
  expect(actualStatusCode).to.equal(Number(expectedStatusCode), errorMessage);
});

Given(/^Create "([^"]*)" via API(.+)?$/, async (appFeature, requestBody) => {
  const appFeatureBody = await new EntityGenerator().createAppFeature(appFeature);
  const apiClient = await ApiService.selectClient();
  const responseData = await apiClient.createDashboard(requestBody === null ? appFeatureBody : requestBody);
  await ApiService.getIdInResponse(responseData);
});

When(/^Delete created dashboard via API$/, async () => {
  const apiClient = await ApiService.selectClient();
  const dashboardIdFromContext = await ScenarioContext.getContextProperty('dashboardId');
  await apiClient.deleteDashboard(dashboardIdFromContext);
});

When(/^Change status to not shared and name to "([^"]*)" for dashboard via API$/, async data => {
  const dashboardIdFromContext = await ScenarioContext.getContextProperty('dashboardId');
  const dataToUpdate = {
    name: `${data}`,
    share: false,
  };
  const apiClient = await ApiService.selectClient();
  const responseData = await apiClient.updateDashboard(dashboardIdFromContext, dataToUpdate);
  return ScenarioContext.setContextProperty('response', responseData);
});
