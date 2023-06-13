export default class GetElementStatus {
  static async statusOfElementIsDisplayed(elementLocator) {
    const status = await $(elementLocator).isDisplayed();
    return status;
  }
}
