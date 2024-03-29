# CRM Frontend

This is the repository of the CRM Frontend - part of the CRM Fullstack Application.

## High Level Overview

The CRM Frontend is responsible for maintaining relationships with clients and potential clients. It allows for organization of various Accounts, Contacts, and Leads currently, each of which belongs to a particular end user upon entry into the system.

The CRM Frontend is the main way users interact with the CRM Backend found [here](https://github.com/ChristopherH-eth/Lumen-crm-website-backend), and is built using ReactJS. It represents the 'view' of the MVC architecture that this application is designed around, and handles the sending of client requests to the CRM Backend, as well as the display of relevant responses to the user.

## Authentication

This application uses JWT as the primary authentication method. When a user successfully logs in, they are issued a JWT token in the form of a cookie only accessable by the browser. This token expires after a certain period of time, prior to which (if the user is still logged in) the application will automatically initiate a silent refresh. This allows the user to stay secure by having their token refresh in the background, and obtaining a new token in case their current token becomes compromised.

## Data Objects

The CRM handles a variety objects including Accounts, Contacts, Leads, Opportunities, etc. Each objects has its own layout, and its own set of fields. These fields can be edited, saved, and stored in the database, or the objects themselves can be deleted completely.

Each object has its own unique ID. This field cannot be changed, is unique to the object of that type, and if that object is deleted, no other object can ever have that same ID.

## Future Development

- Customizable object layouts
- Ability for end users to create their own fields for various objects
- User groups and permissions
