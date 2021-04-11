# React-Form-List
This is a project to practice on CRUD-API of form and list writen in React with redux, reactstrap, uuid, JSON-Server API, TypeScript.


1.0 - Use immutability helper and GlobalState;


2.0 - Use hook(useCallback), and redux(user actions and reducers, root reducer, store) to replace the usage of GlobalState; 


3.0 - Use JSON server API & components optimization (use share components as much as possible);


4.0 - Re-write as TypeScript (airbnb-recommended-rules);


Demenstration - this is a several versions practice, and the functions achieved include:


version 1.0 - use GlobalState and AppReducer to pass props and actions:


Form.js contains dropdown menu options and on submit; //
List.js contains the single and multiple checkbox connect with delete function. //
Detail.js can check the details by click on each description inside the list, will jump to a specific page based on their own id


version 2.0 - use Redux to replace the use of GlobalState:


store folder contains: user folder includes user actions and reducers; root-reducer, to combine all the reducers together; store, to apply middleware and create store to combine the root-reducer with middlewares. //
Fixed multiple bugs and uptimise the performance by using some of the hook.


version 3.0 - implement JSON Server API with redux thunk:


add all the api request(get, post, delete, put) into thunk.js(previous action.js); //
add editable function inside Detail.js; //
change form item into reusable component; //
make a reusable componet of confirmation pop up window, here used for after clicking the delete button to ask double confirm about delete; //
re-write api calls function inside thunk.js as share component and import to thunk.js file; //


version 4.0 - re-write the project as airbnb-recommended-typescript
