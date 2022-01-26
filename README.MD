# CryptoFin

## Running the application

**STEP 1**  
Install and set up a virtual environment.

    python3 -m pip install --user virtualenv
    python -m venv env
    source env/Scripts/activate

**STEP 2**  
Install dependencies, migrate and run server.

> _cd into the project folder_

    pip install -r requirements.txt
    python manage.py migrate
    python manage.py makemigrations core
    python manage.py migrate
    python manage.py runserver

**STEP 3**  
Install frontend dependencies and run frontend.

> _Start a new terminal window and cd into the project folder_

    cd frontend
    npm install
    npm start

---

## Distinctiveness and Complexity

This project shows latest prices and other details of top cryptocurrencies, allows users to hypothetically buy and sell cryptocurrencies and displays a portfolio of holdings for each user.

This project uses Django to create an API for the backend, and ReactJS to render the frontend.

In the backend, this project uses Django-rest-framework librabry to create an API to manage User Data and Transaction records.

Using Djoser, token based authentication is implemented, wherein, on successful completion of user authenticatiion request, the response contains a token which is stored in the localstorage to be accessed at any point.

Upon registering on the website, each user starts with fake $10,000 to start testing the buy, sell and portfolio features.

On the frontend side, The styled components library is used to style the elements.  
 React-router-dom library is used to manage routing and update the URL.  
 Context API is used to manage and access user data across the website.

Using axios, current coin data is requested from the coingecko api.
This coin data is displayed as a list of coins, their current price, change, marketcap etc on the dashboard.
Clicking on any of these, the user is taken to a page where there are more details of that particular coin, including a line chart which can be toggled to show charts for the past 24 hours, 7 days or 30 days. If the user holds this coin, then details about that will be shown below the chart.

If the user is logged in, they will be displayed a to button to trade the coin.
If the user wishes to buy a coin and enters a USD amount, there is a live preview of the amount of coins that will be purchased. Validation exists so that the USD amount is no more than the cash held by the user.  
Similar preview and validations exist on sell side also. The user will not be able to sell more coins then they hold, and will be shown a live preview of the USD amount based on the amount of coin they wish to sell.  
Upon completion of the transaction, the transaction details are sent to the backend API where they are saved in the database.

The portfolio page is only accesible if the user is logged in. This page displays users initial investment, current value of that investment and the change in USD and %.
This page also shows a doughnut chart for user's asset allocation, followed by a list of all the coins held by the user with profit and loss details for each.

---

## Files

**/core/models.py**
This file contains the User model which is the default Abstract user model with a cash field, and a Transaction model to store all transactions made on the website.

**/core/serializers.py**  
This file contains serializers for the models, created using the django-rest-framework and djoser libraries

**/core/urls.py**  
The auth/ routes are directed to the djoser libraries functions for creating and accessing users.
The wallet/ and transact/ routes are directed to custom functions in the view.py file

**/core/views.py**  
Cointains a function to create new transaction, and a custom function to get coins in user wallet based on data from the transaction database.

**frontend/src/components/Navbar.js**  
The navbar react component which is displayed on all pages and dynamically updates links based on the the page url.

**frontend/src/context/auth/**  
Contains Context API files, where the state and functions are defined in the AuthState.js file, and the authReducer.js file updates the state based on the action.

**frontend/src/styles/**  
Containes files for styled components for all react components, a theme file that defines commonly used colors and a sizes file that defines various sizes used in media queries.

**frontend/src/views/auth**  
Contains react components for login and register pages, and for the logout modal.

**frontend/src/views/**  
Contains react components for the dashboard, coin and portfolio pages, a react component for the transaction modal, a react component for loading spinner, a react component 'NotFound.js' for the page if url does not match any of the defined urls, a 'PrivateRoute.js' component that protects the portfolio page from unauthenticated users and a 'CoinError.js' component for when the no coin is found matching the url param.

**frontend/src/App.js**  
Provides routing for all pages.
