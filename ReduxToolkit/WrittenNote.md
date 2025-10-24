2 library h jo install krni padti h 
ek core redux tookit ki hoti h 

npm install @reduxjs/toolkit

doosti react ke saath redux ke liye hoti h

npm install react-redux

steps after installation 

1. src->app->store.js
sabhi Reducer ko import kr lete h 
configureStore ko import krte h
store bnate h


2.Features->Todo->TodoSlice.js

createSlice method se create hote h reducers (method aur function)
isme name hota h 
initial state hoti h 
reducers hote h aur inke function m do value milti h state aur action 

sabhi functionality ko export krna padta h taaki component m jo bhi chahiye ho wo lele usko

store ko saare reducer ki detail chaiye hoti h isiliy use bhi export krte h

3. Using methods in Components

dispatch - Redux store m action bhejte h isse Redux store me actions fire karega.

useSelector - Redux store se data (todos) nikalta hai.



