import * as React from "react";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField'
import {useEffect } from "react";
import { Field, reduxForm,initialize } from "redux-form";
import {list} from "../slices/formSlice"
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
interface IProps {
  form: string
 }


const renderTextField= ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}: (any)
) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)
interface RouteParams {
  id: string
}
let Form = (props: any) => {
  const params = useParams<RouteParams>();
  const thisID=parseInt(params.id);
  const dispatch = useDispatch();
  const listProduct = useSelector(list);
  var initVal = {};
  if (thisID === 0){
    initVal = {}
  }else{
    for (var i = 0; i < listProduct.length ; i++) {
      if (listProduct[i].id === thisID) {
        initVal = {
          name:listProduct[i].name,
          detail:listProduct[i].detail,
          price:listProduct[i].price
        };
      }
    }
  }
  useEffect(() => {
    dispatch(initialize("contact", initVal))
  }, []);
   
  
  const { handleSubmit, pristine, reset, submitting, classes} = props
  return (
    <form onSubmit={handleSubmit}>
      <Grid container justify="center" alignContent="center">
      <Grid item xs={6} md={4}>
        <Paper
          elevation={4}
          style={{ padding: "20px 15px", marginTop: "30px" }}
        >
          <Typography>Product</Typography>
      <div>
      <FormControl fullWidth margin="normal">
            
        <Field
          name="name"
          component={renderTextField}
          label="Name"      
          required        
        />
        </FormControl>
      </div>
      <div>
      <FormControl fullWidth margin="normal">
        <Field name="detail" component={renderTextField} label="Detail" required    />
        </FormControl>
      </div>
      <div>
      <FormControl fullWidth margin="normal">
        <Field name="price" component={renderTextField} label="Price" required   />
        </FormControl>
      </div>
      <div>
      <FormControl  fullWidth margin="normal" >
      <Button   type="submit"  disabled={pristine || submitting} >
          Submit
        </Button>
        </FormControl>
      </div>
      </Paper>      
      </Grid>
    </Grid>
      </form>
  )
};

export default reduxForm<IProps>({
  // a unique name for the form
  form: "contact",
})(Form);






