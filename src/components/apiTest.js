import { useEffect, useState } from "react";
import axios from "axios";

function Apitest() {
  const [dt, setDet] = useState([]);

  const apiHandle = axios.create({
    baseURL: "https://api.covidtracking.com/v1/states/current.json",
  });

  const getData = () => {
    const api = `https://api.covidtracking.com/v1/states/current.json`;
    axios.get(api).then((res) => {
      console.log(res.data);
      setDet(res.data);
    });

    // apiHandle.get("/").then((e) => {
    //   console.log(e.data);
    //   setDet(e.data);
    // });
    // apiHandle.get("/10").then((e) => {
    //   console.log(e.data);
    // });
    // apiHandle.post("/", { name: "something" }).then((e) => {
    //   console.log(e);
    // });
    // apiHandle.delete("/50");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Apitest</h1>

      {dt.map((elem, i) => {
        const { positive} = elem;
        return <p key={i}>Posotive : {positive}</p>;
      })}
    </>
  );
}
export default Apitest;
