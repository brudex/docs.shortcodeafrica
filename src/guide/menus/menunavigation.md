---
title: Menu Navigation
prev: ./menunaming
next: ./retrievingmenuinput
---

By design all menus created flow in linear fashion during runtime. Jumping or navigating to different menu screens is done on the **Navigation** tab. Menu avigation allows you to jump to different menu screens based on user input or condition.


### 1. Click on the Navigation tab

![Step 1 screenshot](/assets/images/menunav/na.jpg)

### 2. Click on the blue button with the "+" sign to add navigation conditions.

![Step 2 screenshot](/assets/images/menunav/na1.jpg)


### 3. Drop down the Operator input to select the test condition i.e. equals, greater than, etc. 
![Step 3 screenshot](/assets/images/menunav/na2.jpg)
There are different operators. Examples :

| Operator      | Description                                 |
| :--------     | :-------------------------------------------|
| `Equals`      | Compare Value Equals to user input                         |  
| `not equals`  | Compare Value Not Equal to user input                     |  
| `greater than`  | Compare Value Numerically greater than user input           |  
| `less than`     | Compare Value Numeric less than user input               |  
| `value in`      | Comma separated list of Compare values must include user input              |  
| `value Not in`  | Comma separated list of Compare values must not include user input        |  
| `starts With`   | User input must start with        |  
| `contains`   | User input text contains Compare value       |  
| `Regular Expression`   | User input is regex match of Compare value       | 
| `Not Regular Expression`   | User input is not regex match of Compare value       | 

### 4. In the compare value textbox enter the value you want to test the user input against.
![Step 5 screenshot](/assets/images/menunav/na3.jpg)

### 5. There are two types of actions that can be performed when a condition is met as follows:
    
    1. Goto a Specific Menu
    2. Terminate the user session

### 6. If goto action is selected dropdown the Menu options to select which Menu to goto when the condition is met.
![Step 6 screenshot](/assets/images/menunav/na4.jpg)
NB: There is no need to select a menu if terminate action is selected as that will end the session.

### 7. You can add as many conditional logics as possible for different navigation scenarios.
![Step 20 screenshot](/assets/images/menunav/na5.jpg)
