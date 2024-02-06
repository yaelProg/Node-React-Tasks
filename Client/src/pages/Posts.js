import React from "react";
import useGetData from "../crud/Read"
import Post_design from "../designs/Post_design";

const Posts = ()=>{
    const { data, loading, error } = useGetData('localhost:7654/api/posts/');
    if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error.message}</p>;
      }    
      
      const vewData = data.map((element)=> {<Post_design{...element}/>});
    return(
        <div>
             {vewData};
        </div>
    )
};

export default Posts;
