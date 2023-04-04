import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Typography,
  } from "@mui/material";
  import AccountCircleIcon from "@mui/icons-material/AccountCircle";
  import FavoriteIcon from "@mui/icons-material/Favorite"
  import CommentIcon from '@mui/icons-material/Comment';
  import VisibilityIcon from '@mui/icons-material/Visibility';
  import { useDispatch, useSelector } from "react-redux";
  import { useParams } from "react-router-dom";
  import axios from "axios";
  import { useEffect } from "react";
  import { fetchStart, getSuccessDetail } from "../features/blogSlice";

 
  const Detail = () => {
    const dispatch=useDispatch()
    const { id } = useParams();
    const {detailData}=useSelector((state)=>state.blog)


   const {title,content,image,category,likes,publish_date,comment_count,author,post_views}=detailData;
  
    const getIdData = async () => {
      dispatch(fetchStart);
      const BASE_URL = "http://32241.fullstack.clarusway.com/users/auth/login/";
      try {
        const { data } = await axios(`${BASE_URL}${id}/`,{
          headers: { Authorization: `Token 073bac23674e781eab51fc4f7c81f953a4bbd047` },
        });
        console.log(data)
        dispatch(getSuccessDetail(data));
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getIdData()
    }, [])
    

    return (
      <Box sx={{ minHeight: "90vh" }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          
          <Grid item>
            <Card sx={{ maxWidth: 600 }}>
              <CardMedia
                sx={{
                  objectFit: "contain",
                  maxWidth: 500,
                }}
                image={image}
                component="img"
              />
  
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2,mb:3 }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <AccountCircleIcon fontSize="large" color="primary" />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "0.9rem" }}> {author} </Typography>
                    <Typography sx={{ fontSize: "0.9rem", color: "#555" }}>
                      {publish_date}
                    </Typography>
                  </Box>
                </Box>
  
                <Typography variant="h6">{title}</Typography>
                <Typography sx={{ color: "#777" }}>
                  {content}
                </Typography>
              </CardContent>
  
                <CardActions>
                <IconButton>
                    <FavoriteIcon />
                    <span>{likes}</span>
                </IconButton>
  
                <IconButton>
                    <CommentIcon />
                    <span> {comment_count} </span>
                </IconButton>
  
                <IconButton >
                    <VisibilityIcon />
                    <span> {post_views} </span>
                </IconButton>
  
                </CardActions>
  
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default Detail;