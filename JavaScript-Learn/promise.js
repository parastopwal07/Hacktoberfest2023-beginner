// Create a Promise that simulates an asynchronous operation
const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Hello, world!";
        // Simulate success
        resolve(data);
        // Simulate an error
        // reject(new Error("An error occurred"));
      }, 2000);
    });
  };
  
  // Usage of the Promise
  fetchData()
    .then((result) => {
      console.log("Success:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      console.log("Operation complete.");
    });
  