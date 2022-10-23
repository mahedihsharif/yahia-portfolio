import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import Typed from "react-typed";
import Navbar from "./Navbar";

const useStyles = makeStyles(() => ({
  title: {
    color: "#FAFAFA",
    letterSpacing: "3px",
    fontSize: "60px",
    fontFamily: "Poppins",
    fontWeight: "bolder",
  },
  subtitle: {
    color: "#FAFAFA",
    marginBottom: "3rem",
    textAlign: "center",
    fontSize: "48px",
    fontFamily: "Poppins",
    fontWeight: "bolder",
  },
  icon: {
    color: "#FAFAFA",
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className="h-[100vh]">
      <div className="bg-[url('/images/bg.jpg')] bg-cover bg-center min-w-fit  h-full">
        <div className="bg-darkBlue h-full">
          <Navbar />
          <Box className="flex flex-col justify-center items-center h-full">
            <Grid container justify="center" className="header-navbar"></Grid>
            <div className="header-navbar-text">
              <Typography
                className={`${classes.title} md:text-3xl  px-5 sm:text-base`}
                variant="h4"
              >
                <Typed strings={["Sadekuzzaman Yahia"]} typeSpeed={40} />
              </Typography>
              <br />
              <Typography variant="h5" className={classes.subtitle}>
                <Typed
                  strings={[
                    "Enterprenuer",
                    "Businessman",
                    "Learner",
                    "Trainner",
                  ]}
                  typeSpeed={40}
                  backSpeed={60}
                  loop
                />
              </Typography>
            </div>
            <div className="flex gap-5">
              <a href="https://www.facebook.com/s.yahia71">
                <FacebookIcon className={classes.icon} />
              </a>
              <a href="https://twitter.com/s_yahia97?fbclid=IwAR0qVU7cVUbpNscXJg96QaHxM_wpn4I2VbxjrIWJXghQg9B9AwYct5u72mg">
                <TwitterIcon className={classes.icon} />
              </a>
              <a href="#">
                <GoogleIcon className={classes.icon} />
              </a>
              <a href="https://www.linkedin.com/in/yahia183/">
                <LinkedInIcon className={classes.icon} />
              </a>
              <a href="https://www.instagram.com/accounts/login/?next=%2Fsadekuzzaman_yahia%2F">
                <InstagramIcon className={classes.icon} />
              </a>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Header;
