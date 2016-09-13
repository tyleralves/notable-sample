Introduction:
This sample application shows a possible dashboard implementation that could be used by Notable Labs to manage patients. Both staff and clients (physicians) users are allowed to create new patients. Staff are able to organize patient results and status and clients (physicians) are able to view those results and status updates. 

To see a quick screen capture demonstrating all features, please visit: vimeo.com/

The app is written using Ruby on Rails with Angular 1.5 on the front-end. User Authentication is handled with the Devise Ruby gem. Highcharts is used to display patients test results uploaded from a csv (details below).

Instructions:
1. Login as either a staff or client (physician) user.
    - staff: 
    username: test1@test.com
    password: bernard
    - Client: 
    username: test_doc1@test.com
    password: bernard
    --> Redirects to Dashboard component
2. Components 
Dashboard: Initial(home) page upon successful authentication
  - Patients-user component panel displays table of patients that are under the care of logged in user (either staff or physician)
    + Clicking on a patient row changes view to patient component (see below)
    + Allows staff-type users to 'Reassign' patient to a different staff scientist
  - Create-patient component panel allows either user type to create a new patient
Patient: Shows information about selected patient
  - Info component shows patient information and status
    + Allows staff-type users to add status notes
  - Results component shows patient test results in a bar graph
    + Allows staff-type users to upload csv or test results
      = Currently, csv must be formatted with "combination" and "score" columns (see example in github repo root directory)
Patient-list: List of all patients (only viewable by staff-type users)
  - Single component
    + Allows staff-type users to 'Assign' patient to a staff scientist



Next Steps:
1. Add server-side permissions to limit user access based on usertype (staff or client)
  - Currently server-side permissions don't discriminate based on type of user
2. Enhance form validations to provide more information (Devise flash messages) on login and register errors
3. Add 'Messages' and 'Notepad' components