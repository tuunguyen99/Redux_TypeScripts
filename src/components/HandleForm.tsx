import * as React from 'react';
import { useEffect, useState } from 'react'
import Form from '../containers/Form';
import {add,list,del,edit} from '../slices/formSlice'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
interface RouteParams {
  id: string
}
const HandleForm =() => {
  const params = useParams<RouteParams>();
  const editID=parseInt(params.id);
  const l = useSelector(list);
  const dispatch = useDispatch();
  var history = useHistory();
  const [submited, setSubmited] = useState(false);
  const submit = (values: any) => {
    console.log(editID);
    if (editID === 0) {
       dispatch(add({...values,id:(l[l.length-1]?(l[l.length-1].id+1):1)}));
    }else{
      dispatch(edit({...values,id:editID}))
    }
    // print the form values to the console
    setSubmited(true)
  }
  
  useEffect(() => {
    if (submited===true)
    history.push('/')
  });
    return( 
      <div>
    <Form onSubmit={submit} />
   
    </div>
      )
  
}
export default HandleForm;