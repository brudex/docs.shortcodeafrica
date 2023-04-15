---
title: Set a session variable and retrieve it javascript
# icon: creative
prev: ./walkthroughfirstapp
next: false
---



You can set session value in javascript code and retrieve them at any point during the users session. The first example saves a value in the current session. The second example retrieves the value from the session. 


### Save value in session

```javascript  
   if (this.session.inputs.gender == "2") {
        this.session.setSessionValue('genderDescription',"User is Female");
    } else {
        this.session.setSessionValue('genderDescription',"User is Male");
    }
```

### Retrieve saved session value

```javascript  
    let genderDescription  = this.session.inputs.genderDescription;//retrieve saved input
    this.menu.addText(genderDescription);
     
```