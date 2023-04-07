---
title: Menu navigation 
# icon: creative
prev: ./menus
next: ./actions
---
<!-- ## quick way to add menu -->

By design all menus created flow in linear fashion during runtime. Jumping or navigating to different menu screens is done on the **Navigation** tab. Menu avigation allows you to jump to different menu screens based on user input or condition.


### 1. Click on the Navigation tab

![Step 1 screenshot](https://images.tango.us/workflows/99c99709-ad68-40cf-9d41-793a137ac5c4/steps/1831afbf-664d-4b99-a905-2d7bcca34208/ed99a21b-f49f-4e83-a935-ab27a7b05ac8.png?crop=focalpoint&fit=crop&fp-x=0.4277&fp-y=0.1613&fp-z=2.4132&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)

### 2. Click on the blue button with the "+" sign to add navigation conditions.

![Step 2 screenshot](https://images.tango.us/workflows/99c99709-ad68-40cf-9d41-793a137ac5c4/steps/36f28d2b-6aa0-4659-899f-8478a34a09c1/17236836-5046-46a8-8438-85df4fdb8bc9.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&blend-align=bottom&blend-mode=normal&blend-x=800&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n)


### 3. Drop down the Operator input to select the test condition i.e. equals, greater than, etc. 
![Step 3 screenshot](https://images.tango.us/workflows/984c5286-c555-4cfc-a791-48a6ed3e40af/steps/1109034e-4ec3-4205-ab82-181078f8d3f7/deab7d14-454a-436b-94e5-2aea3f19901b.png?crop=focalpoint&fit=crop&fp-x=0.4563&fp-y=0.3106&fp-z=2.5133&w=1200)
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
![Step 5 screenshot](https://images.tango.us/workflows/037f8446-cf7f-466d-b234-b0b6eeefafa7/steps/17658bbe-bb27-4317-af8a-a084526c309c/2cb7b060-70e4-49e2-8e65-adc32cbb5c2d.png?crop=focalpoint&fit=crop&fp-x=0.5688&fp-y=0.3138&fp-z=2.5133&w=1200)

### 5. There are two types of actions that can be performed when a condition is met as follows:
    
    1. Goto a Specific Menu
    2. Terminate the user session

### 6. If goto action is selected dropdown the Menu options to select which Menu to goto when the condition is met.
![Step 6 screenshot](https://images.tango.us/workflows/037f8446-cf7f-466d-b234-b0b6eeefafa7/steps/1d677fd8-5c48-426b-8704-4e370dcc0ce3/9b38c252-d86b-40f7-86c9-c69839672876.png?crop=focalpoint&fit=crop&fp-x=0.8142&fp-y=0.3103&fp-z=2.9905&w=1200)
NB: There is no need to select a menu if terminate action is selected as that will end the session.

### 7. You can add as many conditional logics as possible for different navigation scenarios.
![Step 20 screenshot](https://images.tango.us/workflows/037f8446-cf7f-466d-b234-b0b6eeefafa7/steps/0ee88473-03bc-4f46-9884-813422326eab/39b0d31f-6226-489e-a89c-9ff5b3b97eed.png?crop=focalpoint&fit=crop&fp-x=0.6250&fp-y=0.4981&fp-z=1.1962&w=1200)
