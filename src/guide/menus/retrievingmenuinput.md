---
title: Retrieve Inputs in MenuText
prev: ./menunavigation
# next: ./walkthroughfirstapp
---


<<<<<<< HEAD
###  Retrieving input 
You can retrieve the results of previous inputs and other session values in a menu text using curly brackets around the name of the session variables. By design the egine mustache syntax to translate place holders to their actual values.
=======
![Step 1 screenshot](/assets/images/retri/ret.jpg)
>>>>>>> 149f0fe6e9c1a1590faea867c6b00b2f822fbaf0

![Retrieve Inputs](/assets/images/retrieveinput/retrieveinput.sessionvars.png)

<<<<<<< HEAD
The following  session values are constants present in every session. They cannot be set or modified
=======
![Step 2 screenshot](/assets/images/retri/ret1.jpg)
>>>>>>> 149f0fe6e9c1a1590faea867c6b00b2f822fbaf0

1. `session.mobile`  : The mobile number the user used to dial this session
2. `session.network` : The network operator of the phone number used
3. `session.sessionId` : The sessionId of the current session

<<<<<<< HEAD
You can click on the info icon on top of the menu text box to popup the available session values :![info icon](/assets/images/retrieveinput/info.icon.png)
=======
![Step 3 screenshot](/assets/images/retri/ret2.jpg)
>>>>>>> 149f0fe6e9c1a1590faea867c6b00b2f822fbaf0


<<<<<<< HEAD
### Walkthrough

In the following walkthroughs we are going see an example of how to get user input in a menu text. We will add 3 menus. The first two will collect the user input and the last will retrieve the entered data including some additional session variables i.e mobile and network
### 1. First Menu
#### The first menu will ask for the age of the user
![Step 3 screenshot](https://images.tango.us/workflows/97267438-0812-4c4a-9717-435fdf470ba5/steps/ccf6e924-0994-45f4-8f83-15fdda96f1d8/a47aa3ad-7dc1-4076-8efa-6c0bbd7ad71c.png?crop=focalpoint&fit=crop&fp-x=0.6250&fp-y=0.3296&fp-z=1.4184&w=1200&mark-x=38&mark-y=235&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0xMTIzJmg9MjMyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)

### 2. Second Menu
#### The second menu will ask for the gender with the following options
1. Male
2. Female
3. Transgender
![Step 7 screenshot](https://images.tango.us/workflows/97267438-0812-4c4a-9717-435fdf470ba5/steps/87321e45-a491-4cf4-a892-ec401dc5c358/1a84e063-fc68-4da9-b254-ab07a9723da9.png?crop=focalpoint&fit=crop&fp-x=0.6250&fp-y=0.3296&fp-z=1.4184&w=1200&mark-x=38&mark-y=235&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0xMTIzJmg9MjMyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)

 
### 3. Retrieve User Input
#### The third menu will display inputs entered by the user including the phone number  and mobile network 

- We retrieve the age entered by the user with `session.inputs.ageMenu`.  `ageMenu` is the menu identifier we gave to the age menu screen.
- We retrieve the value entered for gender with `session.inputs.gender`. This will give us value entered by the user, to retrieve the label we append `Label` to become `genderLabel` . Hence `session.inputs.genderLabel` we give us the label mapped to the input of the user. 
  #### NB:  For all menus to get the label for any input append `Label` to the menu identier
- We retrieve the phone number of the dialer with  `session.mobile` and the network operator with `session.network`
 
 We will enter the following text for the menu


![Step 3 screenshot](https://images.tango.us/workflows/97267438-0812-4c4a-9717-435fdf470ba5/steps/a295fe7a-3b1e-4844-9d0c-bcb192784449/43f55bad-82df-43c5-8fd1-edcc01f9641c.png?crop=focalpoint&fit=crop&fp-x=0.6250&fp-y=0.3296&fp-z=1.4184&w=1200&mark-x=38&mark-y=235&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0xMTIzJmg9MjMyJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)

 
### 4. Deploy the app for testing
![Step 4 screenshot](https://images.tango.us/workflows/97267438-0812-4c4a-9717-435fdf470ba5/steps/f7594fd7-c3ee-4831-aaff-e6fa6cf9fa62/bf5603d4-e728-4e6a-afff-f09ea9413cd1.png?crop=focalpoint&fit=crop&fp-x=0.9299&fp-y=0.1450&fp-z=2.7835&w=1200&mark-x=811&mark-y=241&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0zMDkmaD0xMjQmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 5. Run the emulator
![Step 5 screenshot](https://images.tango.us/workflows/97267438-0812-4c4a-9717-435fdf470ba5/steps/1ff90400-8b6d-4441-9e86-ca66bcaf7ef4/77068b70-3299-47ce-adf5-1ae3ab389cbe.png?crop=focalpoint&fit=crop&fp-x=0.0784&fp-y=0.3402&fp-z=2.2022&w=1200&mark-x=3&mark-y=335&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz00MDcmaD04MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 6. Click to dial
![Step 6 screenshot](https://images.tango.us/workflows/97267438-0812-4c4a-9717-435fdf470ba5/steps/8870a357-c85b-409b-ae5c-52394117b32a/cf810edf-fa55-4647-9dd0-27c0041c77f9.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.8143&fp-z=2.8988&w=1200&mark-x=522&mark-y=297&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz0xNTYmaD0xNTYmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 7. Enter a value for age
![Step 7 screenshot](https://images.tango.us/workflows/97267438-0812-4c4a-9717-435fdf470ba5/steps/55ed5534-10b6-4e60-b3ec-8d4d242a03c4/8a36826e-804d-40eb-859c-cae1d234406a.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.2106&fp-z=1.6659&w=1200&mark-x=300&mark-y=235&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz02MDAmaD01NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 8. Select an option for gender
![Step 8 screenshot](https://images.tango.us/workflows/97267438-0812-4c4a-9717-435fdf470ba5/steps/87afd8e5-fc4e-49cf-af1a-97ea5f4db241/9cf80608-c56f-4eac-8283-cdd214be2fed.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.2788&fp-z=1.6659&w=1200&mark-x=300&mark-y=320&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz02MDAmaD01NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

 

### 9. Output of replaced values 
#### In the following output the place holders have been replaced with the actual values of the input entered by the user.

![Step 9 screenshot](https://images.tango.us/workflows/97267438-0812-4c4a-9717-435fdf470ba5/steps/ae6dcb8f-7961-4728-9a77-84f948cecb23/329f0325-1712-4982-a24d-557fc6283e57.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.3016&fp-z=1.6659&w=1200&mark-x=300&mark-y=347&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTglMkNGRjc0NDImdz02MDAmaD01NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)

 
=======
![Step 4 screenshot](/assets/images/retri/ret3.jpg)
>>>>>>> 149f0fe6e9c1a1590faea867c6b00b2f822fbaf0
