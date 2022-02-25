import { makeStyles } from "@mui/styles";
export const MyStyles = makeStyles(() => ({
  card: {
    maxWidth: "100%",
    boxShadow: "1px 1px 6px 1px rgba(0,0,0,.2) !important",
    marginTop: "25px",
  },
  container: {
    width: "100%",
    height: "100%",
  },
  loader: {
    position: "fixed",
    top: "50%",
    left: "55%",
  },
}));
