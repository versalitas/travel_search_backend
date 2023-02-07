# TRAVEL SEARCH ENGINE

## MVP travel search engine for vueling hackaton.

Project developed with node.js, express.js, mongoose as ORM, and MongoDB as persistence.



Requirements for running the app: Node.js installed and MongoDB.
Postman for testing endpoints with provided collection.

```
Clone repositary into your custom IDE.
```
Install npm
```
npm init 
```
Run the app.js

```
npm run start
```
Open collection of endpoints in postman.


The challenge:

Technical Requirements:

Needs to cater for changes of or additional restrictions or new features.


Operational requirements:

Minimum three letters from standard input requiered to execute the search.
Retrieve results for user input that match anywhere in the cities' names.

A "land trip" has two hotels with names and categories.
An "air trip" has two flights with departure city and departure time.

Supports Middle East and Asian languages.

Output:
Trip Name.
Type of trip.
Duration.
Names of the cities.
Specific details (For hotels: name and category, for flights: departure city and time).

Example for «Mad»:

Europe Popular Capitals; Land Trip; 3 days; Madrid, Paris, London; Hotel Best Madrid 3*, Hotel Worst Paris 4*
Europe laying out cities; Land Trip; 3 days; Berlín, Madrid; Hotel Best Madrid 3*, Hotel Worst Berlin 4*
Infinite Egipt; Air Trip; 4 days; Madrid, القاهرة, الأقصر; Madrid 09:00, الأقصر 10:00
Incredible China; Air Trip; 10 dies; Barcelona, Madrid, 广州市, 北京市; Madrid 09:00, 北京市 10:00
