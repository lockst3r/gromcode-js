const ff = "userid777";

const requestUserData = (userId) => {
  const request = new Promise((rulfilled, reject) => {
    if (userId === "broken") {
      setTimeout(() => {
        reject(new Error("User not found"));
      }, 500);
    }
    setTimeout(() => {
      rulfilled({
        name: "John",
        age: 17,
        userId: `${userId}`,
        email: `${userId}@example.com`,
      });
    }, 1000);
  });

  return request;
};

requestUserData(ff).then((data) => console.log(data));
