export const InitialDataFeed = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
