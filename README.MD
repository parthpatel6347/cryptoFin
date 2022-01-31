# CryptoFin

An application to browse, buy and sell cryptocurrency (hypothecially).

A short video highlighting the functionality of the app - https://youtu.be/N5e47qC8ROw

The backend for this app is created with Django. Django-rest-framework and Djoser libraries are used to facilitate CRUD operations and User token authentication. The database used is SQL(Sqlite3).

The frontend is created with Reactjs. The components are styled using the Styled Components library and the charts are created using chartjs.

The [Coingecko API](https://www.coingecko.com/en/api/documentation) is used to get information for coins.

---

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

## Overview:

### Dashboard

This page shows a list of the top ten cryptocurrencies along with price and other information. Clicking on any of the list items will send the user to a page for that coin.

### Coins page

This page contains more concise information about the coin. The user is shown a 24h price chart, which they can switch to a 7D or a 30D chart.  
If the user is signed in, the bottom of the page shows information about this coin the user's wallet.  
Also, signed in users are also shown a Trade button which opens the transaction window.

### Portfolio page

This page is restricted to authenticated users only. On this page the user is shown information about their investments, a doughnut chart for portfolio allocation and a list of coins in the user's wallet along with profit and loss information for each.
