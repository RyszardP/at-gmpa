class ScenarioContext {
  static scenarioData = {};

  static setContextProperty(property, value) {
    if (this.scenarioData[`${property}`]) {
      throw new Error(`Property ${property} could not be overwritten`);
    }
    this.scenarioData[`${property}`] = value;
  }

  static getContextProperty(property) {
    if (this.scenarioData[`${property}`]) {
      return this.scenarioData[`${property}`];
    }
    throw new Error(`Property ${property} does not exist in scenario data object`);
  }

  static cleanScenarioContext() {
    this.scenarioData = {};
  }
}

export default ScenarioContext;
