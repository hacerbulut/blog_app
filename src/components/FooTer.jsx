import { Box, Typography } from "@mui/material"


const FooTer = () => {
  return (
    <Box sx={{backgroundColor:"primary.main", position:"fixed", bottom:0, width:"100%", color:"white"}}>
       <Typography align="center" p={3} component="div" >
        <Typography>Developer HCR</Typography>
        <Typography>Copyright ©️  HCR 2023</Typography>
      
    </Typography>
    </Box>
   
  )
}

export default FooTer
