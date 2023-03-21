# JavaScript Factory Function.
* In JavaScript, a factory function is used to create objects.
* It helps to reduce code duplication.
* creation of factory function.
```
function personFactory(name) {
    this.getName = function() {
        return `Hello i'm ${name}`
    }
    return { getName }
}

```