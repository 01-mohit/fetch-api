import React from 'react';
import "./style.css";
import { useState, useEffect } from 'react';

const Dropdown = (routeData) => {
  // const [cityId, setCityId] = useState();
  // const [cityName, setCityName] = useState({});
  // const citiesData = routeData;
  console.log("c", routeData);



  return (
    <>
      <h2><center>Select the city</center></h2>
      <div style={{ width: "30%", margin: "auto" }} className="contaner">
        <select className="form-select" aria-label="Default select example">
          <option defaultValue={"Open this select menu"}>Open this select menu</option>
          {/* {

            routeData?.map((cityName, i) => {
              return (
                <>
                  <option value="{i}" key={i}>{cityName.city_name}</option>
                </>

              )

            }
            )} */}

          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <br />
      <br />
    </>
  )
}

const Pagination = (postsPerPage, totalPosts, setCurrentPage) => {
  // console.log("fun", setCurrentPage())
  // console.log(Math.ceil(totalPosts / postsPerPage));
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const pageNumbers = [];
  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(i);
  }
  // console.log(pageNumbers)
  return (
    <>
      <div style={{ float: "right", fontSize: "1.5rem" }}>
        {/* <h2>Pagination</h2> */}
        <nav>
          <ul className="pagination">
            {pageNumbers.map(number => (
              <li className="page-item" key={number}>
                <a onClick={() => paginate(number)} href="!#" className='page-link'>
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export const City = () => {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [routeData, setRouteData] = useState({});
  const getData = async () => {
    try {
      const response = await fetch(`https://test.railyatri.in/api/v1/sb_routes_details?user_id=-1651231922&city_id=undefined&city_name=undefined`);
      const data = await response.json();
      if (data.success) {
        setData(data);
        setRouteData(data.sb_cities);
        setLoading(false);
      }

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setLoading(true);
    getData();

    // fetch("https://test.railyatri.in/api/v1/sb_routes_details?user_id=-1651231922&city_id=undefined&city_name=undefined")
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data.success) {
    //       setData(data);
    //       setRouteData(data.sb_cities);
    //       setLoading(false);
    //     }
    //   });

  }, []);
  // console.log("r", routeData);
  // console.log(data.sb_routes);
  if (loading) {
    return (
      <>
        <div className="loader"></div>
      </>
    )
  }
  // else {
  // getCurretPost
  // change page

  // console.log("c", currentPage);
  console.log(data.sb_routes);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPost = data?.sb_routes.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(currentPost);
  const totalPosts = 100;
  return (
    <>
      <h1 style={{ margin: "3rem", textShadow: "1px 1px" }}><center> <i> <u>Fetch API with Pagination</u> </i></center></h1>
      <Dropdown routeData={routeData} />
      <div className="row">
        {

          data?.success && data.sb_routes.slice(indexOfFirstPost, indexOfLastPost).map((currentPosts, i) => (
            <>
              <div className="col-md-4">
                <div className="card-container" key={i}>
                  <h3>IntrCity Smart Bus</h3>
                  {/* {console.log(`${currentPosts.source_city_id}-${currentPosts.destination_city_id}`)} */}
                  <span className="pro">PRO</span>
                  <img className="round" src="https://images.railyatri.in/ry_images_prod/SmartBus-1603953797.png" alt="user" />
                  <div className="row">
                    <div className="col-md-6">
                      <span>From: </span>
                      <h6>{currentPosts.source_city_name}</h6>
                      <p>City ID: {currentPosts.source_city_id}</p>
                    </div>
                    <div className="col-md-6">
                      <span>To: </span>
                      <h6>{currentPosts.destination_city_name}</h6>
                      <p>City ID: {currentPosts.destination_city_id}</p>
                    </div>
                  </div>
                  <div className="buttons">
                    <div className="row">
                      <div className="col-md-6">
                        <button className="primary">
                          Book Now
                        </button>
                      </div>
                      <div className="col-md-6">
                        <button className="primary ghost">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
          )
        }
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} setCurrentPage={setCurrentPage} />
    </>
  )
}
// }
