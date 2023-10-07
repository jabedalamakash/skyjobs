'use client'
import React, { useEffect, useState } from 'react';
import { ApplyContext } from './ApplyContext';
import {toast } from 'react-hot-toast';


const ApplyProvider = ({children}) => {


    useEffect(()=>{
        const data=localStorage.getItem('apply');
        if(data){
           setApplied(JSON.parse(data))
        }
    
     },[]);

    //  const saveState=()=>{
    //     const data=localStorage.getItem('apply');
    //     if(data){
    //         setApplied(JSON.parse(data))
    //      }
    //      else{
    //         [" "];
    //      }
    //  }
    //  useEffect(()=>{
    //     saveState();
    //  },[])

    const[applied,setApplied]=useState([]);




     
     


    const handleApply=(data)=>{
        if(!applied.includes(data)){
            setApplied([...applied,data]);
            toast.success('You have successfully Applied');
          

        }
        else{
            // alert("You have already applied");
            toast.error("You have already applied !");
        }
    }

    // console.log(applied);
    // localStorage getItem



     // localStorage setItem
     useEffect(()=>{
        localStorage.setItem('apply', JSON.stringify(applied));
     },[applied])

    return (
        <div>
            <ApplyContext.Provider value={{applied,handleApply}}>
            {children}
            </ApplyContext.Provider>
            
        </div>
    );
};

export default ApplyProvider;