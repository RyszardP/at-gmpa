const locators = {
  login: 'input[name="login"]',
  password: 'input[name="password"]',
  buttons: {
    submit: 'button[type="submit"]',
    dashboardButton: '//*[contains(@class, "sidebarButton")]//a[contains(@href, "dashboard")]',
  },
  dashboard: {
    dashboardByName: name => `//div[contains(@class, "gridRow")]//a[contains(text(), "${name}")]`,
    dashboardTitle: title => `//span[@title="${title}"]`,
  },
  widget: {
    widgetHandle: '//span[contains(@class, "react-resizable-handle")]',
    widgetBody: widgetName => `//div[contains(text(), "${widgetName}")]//ancestor::div[contains(@class, "widgetsGrid")]`,
    widgetHeader: widgetName => `//div[contains(text(), "${widgetName}")]//ancestor::div[contains(@class, "widget__widget-header")]`,

  }

};

export default locators;
