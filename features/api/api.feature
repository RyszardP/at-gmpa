Feature: Api scenarios
@api
  Scenario: Send Get requests
    When Send GET request for "dashboard"
    Then Response status code should be 200

  Scenario: Create dashboard and delete via API
    Given Create "dashboard" via API
      And Log in to RP
      And Open "All Dashboards" page
    Then Check that New Created Dashboard is present on All Dashboards page
    When Delete created dashboard via API
      And Refresh page
    Then Check that New Created Dashboard is absent on All Dashboards page

    Scenario: (NEGATIVE) Open dashboard page and check
      Given Create "dashboard" via API
        And Delete created dashboard via API
      When Log in to RP
        And Open "All Dashboards" page
      Then Check that New Created Dashboard is absent on All Dashboards page

    Scenario: Create and change via API before log in
      Given Create "dashboard" via API
        And Change status to not shared and name to "Edit Via API before login" for dashboard via API
      Then Response status code should be 200
      When Log in to RP
        And Open "All Dashboards" page
      Then Check that "Edit Via API before login" dashboard is present on All Dashboards page
        And Check that for "Edit Via API before login" dashboard "Shared" icon is absent on All Dashboards page
        And Delete created dashboard via API
        And Refresh page
      Then Check that "Edit Via API before login" dashboard is absent on All Dashboards page

