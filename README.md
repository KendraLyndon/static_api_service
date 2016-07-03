![](https://github.com/gSchool/static_api_service/blob/master/service.png)


### Instructions:

You will be building two apps, a front end and a back end.

#### FRONT END:
The FRONT END a static app that has two pages:
USERS and ACTIVE USERS respectively. When you visit the USERS
page, it uses javascript or jquery to make an API call to your back end to GET
either USERS or ACTIVE USERS , respectively.  All it needs to do is display the
data in a list or divs or something of the sort.  No CSS needed.  Doesn't need to look
pretty.

#### BACK END:

1. Create an Express app. You may use the generator or you may hand roll the app.
2. Create the following two routes in Express:

```
GET  /users
GET /active_users

```
Please note that the syntax shown above is not the exact syntax that you will see
in Express. Refer to your previous work if you need a reference.


3. The /users route should serve the static JSON listed below using res.json
4. The /active_users route should serve a new JSON with the users filtered out who are not active.

5.  Your "back end" app is essentially a static api.  It's not connected to a database,
so for now, you just need to respond with json when a GET request is made to either
/users or /active_users .   The logic that the active_users route uses to filter out the
inactive users should be done in a separate, custom build node module.

6. Here is the static object that you will draw upon to get the list of users
and active users respectively. This file should be required in from a separate, custom
node module:
```
[{
	"user_data": {
		"id": 0,
		"first_name": "Marina",
		"last_name": "Karima",
		"active": 1,
		"y_code": "xA0D"
	}
}, {
	"user_data": {
		"id": 1,
		"first_name": "Hank",
		"last_name": "Clementine",
		"active": 1,
		"y_code": "Y37P"
	}
}, {
	"user_data": {
		"id": 2,
		"first_name": "Shea",
		"last_name": "Petrina",
		"active": 0,
		"y_code": "BHo9"
	}
}, {
	"user_data": {
		"id": 3,
		"first_name": "Cedric",
		"last_name": "Yang",
		"active": 0,
		"y_code": "AZgY"
	}
}, {
	"user_data": {
		"id": 4,
		"first_name": "Alise",
		"last_name": "Claud",
		"active": 0,
		"y_code": "rkFt"
	}
}, {
	"user_data": {
		"id": 5,
		"first_name": "Marshall",
		"last_name": "Delena",
		"active": 0,
		"y_code": "wuj0"
	}
}, {
	"user_data": {
		"id": 6,
		"first_name": "Jefferson",
		"last_name": "Jerlene",
		"active": 0,
		"y_code": "mjtO"
	}
}, {
	"user_data": {
		"id": 7,
		"first_name": "Jerrod",
		"last_name": "Robbi",
		"active": 0,
		"y_code": "DzFr"
	}
}, {
	"user_data": {
		"id": 8,
		"first_name": "Winston",
		"last_name": "Ingrid",
		"active": 0,
		"y_code": "7TW5"
	}
}, {
	"user_data": {
		"id": 9,
		"first_name": "Miyoko",
		"last_name": "Sharlene",
		"active": 0,
		"y_code": "QHlF"
	}
}, {
	"user_data": {
		"id": 10,
		"first_name": "Ammie",
		"last_name": "Alvera",
		"active": 1,
		"y_code": "673D"
	}
}, {
	"user_data": {
		"id": 11,
		"first_name": "Willia",
		"last_name": "Illa",
		"active": 1,
		"y_code": "A654"
	}
}, {
	"user_data": {
		"id": 12,
		"first_name": "Joeann",
		"last_name": "Jene",
		"active": 0,
		"y_code": "gHHI"
	}
}, {
	"user_data": {
		"id": 13,
		"first_name": "Madonna",
		"last_name": "Randee",
		"active": 0,
		"y_code": "FhRb"
	}
}, {
	"user_data": {
		"id": 14,
		"first_name": "Tamie",
		"last_name": "Edmund",
		"active": 0,
		"y_code": "paBv"
	}
}, {
	"user_data": {
		"id": 15,
		"first_name": "Krystle",
		"last_name": "Aida",
		"active": 0,
		"y_code": "oTFY"
	}
}, {
	"user_data": {
		"id": 16,
		"first_name": "Thad",
		"last_name": "Cole",
		"active": 0,
		"y_code": "ykfc"
	}
}, {
	"user_data": {
		"id": 17,
		"first_name": "Kaylene",
		"last_name": "Hayden",
		"active": 0,
		"y_code": "S3xE"
	}
}, {
	"user_data": {
		"id": 18,
		"first_name": "Nilsa",
		"last_name": "Ned",
		"active": 1,
		"y_code": "vtJ9"
	}
}, {
	"user_data": {
		"id": 19,
		"first_name": "Thea",
		"last_name": "Jaquelyn",
		"active": 0,
		"y_code": "ml4i"
	}
}]

```

That's it !

#### STRETCH:
To your front end app, In the list of all users, make each user clickable.
When you click on that user, it should take you to that one user's profile page.
The profile page should show all of their information.
On the back end, the /users/:id route should take one argument (id),
and parse the static JSON object in order to display ONLY the object pertaining to the user in question. For example:
```
/users/5
```
should return

```
{
	"user_data": {
		"id": 5,
		"first_name": "Marshall",
		"last_name": "Delena",
		"active": 0,
		"y_code": "wuj0"
	}
}

```
With that data, in the front end, show the profile page for that user.
* IF YOU DO THE STRETCH, THIS MEANS THAT YOU HAVE THREE ROUTES ON THE BACK END, AND THREE PAGES ON THE FRONT END * :
Users, Active Users, and User Profile.
