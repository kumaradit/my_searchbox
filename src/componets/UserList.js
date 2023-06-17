import React, { useState, useEffect } from "react";
import User from "./User";
import Search from "./Search";


const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [searchQuery,setSearchQuery] = useState("")

  useEffect(() => {
    getProfile();
  }, [searchQuery]);
  const getProfile = async () => {
    const data = await fetch(
      "https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in"
    );

    const result = await data.json();
    if(searchQuery.length>0){
        const filterData = userList.filter(
            (itm) =>
            //   itm.name.first.toLowerCase().includes(searchQuery.toLowerCase()) ||
            //   itm.name.last.toLowerCase().includes(searchQuery.toLowerCase()) ||
              (itm.name.first.toLowerCase()+" "+itm.name.last.toLowerCase()).includes(searchQuery.toLowerCase()||" ")
          );
          setUserList(filterData);
    }
    else{
        setUserList(result.results);
    }
  };

  return (
    <div>
    <div>
      <input type="text" onChange={(e)=>setSearchQuery(e.target.value)}></input>
    </div>
      {/* <Search targetKey={getSearchKey} /> */}
      { userList.length > 0 ?
        userList.map((itm, i) => {
        return( <User key={i} item={itm} />)
       
        
        }):<p>Not found</p>}
    </div>
  );
};

export default UserList;
