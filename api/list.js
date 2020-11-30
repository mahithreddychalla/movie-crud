import axios from 'axios';
export const fetchData = async (rama) => {
  console.log(rama,'Recieve The Data From SagaGenarator Function')
    try {
      const data = axios.get("https://jsonplaceholder.typicode.com/todos/",rama)//WE Can Recieve Data From SagaGenarator Function (list.js\api)
      .then(res => {
        return res.data;
      })
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  