import React from "react";
import { Card, CardContent, Grid } from "@mui/material";

export const ResultList=({studentData})=>{
    return(
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        Student ID
                    </Grid>
                    <Grid item xs={8}>
                        Student Name
                    </Grid>
                    {
                        studentData.map((item)=>
                        <React.Fragment >
                            <Grid  item xs={3}>
                                {item.value}
                            </Grid>
                            <Grid item xs={9}>
                                {item.label}
                            </Grid>
                        </React.Fragment>
                        )
                    }
                </Grid>
            </CardContent>
        </Card>
    );
}