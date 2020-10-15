import * as React from "react";
import { useEffect } from 'react';
import { Table, ButtonToggle } from 'reactstrap';
import {del,list} from "../slices/formSlice"
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Product = () => {
    var history = useHistory();
    const listProduct = useSelector(list);
    const dispatch = useDispatch();
    useEffect(() => {
      console.log(listProduct);
    },);
    const handleAddProduct = () =>{
      history.push('/1/0')
    }
    
   
  return (
      <div>
        <ButtonToggle onClick={handleAddProduct}> Thêm sản phẩm</ButtonToggle>
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Detail</th>
          <th>Price</th>
          <th/>
          <th/>
        </tr>
      </thead>
      <tbody>
        {listProduct?(listProduct.map((item: { id: string; name: React.ReactNode; detail: React.ReactNode; price: React.ReactNode; }) => {
            return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.detail}</td>
                  <td>{item.price}</td>
                  <td>
                  <ButtonToggle onClick={()=>{
                    history.push(`/1/${item.id}`)
                  }}> Chỉnh sửa</ButtonToggle>
                  </td>
                  <td>
                  <ButtonToggle onClick={()=>{
                          dispatch(del(item.id));
                          
                              }}> Xoá</ButtonToggle>
                  </td>
                </tr>
              );
        })
        ):(
            <p>Loading</p>
        )}
      </tbody>
    </Table>
    </div>
  );
}

export default Product;