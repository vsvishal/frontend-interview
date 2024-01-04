const urlLink: string = "https://fakestoreapi.com/products";

interface User {
  title: string;
  price: number;
  description: string;
}

const getApiData = async (): Promise<User[]> => {
  try {
    const data = await fetch(urlLink);
    const json = await data.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

console.log(getApiData());
