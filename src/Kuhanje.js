import './App.css';
import {Autocomplete, Chip, Grid, List, ListItem, ListItemText, TextField} from '@mui/material';
import React from "react";

function Input() {
    
    let sastojci = ["Jaja","Mlijeko","Meso","Tjestenina","Napoli sos"];
    
    const [odabraniSastojcii,setOdabraniSastojcii] = React.useState([]);
    
    
    React.useEffect(() => {
        console.log(odabraniSastojcii);
    },[odabraniSastojcii]);
    return (
        <Grid container spacing={3}>
            <Grid container sm={12} alignItems={"center"} justifyContent="center">
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={sastojci}
                    sx={{ width: 300, }}
                    onChange={(e,v) => {
                        console.log(e);
                        console.log(v);
                        let liste = [...odabraniSastojcii];
                        liste.push(v);
                        console.log("liste",liste);

                        setOdabraniSastojcii(liste);
                        let index = sastojci.indexOf(v);
                        sastojci.splice(index,1);

                    }}
                    freeSolo
                    renderTags={(value,getTagProps) =>{
                        value.map((option,index) => {
                            <Chip  label ={option} {...getTagProps({index})}/>
                                
                        })
                    }}
                    
                    renderInput={(params) => <TextField {...params} label="Sastojci" />}
                />
            </Grid>
            <Grid container alignItems={"center"} justifyContent="center" item sm={6}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {odabraniSastojcii.map((value) => (
                        <ListItem
                            key={value}
                            color="black"
                        >
                            {value}
                        </ListItem>
                    ))}
                </List>
            </Grid>
            <Grid container alignItems={"center"} justifyContent="center" item sm={6}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {odabraniSastojcii.map((value) => (
                        <ListItem
                            key={value}
                            color="black"
                        >
                            {value}
                        </ListItem>
                    ))}
                </List>
            </Grid>
        </Grid>
        

);
}

export default Input;
