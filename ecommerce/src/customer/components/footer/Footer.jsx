import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className=" bg-gray-800 text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className=" pb-5 cursor-pointer" varient="h6">
            Company
          </Typography>

          <div>
            <Button className=" pb-5" varient="h6">
              About
            </Button>
          </div>
          <div>
            <Button className=" pb-5" varient="h6" gutterB>
              Contact us
            </Button>
          </div>
          <div>
            <Button className=" pb-5" varient="h6" gutterB>
              Blogs
            </Button>
          </div>
          <div>
            <Button className=" pb-5" varient="h6" gutterB>
              Jobs
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className=" pb-5 cursor-pointer" varient="h6">
            Solutions
          </Typography>

          <div>
            <Button className=" pb-5" varient="h6">
              Marketing
            </Button>
          </div>
          <div>
            <Button className=" pb-5" varient="h6" gutterB>
              Analytics
            </Button>
          </div>
          <div>
            <Button className=" pb-5" varient="h6" gutterB>
              Commerce
            </Button>
          </div>
          <div>
            <Button className=" pb-5" varient="h6" gutterB>
              Support
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className=" pb-5 cursor-pointer" varient="h6">
            Documentation's
          </Typography>

          <div>
            <Button className=" pb-5" varient="h6">
              Guids
            </Button>
          </div>
          <div>
            <Button className=" pb-5" varient="h6" gutterB>
              API Status
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className=" pb-5 cursor-pointer" varient="h6">
            Legal
          </Typography>

          <div>
            <Button className=" pb-5" varient="h6">
              Clame
            </Button>
          </div>
          <div>
            <Button className=" pb-5" varient="h6" gutterB>
              Privacy
            </Button>
          </div>
          <div>
            <Button className=" pb-5" varient="h6" gutterB>
              Terms
            </Button>
          </div>
              </Grid>
              <Grid className=" pt-20" item xs={12}>
                  <Typography varient="body2" component="p" align="center">
                      &copy; 2024 My Company. All right services.
                  </Typography>
                  <Typography varient="body2" component="p" align="center">
                      Made with love by Akash Paul❤️❤️
                      
                  </Typography>
                  
              </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
