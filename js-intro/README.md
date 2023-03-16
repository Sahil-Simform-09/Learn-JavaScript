# What is JavaScript
* JavaScript is a scripting or programming language that allows you to implement complex features on web pages.

##### Is js compiled or Interpreted?
[Refer from here](https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/)

##### Where to write JavaScript
* To add JavaScript HTML ```<script></script>``` tag is used.
* Scripts can be placed in the <body>, or in the <head> section of an HTML page.
* JS code can we written inside script or external JavaScript file can used.
    
    index.html
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Document</title>
        <!-- Inside head  -->
        <script>
            alert("Hello wolrd");
        </script>
    </head>
    <body>

        <!-- Inside body -->
        <script>
            alert("Hello world");
        </script>
        <!-- External JavaScript -->
        <script src="./main.js"></script>
    </body>
    </html>
    ```
    main.js
    ```
    alert("Hello world");
    ```
