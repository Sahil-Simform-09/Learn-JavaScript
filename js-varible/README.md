# js-variables
##### What is variable?
* Variables are containers for storing data (storing data values).
* 4 ways to declare a JavaScript variable:
    1) using var
    2) using let
    3) using const
    4) using nothing

**1) using var**:
* var keyword is used to created variable.
* **scope**: var is global  and fucntional scope. It is not block scope. If we delcare var inside {} it can access outside the {} but if we declare inside ```function func() {}``` It can not outside the fucntion.
    * block scope means, Everthing inside {} brackets has global scope.
* **declaration**: var can redeclared.
* **upadte**: var can be update.

**2) using let**:
* let keyword is used to created variable.
* **scope**: let is global and block scope.
* **declaration**: let can not be redeclared.
* **upadte**: ley can be update.

**3) using let**:
* const keyword is used to created variable.
* **scope**: const is global and block scope.
* **declaration**: const can not be redeclared. We have to initialize at the time of delcaration other wise it will thorw an error.
* **upadte**: const can not be update.

##### datatypes
* JavaScript has 8 Datatypes
    1) String
    2) Number
    3) Bigint (used seldom)
    4) Boolean
    5) Undefined
    6) Null
    7) Symbol (used seldom)
    8) Object

    The Object Datatype
    The object data type can contain:

    1) An object
    2) An array
    3) A date
* [difference between null and undefined in javascript](https://www.scaler.com/topics/javascript/null-and-undefined-in-javascript/)