---
title: Branching to a different menu from code
# icon: creative
prev: ./walkthroughfirstapp
next: false
---

Javascript code executing also allows branching to other menus. In the code below  of every action is appended to `this.actionResults` object. The action results can then be retrieved with  
`this.actionResults.actionName`. 

```javascript  
let userAccountsResults = this.actionResults['userAccountsRestApiCall']; //results from api call action
if(typeof userAccountsResults == 'string'){ //if results are returned as string 
    userAccountsResults = JSON.parse(userAccountsResults); //convert to javascript array
} 
if(userAccountsResults.length > 0){
    this.goto('showAccountMenu');
}else{
    this.goto('noAccountsFoundMenu');
}
```