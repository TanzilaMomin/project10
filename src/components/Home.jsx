import React, {useState , useEffect} from "react";
import {Grid ,Card, CardContent} from "@mui/material";
import Select from "react-select";
import { statusData, studentsData } from "../Data";
import { Notification } from "./Notification";
import { ResultList } from "./ResultList";

export const Home=()=>{
    const [data, setData]=useState([]);
    const [passData, setPassdata]=useState([]);
    const [failData, setFailData]=useState([]);
    const [status, setStatus]=useState("");
    const [name, setName]=useState(studentsData[0]);

    const handleNamechange=(selOpt)=>{
        setName(selOpt)
    }
    const handleStatuschange=(selOpt)=>{
        setStatus(selOpt.label)
    }

    useEffect(()=>{
        if(status!=="")
        if(status==="Pass"){
            setPassdata([...passData,name])
        }else{
            setFailData([...failData, name])
        }
        const filtered=data.filter((item)=>item.value!==name.value);
        setData(filtered);
    }, [name])

    useEffect(()=>{
        setData(studentsData);
    },[])

    return(
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Select onChange={handleNamechange} className="dropdown" options={data} />
            </Grid>
            <Grid item xs={6}>
                <Select onChange={handleStatuschange} options={statusData} />
            </Grid>
            <Grid item xs={6}>
                <Notification mytime={3000} msg={status==="Pass"?`Hey ${name.label},
                Congratulations!!! for your great achievement .`:` Hi ${name.label} , Please connect with your college .`} />
            </Grid>
            <Grid item xs={6}>
                <Notification mytime={5000} msg={status==="Pass" ?`Dear Parent , Your ward ${name.label} has completed the Certification with PickupBiz Learning . We would like to congratulate you and your family .` : ` `} />
            </Grid>
            <Grid item xs={6} >
                <ResultList  studentData={passData} />
            </Grid>
            <Grid item xs={6}>
                <ResultList studentData={failData} />
            </Grid>

        </Grid>
    );
}