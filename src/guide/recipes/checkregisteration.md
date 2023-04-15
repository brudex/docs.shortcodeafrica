---
title: Check if user is registered on first dial
# icon: creative
prev: ./walkthroughfirstapp
next: false
---

Sometime we may want to redirect users to different menus for registered users and a different menu for non-registered users. We can do this when the user first dials the shortcode and use the phoneNumber to check against our database to see if the user is registered or not. Based on the outcome we can redirect the user to the appropriate menu using the `this.goto('menuNa,e')` function in our javascript action. Before javascript action is called its possible to have called a restapi as the first action. The results of the rest api can be retried in the javascript action for further decision making.



```javascript
    this.logger.info("The action result checkRegistrationStatus>>>", this.actionResults.registerStatusApiResult);
    if (this.actionResults.registerStatusApiResult.isRegisered) {
        this.goto("mainMenu");
    } else {
        this.goto("signupMenu");
    }
    return 1;
```