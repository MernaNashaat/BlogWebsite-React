import React from 'react';
const Pagination = (props) => {
  let elements = [] 

  for(let i = 1 ; i <=Math.round(props.BlogsCount/props.pageSize);i++)
  {
     elements.push(i);
  }
    return (
        <React.Fragment>
            <nav aria-label="Page navigation example">
  <ul className="pagination" style={{justifyContent:"center"}} >

  {
     (props.activePage===1)?
     <li className="page-item "><a className="page-link disabled" onClick={()=>props.handlePageClick(+props.activePage-1)}  >Previous</a></li>
  :  <li className="page-item "><a className="page-link " onClick={()=>props.handlePageClick(+props.activePage-1)}  >Previous</a></li>
  }
    
    
    {
    elements.map(num=>(num===1)?<li className={num + " page-item active" }  style={{cursor:"pointer"}} onClick={()=>props.handlePageClick(num)}><a className="page-link" >{num}</a></li>:<li className={num + " page-item " }  style={{cursor:"pointer"}} onClick={()=>props.handlePageClick(num)}><a className="page-link" >{num}</a></li>  )
    }

    
   
   {
     (props.activePage===props.BlogsCount/props.pageSize)?
    <li className="page-item"><a className="page-link disabled" onClick={()=>props.handlePageClick(+props.activePage+1)} >Next</a></li>
  :  <li className="page-item"><a className="page-link" onClick={()=>props.handlePageClick(+props.activePage+1)} >Next</a></li>
  
  }
  </ul>
</nav>
        </React.Fragment>
      );
}
 
export default Pagination;