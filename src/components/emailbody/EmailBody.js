import React, { useEffect, useState } from "react";
import "./emailbody.css";
import EmailsBody from "../emailsbody/EmailsBody";
const url = `https://flipkart-email-mock.vercel.app/?page=`;
const EmailBody = () => {
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d.list);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 6;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data.slice(firstIndex, lastIndex);
    const npage = Math.ceil(data.length / recordsPerPage);
    const numbers = [...Array(npage+1).keys()].slice(1);
  
    const prevPage = () => {
      if(currentPage !== 1){
        setCurrentPage(currentPage-1);
      }
    }
    const changeCPage = (id) => {
      setCurrentPage(id);
    }
    const nextPage = () => {
      if(currentPage !== npage){
        setCurrentPage(currentPage+1);
      }
    }

  return (
    <div className="main-container">
      <div className="main-container-left email-list">
        {records.map((dataObj) => {
          return (
            <EmailsBody
              email={dataObj.from.email}
              name={dataObj.from.name}
              subject={dataObj.subject}
              short_description={dataObj.short_description}
              key={dataObj.id}
            />
          );
        })}
        <div className="pagination-read">
          <ul class="page-numbers">
            <li><span onClick={prevPage}>Prev</span></li>
            {
                numbers.map((n, i) =>(
                    <li>{n}</li>
                ))
            }
            <li onClick={nextPage}><span onClick={nextPage}>Next</span></li>
          </ul>
       </div>
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

export default EmailBody;
