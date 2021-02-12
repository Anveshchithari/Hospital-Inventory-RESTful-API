# Hospital-Inventory-RESTful-API #
This repository consists of a project based on CRUD API using Express JS, Node JS, and MongoDB for Hospital Inventory.
## Problem Statement ##
This project aims at building an inventory tracking system for ventilators that allows authorized hospital users to input details of the available inventory and tag it as “occupied”, “available” and “in-maintenance”. The three status can also be updated using a secure API for real time usage metrics. The application should have the ability to also add any ventilator to a specific hospital and search ventilators which are available.
## Implementation and project details ##
### MongoDB Database ###
The database "hospitalInventory" consists of two collections:

1."hospital"

2."ventilator"

The database.txt file contains the database schema and the entries made into the database.
## POSTMAN ##
I have used POSTMAN for testing and posting details of API
## ALogin and get token for authentication
1.Verify Authorization
2.Read Hospital Details
3.Read Ventilator Details
4.Search Ventilators by status
5.Search Ventilators by Hospital name
6.Search Hospital by Hospital Name
7.Update Ventilator Details
8.Add Ventilator
9.Delete Ventilator by VentilatorIdPI
