Feature: Open Dashboard page. Add new dashboard, edit and delete
  Background:
    Given Log in to RP
  @dashboard
  Scenario: Open Dashboard page
    Then Check "sidebar" is present
    When Hover on "dashboard" button in side menu
    Then Check "Dashboards" popup is present
    When Click on "dashboard" button

  Scenario: Add and delete new dashboard
    Then Check "sidebar" is present
    When Hover on "dashboard" button in side menu
    Then Check "Dashboards" popup is present
    When Click on "dashboard" button
    Then Check "Add New Dashboard" button is present
      And Check that "DEMO DASHBOARD" dashboard is present on All Dashboards page
    When Click on "Add New Dashboard" button
    Then Check that title "Add New Dashboard" is present on modal window
      And Check that "Cross" button is present on modal window
      And Check that "Cancel" button is present on modal window
      And Check that "Add" button is present on modal window
    When Select value "New Dashboard" in "Name" field on modal window
      And Select value "New Dashboard Description" in "Description" field on modal window
      And Click on "Add" button on modal window
      And Open "All Dashboards" page
    Then Check that "New Dashboard" dashboard is present on All Dashboards page
    When Click for "New Dashboard" "Delete" button on All Dashboards page
      And Click on "Delete" button
    Then Check that "New Dashboard" dashboard is absent on All Dashboards page

  Scenario Outline: (Negative) Add new dashboard with <Name> name and <Description> description
    Then Check "sidebar" is present
    When Hover on "dashboard" button in side menu
    Then Check "Dashboards" popup is present
    When Click on "dashboard" button
    Then Check "Add New Dashboard" button is present
      And Check that "DEMO DASHBOARD" dashboard is present on All Dashboards page
    When Click on "Add New Dashboard" button
    Then Check that title "Add New Dashboard" is present on modal window
    When Select value "<Name>" in "Name" field on modal window
      And Select value "<Description>" in "Description" field on modal window
    Then Check that field error is present on modal window
    When Click on "Cancel" button on modal window

    Examples:
      | Name                                                                                                                               | Description                            |
      | DA                                                                                                                                 | Short name Description                 |
      | ^                                                                                                                                  | Description  with symbol               |
      | CGtlJFgMbXjSvlJlCMsaHSYVQTTLmFrelCeSXAzEbeuVvWXsMkAzqWkewhigHuFeJpOGKVRDpYjmcSAupfFnwDzkUFdodyJsNYYCDcMuqqUkEOASYgoVqtUSQycIjrSqTZ | Description with more than 128 symbols |

  Scenario: Add, edit and delete dashboard
    Then Check "sidebar" is present
    When Hover on "dashboard" button in side menu
    Then Check "Dashboards" popup is present
    When Click on "dashboard" button
    Then Check "Add New Dashboard" button is present
    When Click on "Add New Dashboard" button
    Then Check that title "Add New Dashboard" is present on modal window
    When Select value "Editable" in "Name" field on modal window
    Then Check that Share toggle is disabled
      And Select value "Editable Dashboard Description" in "Description" field on modal window
    When Click Share toggle
    Then Check that Share toggle is enabled
      And Click on "Add" button on modal window
      And Open "All Dashboards" page
    Then Check that "Editable" dashboard is present on All Dashboards page
      And Check that for "Editable" dashboard "Edit" icon is present on All Dashboards page
      And Check that for "Editable" dashboard "Shared" icon is present on All Dashboards page
      And Check that for "Editable" dashboard "Delete" icon is present on All Dashboards page
    When Click for "Editable" "Edit" button on All Dashboards page
    Then Check that title "Edit Dashboard" is present on modal window
      And Check that "Cross" button is present on modal window
      And Check that "Cancel" button is present on modal window
      And Check that "Update" button is present on modal window
    When Click on "Cancel" button on modal window
    Then Check that "Editable" dashboard is present on All Dashboards page
    When Click for "Editable" "Edit" button on All Dashboards page
    Then Check that title "Edit Dashboard" is present on modal window
    When Clear value in "Name" field
      And Select value "Edit Name" in "Name" field on modal window
      And Clear value in "Description" field
      And Select value "Edit Description" in "Description" field on modal window
      And Click Share toggle
    Then Check that Share toggle is disabled
    When Click on "Update" button on modal window
    Then Check that "Edit Name" dashboard is present on All Dashboards page
      And Check that for "Edit Name" dashboard "Edit" icon is present on All Dashboards page
      And Check that for "Edit Name" dashboard "Shared" icon is absent on All Dashboards page
      And Check that for "Edit Name" dashboard "Delete" icon is present on All Dashboards page
    When Click for "Edit Name" "Delete" button on All Dashboards page
      And Click on "Delete" button
    Then Check that "Edit Name" dashboard is absent on All Dashboards page
