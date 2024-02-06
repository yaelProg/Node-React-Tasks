import React from "react";
import useGetData from "../crud/Read"
import User_design from "../designs/User_design";
        
const Users = ()=>{
    const { data, loading, error } = useGetData('localhost:7654/api/users/');
        if (loading) {
            return <p>Loading...</p>;
        }
            
        if (error) {
            return <p>Error: {error.message}</p>;
        }    
              
        const vewData = data.map((element)=> {<User_design{...element}/>});
            
        return(
            <div>
                {vewData};
            </div>
        )};
        
export default Users;