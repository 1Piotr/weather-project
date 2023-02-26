# Getting Started with Create React App 
Overall all functionality ?I am planning to achieve

1. User can get a current weather and a forcast for current localization

2. User can get a current weather and a forcast for a chosen localization
For the weather API to work it has to receive the coorect geoloaction
express in longitude and latitude. As user is very unlikely to be able to search 
by these paramaters I need to find a way  to convert place name into geolocation data.
Luckily weather API provides API call for doing so.
The API allowing to search directly by geographical names is no longer supportted. Similarly Reverse
Geo API should be used when we want to retrieve name of the place.
http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

Here is another problem there are number of places with the same name. E.g Lagos- Nigeria,
Lagos -Portugal
I am going to tackle this problem by allowing user to choose the right name from the list.
so I'm going to use <Select>
Once user hit Search I want <Select> to be automatically open, I manage to solve it by feeding the lenght of the 
array into "size" attiubute. So behaviur of <select> depends on state.

Creating new componenent ToggleUnits it will allow to switch between metric and imperial system. Had to lift the
state to parent component as it will be used by other child components

Creating current location component decided not to use useEffect because I dont want to searching for local weather on first reneder.Once I lift local state to parent with handleCurrentStateChange function cooridantes state will update and Current weather component and Forcast will render. Similar approach to lift localName state and update geoName

I want alse geographical names to be displayed. For current location i need to use reverse geoAPI
http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}
There is a problem as I dont want to fetch data on first render I need to condition it on state isMounted

Decided to use image provided by the API asa background image insted of using it to create a seperate component.

Overall I could alse add local time but it is not needed to overall app functionality.

Used flexbox and media queries to make the app mobile responsive.