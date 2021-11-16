import { useEffect, useState } from "react";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Covid() {
  const [dt, setDet] = useState([]);
  const [list, setList] = useState([]);

  const apiHandle = axios.create({
    baseURL: "https://api.covidtracking.com/v1/states/current.json",
  });
  
  const getData = () => {
    const api = `https://api.covidtracking.com/v1/states/current.json`;
    axios.get(api).then((res) => {
      console.log(res.data);
      setDet(res.data);
      setList(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const filterItems= (x)=>{
    let a = x.target.value;
    if(a==="choose"){
      setDet(list);
    }else{
      const updatedItems = list.filter((curElem) => {
        return curElem.state === a;
      });
      setDet(updatedItems);
    }


  }


  return (
    <>
      <div className="main">
        <div className="row">
          <div className="col-md-6">
            <h1>Covid Cases</h1>
          </div>
          <div className="col-md-2">
          <label for="state-name" style={{fontSize:'20px'}}>Choose a State:</label>
            <select onChange={(x) => filterItems(x)} style={{margin:'10px',borderRadius:'15px'}} name="states-name" id="state-name">
              <option value="choose">Choose State</option>
              {list.map((elem) => {
                const { state } = elem;
                return <option value={state}>{state}</option>;
              })}
            </select>
          </div>

          <div className="col-md-4" style={{ height: "1px" }}>
            <img src="Images/gfx-b.png" className="doc" alt="" />
          </div>
        </div>
        {dt.map((elem, i) => {
          const {
            date,
            state,
            positive,
            recovered,
            lastUpdateEt,
            death,
            totalTestsViral,
          } = elem;
          return (
            <div className="container-fluid">
              
              <br />
              <br />
              <div className="row">
                <div className="col-md-6">
                  <h2>State : {state}</h2>
                  <h2>Date : {date} </h2>
                </div>
              </div>
              <div className="row row1">
                <div className="col-md-2" style={{ padding: "5px" }}>
                  <div className="card" style={{ background: "#d5f4f6" }}>
                    <div className="row">
                      <div className="col-md-8">
                        <h5>CONFIRMED CASES</h5>
                      </div>
                      <div className="col-md-4">
                        <img
                          className="icon-image"
                          src="Images/Card-imgs/logo1.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <h3>{positive}</h3>
                      </div>
                      <div className="col-md-12">
                        <button
                          type="button"
                          style={{ background: "#7fe5d8" }}
                          class="btn btn-info rounded-pill"
                        >
                          Last Update : {lastUpdateEt}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2" style={{ padding: "5px" }}>
                  <div className="card1">
                    <div className="row">
                      <div className="col-md-8">
                        <h5>DEATHS</h5>
                      </div>
                      <div className="col-md-4">
                        <img
                          className="icon-image"
                          src="Images/Card-imgs/logo2.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <h3>{death}</h3>
                      </div>
                      <div className="col-md-12">
                        <button
                          type="button"
                          style={{ background: "#f9d3d2" }}
                          class="btn btn-info rounded-pill"
                        >
                          Last Update : {lastUpdateEt}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2" style={{ padding: "5px" }}>
                  <div className="card2">
                    <div className="row">
                      <div className="col-md-8">
                        <h5>RECOVERED</h5>
                      </div>
                      <div className="col-md-4">
                        <img
                          className="icon-image"
                          src="Images/Card-imgs/logo3.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        {recovered == null ? <h3>0</h3> : <h3>{recovered}</h3>}
                      </div>
                      <div className="col-md-12">
                        <button
                          type="button"
                          style={{ background: "#bee7be" }}
                          class="btn btn-info rounded-pill"
                        >
                          Last Update : {lastUpdateEt}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2" style={{ padding: "5px" }}>
                  <div className="card3">
                    <div className="row">
                      <div className="col-md-8">
                        <h5>TOTAL TEST</h5>
                      </div>
                      <div className="col-md-4">
                        <img
                          className="icon-image"
                          src="Images/Card-imgs/logo4.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <h3>{totalTestsViral}</h3>
                      </div>
                      <div className="col-md-12">
                        <button
                          type="button"
                          style={{ background: "#a9dcf1" }}
                          class="btn btn-info rounded-pill"
                        >
                          Last Update : {lastUpdateEt}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Covid;
