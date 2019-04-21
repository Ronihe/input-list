This is a simple crud webapp. Since there is only Create and Read, maybe not even a full CRUD app. The backend uses node and express as the framework, postgres is the database. The frontend uses react, react boilerplate and redux.

The backend utilizes REST endpoints with JSON payloads. 

# Notes for Roni
- Describe what the endpoints look like.

There is one endpoint, "/inputs", in the backend with two different http request types.
The first is GET
GET retrieves the list of inputs from the user. An input is made up of a free-text string, datetime and the record id.
The backend utilizes JSON for request/response payloads.

The second is POST
POST submits a new input from the user. Only the free-text string "input" is required for the POST. 

database:
table , columns


## Front end 
The front end is built with the react boilerplate, it comes with the the 



state management: This boilerplate manages application state using Redux, makes it immutable with ImmutableJS and keeps access performant via reselect.

3 priciples of redux: single source of truth
                                read-only
                                purefunction

for managint the synchronous flows with redux-saga

For routing, we use react-router in combination with connected-react-router.
     url is part of that state
     connected-react-router takes care of synchronizing the location of our application with the application state.

for styling: I used the styled-components for styling react components. allows you to write css inside of JS.

for testing: Jest for Unit Testing.



  - sperate the component into two categories
  the phylosophy:
  scalability: 
  state management:
  architechture: split yout components into containers and components, containers handle the state, if the data changes, i only need to look at my containers, change styling just going to look at the 
  
  performance:


- generators in ES6: A generator is a function that can stop midway and then continue from where it stopped.  it doesn't follow the run-to -completion model, a generator is a function which returns an object on which you can call next(). yiled is a operator can pause itself 

-  selector:  This helps us format the state/data that we receive from the redux state tree and by doing this, we save a lot of time coding new functions that handle state restructuring or formatting the target state every time we need it to render something in the front-end. 

- 


