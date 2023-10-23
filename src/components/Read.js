import React, { useEffect, useState } from "react";
import "./emailbody/emailbody.css";
import EmailsBody from "./emailsbody/EmailsBody";
import { useParams } from "react-router-dom";


const Read = () => {
  // const [read, setRead] = useState([]);
  const paramId = useParams();

  console.log("Param: ",paramId);

  // useEffect(() => {
  //   const read = JSON.parse(localStorage.getItem('data'));
  //   console.log("Param 1: ",read[paramId.id-1].id);
  //   if (read[paramId.id-1].id == paramId.id) {
  //     setRead(read[paramId.id-1]);
  //   }
  // }, []);

  const url = "https://flipkart-email-mock.vercel.app/";
  const [data, setData] = useState([]);
  
  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d.list);
        console.log(d.list[[paramId.id-1]]);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  
  
  console.log(data[paramId.id-1]);
  // const reads = Object.entries(data)
  // console.log("read", reads[0]);

  return (
    <div className="main-container">
      <div className="main-container-left email-list">
      
        {(data).map((dataObj) => {
          return (
            <div>
              {
                paramId.id === dataObj.id && <EmailsBody
                email={dataObj.from.email}
                name={dataObj.from.name}
                subject={dataObj.subject}
                short_description={dataObj.short_description}
                key={dataObj.id}
              />
              }
            </div>
              
            
          );
        })}

      </div>
      <div className="emailbody-container-right">
        <div className="emailbody-container-right-top">
          <div className="F">
            <h1>F</h1>
          </div>
          <h3 className="L">Lorem Ipsum</h3>
          <div className="M">
          <h3>Mark as favorite</h3>
          </div>
        </div>
        <div className="emailbody-container-right-bottom">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            deleniti officia velit sapiente optio nemo quis illum recusandae
            nulla voluptas amet voluptatem quo sit, suscipit cupiditate.
            Repudiandae at quis sapiente, voluptates, unde corporis nemo
            laudantium tempora non excepturi qui quas maiores iusto fugiat
            nesciunt eum hic possimus nisi libero aliquam quod incidunt. Amet
            nesciunt rerum repellat ex sapiente accusamus cumque dolore debitis
            voluptas, dicta non assumenda placeat ad quasi aspernatur aut eos
            fugiat quae iste, minus, incidunt atque suscipit? Quam, expedita
            commodi libero quas, harum dolorem illum dolorum recusandae quisquam
            nemo sapiente consequatur totam repellendus, magnam quia debitis in
            perspiciatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            deleniti officia velit sapiente optio nemo quis illum recusandae
            nulla voluptas amet voluptatem quo sit, suscipit cupiditate.
            Repudiandae at quis sapiente, voluptates, unde corporis nemo
            laudantium tempora non excepturi qui quas maiores iusto fugiat
            nesciunt eum hic possimus nisi libero aliquam quod incidunt. Amet
            nesciunt rerum repellat ex sapiente accusamus cumque dolore debitis
            voluptas, dicta non assumenda placeat ad quasi aspernatur aut eos
            fugiat quae iste, minus, incidunt atque suscipit? Quam, expedita
            commodi libero quas, harum dolorem illum dolorum recusandae quisquam
            nemo sapiente consequatur totam repellendus, magnam quia debitis in
            perspiciatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            deleniti officia velit sapiente optio nemo quis illum recusandae
            nulla voluptas amet voluptatem quo sit, suscipit cupiditate.
            Repudiandae at quis sapiente, voluptates, unde corporis nemo
            laudantium tempora non excepturi qui quas maiores iusto fugiat
            nesciunt eum hic possimus nisi libero aliquam quod incidunt. Amet
            nesciunt rerum repellat ex sapiente accusamus cumque dolore debitis
            voluptas, dicta non assumenda placeat ad quasi aspernatur aut eos
            fugiat quae iste, minus, incidunt atque suscipit? Quam, expedita
            commodi libero quas, harum dolorem illum dolorum recusandae quisquam
            nemo sapiente consequatur totam repellendus, magnam quia debitis in
            perspiciatis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Read;
