import { Grid } from "@mui/material";

export default function FeaturedCollections() {
    return (
        <div>
            Coleções em Destaque

            <Grid container>
                <Grid item xs={4}> A </Grid>
                
                <Grid item xs={4}> B </Grid>
                
                <Grid item xs={4}> C </Grid>
            </Grid>
        </div>
    )
}