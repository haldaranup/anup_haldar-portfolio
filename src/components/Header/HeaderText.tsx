import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Buttons from "./Buttons";
import { useDarkMode } from "../../context/themeContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(6),
      },
    },
    title: {
      paddingRight: "4%",
    },
    hi: {
      color: "red",
    },
    name: {
      color: "#fff500"
    },
    paragraph: {
      paddingRight: "20%",
    },
  })
);

function HeaderText() {
  const classes = useStyles();
  const darkMode = useDarkMode();
  const paletteType = darkMode ? "dark" : "light";
  return (
    <Box
      component="main"
      role="main"
      itemScope
      itemType="https://schema.org/Person"
      className={classes.root}
    >
      <meta itemProp="familyName" content="Haldar" />
      <meta itemProp="gender" content="https://schema.org/Male" />
      <meta itemProp="name" content="Anup Haldar" />
      <Typography
        className={classes.title}
        variant="h2"
        component="h1"
        gutterBottom
      >
        <span className={classes.hi}>Hi, </span>I'm{" "}
        <div itemProp="givenName" className={paletteType == "dark" ? classes.name : classes.hi }>Anup Haldar</div>
      </Typography>
      <Typography
        variant="h4"
        itemProp="disambiguatingDescription"
        component="h2"
        gutterBottom
      >
        A Full-stack Developer
      </Typography>
      <Typography itemProp="knowsAbout" className={classes.paragraph}>
      A passionate web developer who writes interesting bugs.{" "}
      Specilizes in Front-end Development, Open-source enthusiast
      </Typography>
      <Buttons />
    </Box>
  );
}

export default HeaderText;
