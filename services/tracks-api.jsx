import axios from "axios";

export const getDataService = async (parameter) => {
  const res = await axios.get(`http://localhost:5000/${parameter}`);
  const data = await res.data;
  return data;
};

export const postDataService = async (parameter,values)=>{
  const res = await axios.post(`http://localhost:5000/${parameter}`,values);
  
}