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

### Distinctiveness and Complexity

This project shows latest prices and other details of top cryptocurrencies, allows users to hypothetically buy and sell cryptocurrencies and displays a portfolio of holdings for each user.

This project uses Django to create an API for the backend, and ReactJS to render the frontend.

In the backend, this project uses Django-rest-framework librabry to create an API to manage User Data and Transaction records.

Using Djoser, token based authentication is implemented, wherein, on successful completion of user authenticatiion request, the response contains a token which is stored in the localstorage to be accessed at any point.

On the frontend side, The styled components library is used to style the elements.  
 React-router-dom library is used to manage routing and update the URL.  
 Context API is used to manage and access user data across the website.

Using axios, current coin data is requested from the coingecko api.
This coin data is displayed as a list of coins, their current price, change, marketcap etc on the dashboard.
Clicking on any of these, the user is taken to a page where there are more details of that particular coin, including a line chart which can be toggled to show charts for the past 24 hours, 7 days or 30 days. If the user holds this coin, then details about that will be shown below the chart.

The portfolio page is only accesible if the user is logged in. This page displays users initial investment, current value of that investment and the change in USD and %.
This page also shows a doughnut chart for user's asset allocation, followed by a list of all the coins held by the user with profit and loss details for each.
