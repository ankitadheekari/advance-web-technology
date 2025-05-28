# HTTP Methods:
Http methods are the methods that which are used to request and what to expect from the server if the request is sucessfull.
## Somem HTTP Requests:
1. GET: Get method is used to retrive the data
2. POST: Post method is used to submit an entry
3. DELETE: Delete method is used to delete the specific content 
4. PATCH: Applies partial modification


# HTTP Status Code:
Http status code is used to indicate the request to the server is successfull or not.
# Some HTTP Status code:
1. 1xx - 199: They are informational response.
2. 2xx - 299: They are sucessfull response.
3. 3xx - 399: They are redirection response.
4. 4xx - 499: They are client-side error response.
5. 5xx - 599: They are server-side error response.


# 4 CSS Selector:
## 1. \* (Universal Selector)
--> Selects all the element in the document
```css
*{
    background-color: red;
    height: auto;
    width: auto;
}
```

## 2. Type Selector(Element Selector)
--> It select all the element of specific tag.
```css
p{
    margin: 10px:
    height: auto;
    width: auto; 
}
```

## 3. Id Selector(#)
--> Select a single element with the specific id.
```css
#para{
    margin: 10px:
    height: auto;
    width: auto; 
}
```

## 4. Class Selector(.)
--> Select a single element with the specific classname.
```css
.para{
    margin: 10px:
    height: auto;
    width: auto; 
}
```

**Lets Assume our html docs as**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p>Applied by element selector</p>
    <h1 id="para">Applied by Id selctor</h1>
    <h1 class="para">Applied by class selector</h1>
    <!-- By universal selector we can apply css to all above element -->
</body>
</html>
```

# Git Bacis:
1. Init: These command is used to initialize a new git repository. (git init)
2. add: add command is used to move changing from working directory to stagging area
(git add . --> Adds all the file or folder inside the git folder)
(git add (specific file name) --> Adds a specific file to stagging area)
3. commit: takes the stagged snapshot and commit it to the project history
(git commit -m "message")
4. push: this command help us to push commited code to github
(git push origin (branch_name))
5. clone: this help us to make copy of other git repository
(git clone (link of the repository to be cloned))
6. branch: 


# Callback and Higher Order function: 
## Callback:
--> A callback function is a function which is passed as an argument to the another function.
```js
function callback(fn) {
    fn();
}


callback(function() {
    console.log("Hello, World!");
});

callback(() => {
    console.log("Hello, World!");
});
```

## Higher Order function:
--> A function that takes two or more function as a argument and return function as it result.
```js
function higherOrderFunction(fn,a,b) {
    return fn(a,b);
}

function add(a, b) {
    console.log('Sum: ' + Number(a + b));
}

function subtract(a, b) {
    console.log('Difference: ' + Number(a - b));
}   

higherOrderFunction(add,10,7);
```


# Examples:
## 1. HTTP Methods
```js
const app = require('express')();

//example of a get method
app.get('/', (req, res) => {
    res.send('First API');
});


//example of a post method
app.post('/', (req, res) => {
    const { name } = req.body.name;
    res.send(`Hello ${name}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

```