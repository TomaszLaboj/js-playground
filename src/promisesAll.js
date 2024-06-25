const task1 = new Promise((resolve, reject) => {
        resolve("Task 1 finished")
    });

const task2 = new Promise((resolve, reject) => {
        resolve("Task 2 finished")
    });
const task3 = new Promise((resolve, reject) => {
    resolve("Task 3 finished")
});

Promise.all([
    task1,
    task2,
    task3,
]).then((messages) => console.log(messages))

Promise.race([
    task1,
    task2,
    task3,
]).then((messages) => console.log(messages))