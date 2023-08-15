# popsTracker

Figma: https://www.figma.com/file/sVzM3zouhEk9xaG3JQThfQ/Pops-Tracker?type=design&node-id=0-1&mode=design&t=EYeouFi6YjQaapHv-0 

1. Navbar Component
2. Calendar on Home page
3. Tasks route and endpoint
    - this page should also have a notes piece
        - need to create Sequelize model for notes
4. Schedule route and endpoint
    - this page should also have a place to put in change requests
        - would need to create Sequelize model for them


5. on caretakers tab -> need place to add weekends. 




basically could have a schedule model
- and it have start and end for each weekend
-> new ones created through a form on the caretakers page

- then for the 'next weekend caretaker', it could pull the one with that Friday's date as the start date
    - would need to make it a dropdown to input so that all would be entered in the same way