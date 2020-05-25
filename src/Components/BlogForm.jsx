import React , {useState ,useEffect}from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import BlogInForm from './blogInForm';


const BlogForm = (props) => {

  
  const [blogTitle,setTitle]=useState("");
  const [blogBody,setBody]=useState("");
  const [blogphoto,setPhoto]=useState("");
  const [blogContent,setBlogContent]=useState('');
  const [blogTags,setTags]=useState([]);
  const [isEdited,setIsEdited]=useState(false);
  const [tagsArr,setTagsArr]=useState({tagsArr:[]});
  // var tagsArr=[];
  
const handleTitleChange = e =>
{
  debugger
  // setIsEdited(false);
  setTitle(e.target.value);
}
const handleBodyChange = e =>
{
  // setIsEdited(false);
  setBody(e.target.value);
}
const handlePhotoChange = e =>
{
  // setIsEdited(false);
  setPhoto(e.target.value);
}
const handleTagsChange = e =>
{
  debugger;
  setBlogContent(e.target.value);
}
const handleSubmitBlog=e =>
{
 
  e.preventDefault();
  debugger;
  
  const blog = {
    title : blogTitle,
    body : blogBody,
    tags:blogTags
  }
  if(isEdited!==true)
  {

    
    axios.post('http://localhost:4000/blog/add',
    {title:blog.title,body:blog.body,tags:blog.tags},
    {headers : {
      'Authorization': localStorage.getItem("token")
    }})
    .then((result) => {
      debugger;
      const data = result;
      window.location.href='/myBlogs';
      
      
    }).catch(err=>{
      console.log(err);
    });
  }
  else
  {
    debugger;
    axios.patch('http://localhost:4000/blog/'+props.location.state.detail._id,
    {title:blog.title,body:blog.body,tags:blog.tags},
    {headers : {
      'Authorization': localStorage.getItem("token")
    }})
    .then((result) => {
      debugger;
      const data = result;
      window.location.href='/myBlogs';
      
      
    }).catch(err=>{
      console.log(err);
    });
  }
    
    
    
    
  }
  
  const handleKeyPress=e =>{
debugger;
  setIsEdited(false);
  // console.log(e.nativeEvent);
  // e.preventDefault();
  if(e.charCode==13){
    
    const tag=e.currentTarget.attributes[6].nodeValue;
    document.querySelector('.TagsContainer').insertAdjacentHTML("beforeend",`<div class="bagge badge-pill badge-info span-tag flex-container-row"><span style="margin:3px" class="bagge badge-pill badge-info span-tag">${tag}</span></div> `);
    let TagsArr=[...blogTags];
    tagsArr.tagsArr.push(tag);
    setTags(tagsArr.tagsArr);
    // document.querySelector('#tag').value=' ';
    setBlogContent(' ');
    e.preventDefault();
    return;
  }
}
useEffect(()=>
{
  if(props.location.state?.detail)
  {
   
  // console.log(editedBlog.id);
  let editedBlog=props.location.state.detail;
  setTitle(editedBlog.title);
  setBody(editedBlog.body);
  setPhoto(editedBlog.photo);
  setTags(editedBlog.tags);
  setIsEdited(true);
  }
  
  
},[]);
const handleEditTags = ()=>
{
  setIsEdited(false);
}
    return ( 
        <React.Fragment>
         
          <div className="container-box" style={{padding:40+'px'}}>
          <Link to="/home" className="close"></Link>
    <div>

  <div className="card-header text-center font-blogForm">
    {isEdited===true?'Edit':'Add'}New Blog
  </div>
  <div className="card-body">
   
  <form onSubmit={handleSubmitBlog}>
  <div className="form-group font-blogForm" >
    <label htmlFor="blogtitle">Blog Title</label>
    <input type="text" className="form-control"
     id="blogtitle" placeholder="Enter Title here ..."
     name="blogTitle"
     value={blogTitle}
     onChange={handleTitleChange}/>
    
  </div>

  <div className="form-group font-blogForm">
    <label htmlFor="body">Blog Body</label>
    <textarea className="form-control" id="body " rows="3" 
    placeholder="Enter Body here ..."
    name="blogBody"
    value={blogBody}
    onChange={handleBodyChange}
    ></textarea>

  </div>
  <div className="form-group font-blogForm flex-container">
    <label htmlFor="photo">Blog Photo</label>
    <input type="file" className="form-control-file" id="photo"
     name="blogPhoto"
     value={blogphoto}
     onChange={handlePhotoChange}
     />
    
  </div>
  {/* lma ydos 3la enter 3yza el span tban bl text elly ktbo gwa el text box */}
  <div className="form-group font-blogForm">
  <label  htmlFor="tag">Tags</label>
  <input type="text" className="form-control" id="tag"
   aria-describedby="emailHelp" placeholder="Enter Tags here ..."
   name="blogTags"
   value={ isEdited===true ? ' ':blogContent}
   onChange={handleTagsChange}
   onKeyPress={handleKeyPress}
   />
   <div className="TagsContainer" style={{marginTop:10+'px',flexWrap:'wrap'}}>
{isEdited===true ?
     blogTags.map(tag=>
     <BlogInForm 
    key={tag}
    {...props}
    tag={tag}
    />)  :null} 

</div>

</div>
  <div className="btn-blogForm-container" style={{marginLeft:60+'px',marginTop:20+'px'}}>
  <button type="submit" className="btn btn-info font-blogForm btn-margin-BlogForm" onClick={handleSubmitBlog}> {isEdited===true?'Edit':'Add'}</button>
  </div>
</form>
</div>
    </div>
    </div>

        </React.Fragment>
     );
}
 
export default BlogForm;