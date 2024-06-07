# Web Portal

## Feature

- **Login Page**
  - A Login page to verify the identification of the clinician by username and password

- **Patient List Page (a dashboard)**
  - A list of all participants currently using the app (registered in the study) in table with columns: username, alert (or not), last time of report (the latest reported record's time), respectively
  - In the "alert (or not)" column, clinicians should be notified if a participant has not reported attacks for more than 2 days before today. An alert, such as a highlighted icon, should be shown. The participant with the alert should be displayed first. The longer a participant goes without reporting, the higher their priority. For example, if participant A has not reported for the past 3 days and participant B has not reported for the past 2 days, A should be sorted above B.

- **Patient Detail Page**
  - Any participant in the list on the dashboard can be selected to navigate to the participant's detail page
  - A table to show all Raynauds records in a time reverse manner (the latest record should be shown on the top). The columns of the table is "attack date", "attack time", "location". If there are more than 10 records for a patient, you need to make a pagination.
  - A bar chart to show the daily number of records for the past seven days since TODAY

## Technique

The **web portal** should be implemented in Angular 2+ (latest version recommended). For page navigation between login page, patient list page and patient detail page, you need to use [Angular Router](https://angular.io/guide/router) to implement.
