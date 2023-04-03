// async with callbacks
function firstTask() {
    console.log("Task 1");
}
function secondTask() {
    console.log("Task 2");
}
firstTask(); // Task 1s
secondTask(); // Task 2

// async with promises
function createReadMe() {
    return new Promise((resolve, reject) => {
        resolve("Created README.md file");
    });
}
function createPullRequest() {
    console.log("pull Request created on github..");
}
function startPc() {
    return new Promise((resolve, reject) => {
        resolve("pc started successfully!!");
    });
}
function openVsCode() {
    return new Promise((resolve, reject) => {
        if(isPcWorking()) {
            setTimeout(() => {
                resolve("vscode editor is opened..");
            }, 3000);
        } else {
            reject("can not open vscode editor because pc is not working properly..")
        }
    });
}
function isPcWorking() {
    return true;
}

startPc()
.then((data) => {
    console.log(data);
})
.then(() => {
    let data = openVsCode();
    createPullRequest();
    return data;
})
.then((data) => {
    console.log(data);
    createReadMe()
    .then((data) => {
        console.log(data);
    })
})
.catch((err) => {
    console.log(err);
})

// async with async & await
async function getData() {
    const data = await fetch(`https://api.github.com/users`);
    console.log(data);
}