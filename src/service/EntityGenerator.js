import Fakerator from 'fakerator';
import { ScenarioContext } from '../utils';

const fakerator = Fakerator();

class EntityGenerator {
  async createAppFeature(appFeature) {
    const featureMap = {
      dashboard: await this.createDashboard(),
    };
    return featureMap[appFeature];
  }

  async createDashboard() {
    const body = {
      name: `Dashboard ${fakerator.random.string(6).toUpperCase()}`,
      description: `Dashboard description ${fakerator.random.string(15)}`,
      share: true,
    };
    await ScenarioContext.setContextProperty('dashboard', body);
    return body;
  }
}

export default EntityGenerator;
