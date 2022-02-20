//### Create promise
function getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve([
            { username: 'john', email: 'john@test.com' },
            { username: 'jane', email: 'jane@test.com' },
          ]);
        } else {
          reject('Failed to the user list');
        }
      }, 1000);
    });
}

const promise = getUsers();

//### The then() method
promise.then(
  (users) => console.log,
  (error) => console.log
);

//### The catch() method
promise.catch((error) => {
    console.log(error);
});

//### The finally() method
getUsers()
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    render();
  });

//### Promise chain
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p.then((result) => {
    console.log(result);
    return result * 2;
}).then((result) => {
    console.log(result);
    return result * 3;
});

//### Promise.all()
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The first promise has resolved');
      resolve(10);
    }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The second promise has resolved');
      resolve(20);
    }, 2 * 1000);
  });
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The third promise has resolved');
      resolve(30);
    }, 3 * 1000);
});
  
Promise.all([p1, p2, p3])
    .then(value => console.log(`Resolved: ${value}`))
    .catch(reason => console.log(`Rejected: ${reason}`));

//### Promise.race()
Promise.race([p1, p2, p3])
    .then(value => console.log(`Resolved: ${value}`))
    .catch(reason => console.log(`Rejected: ${reason}`));

//### Handle error
try {
    getUserById('a')
        .then(user => console.log(user.username))
        .catch(err => console.log(`Caught by .catch ${error}`));
} catch (error) {
    console.log(`Caught by try/catch ${error}`);
}