import { makeStyles } from "@mui/styles";
export const MyStyles = makeStyles(() => ({
  active: {
    backgroundColor: "red !important",
  },
  form: {
    width: "400px",
  },
  formTextArea: {
    marginBottom: "10px",
    resize: "none",
    width: "100%",
    padding: "10px",
    outlineColor: "#0077b6",
    borderRadius: "6px",
    borderColor: "#b7b7a4",
  },
  btn: {
    padding: "10px !important",
    borderRadius:"4px !important", 
    marginRight: "10px !important",
  },
  textField: {
    border: "0px !important",
  },
  label: {
    color: "black",
    fontSize: "10px",
    marginTop:"15px"
  },
  select: {
    width: "200px",
    height: "40px",
    color: "black",
    outline: "none !important",
  },
  formGroup: {
    margin: "10px 0px",
  },
}));
