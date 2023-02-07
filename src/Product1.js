import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";


function Product1() {
    const [Product1, setProduct1] = useState([]);
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    let [selectedProduct1, setSelectedProduct1] = useState({});


    useEffect(() => {
        fetchProduct1();
    }, []);

    let fetchProduct1 = async () => {
        let result = await axios.get(
            "https://p-9x7e.onrender.com/products/products"
        );
        if (result.data.error) {
            alert("some error occered in fetch");
        } else {
            let resultProduct1 = result.data.data;
            setProduct1(resultProduct1);
        }
    };

    let deleteProduct1 = async (id) => {
        try {
            let resData = await axios.delete(
                `https://p-9x7e.onrender.com/products/delete-product/${id}`
            );
            if (resData.data.error) {
                alert("something went wrong");
            } else {
                alert(resData.data.message);
                fetchProduct1();
            }
        } catch (error) {
            alert(error.message);
        }
    };

    //addProduct modal open
    let modalOpen = () => {
        setOpen(true);
    };
    //EditProduct modal open
    let modalEditOpen = (data) => {
        setOpenEdit(true);
        setSelectedProduct1(data);
    };


    return (
        <div>
            <Table className="table table-striped">
                <TableHead>
                    <TableRow>
                        <TableCell>Product ID</TableCell>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Product Description</TableCell>
                        <TableCell>Product Price</TableCell>
                        <TableCell>Product image</TableCell>
                        <TableCell>
                            <Button onClick={modalOpen}>Add Product</Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Product1.map((element) => {
                        return (
                            <TableRow id={element._id}>
                                <TableCell>{element._id}</TableCell>
                                <TableCell>{element.pName}</TableCell>
                                <TableCell>{element.pDesc}</TableCell>
                                <TableCell>{element.pPrice}</TableCell>

                                <TableCell>
                                    <img src={element.pImg} height="20px" width="20px"></img>
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => {
                                        modalEditOpen(element);
                                    }}>Edit</Button>
                                    <Button onClick={() => {
                                        deleteProduct1(element._id);
                                    }}
                                        className="btn btn-danger"
                                    >Delete</Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            {open && (
                <AddProduct
                    open={open}
                    setOpen={setOpen}
                    product={Product1}
                    setProduct={setProduct1}
                    fetchProduct={fetchProduct1}
                />
            )}
            {openEdit && (
                <EditProduct
                    openEdit={openEdit}
                    setOpenEdit={setOpenEdit}
                    selectedProduct={selectedProduct1}
                    setSelectedProduct={setSelectedProduct1}
                    fetchProduct={fetchProduct1}
                />
            )}

        </div>
    )
}

export default Product1
