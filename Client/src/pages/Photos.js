import React from "react";
import useGetData from "../crud/Read"
import Photo_design from "../designs/Photo_design";
    
const Photos = ()=>{
    const { data, loading, error } = useGetData('localhost:7654/api/photos/');
    if (loading) {
        return <p>Loading...</p>;
    }
        
    if (error) {
        return <p>Error: {error.message}</p>;
    }    
          
    const vewData = data.map((element)=> {<Photo_design{...element}/>});
        
    return(
        <div>
            {vewData};
        </div>
    )};
    
export default Photos;