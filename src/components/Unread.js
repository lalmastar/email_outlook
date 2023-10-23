import { Link, useNavigate } from "react-router-dom";
import EmailBody from "./emailbody/EmailBody";
import EmailList from "./emails/EmailList";
import React, { useState, useEffect } from "react";

const Unread = () => {
  
    

    const [data, setData] = useState([]);

    useEffect(() => {
        
        const data = JSON.parse(localStorage.getItem('data'));
        if (data) {
         setData(data);
        //  console.log(data);
        }
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
    <div className="unread" >
      
      {records.map((dataObj) => {
        return (
          <div className="email-list">
            <Link to={`/read/${dataObj.id}`} style={{textDecoration: 'none'}}>
            <EmailList
                email={dataObj.from.email}
                name={dataObj.from.name}
                subject={dataObj.subject}
                short_description={dataObj.short_description}
                key={dataObj.id}
                id={dataObj.id}
            />
            </Link>
          </div>
        );
      })}
      
       <div className="pagination">
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
  );
};

export default Unread;
