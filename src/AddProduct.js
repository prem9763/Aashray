import { Button, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: 'White',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function AddProduct({ open, setOpen, fetchProduct }) {
    let [formData, setFormData] = useState({
        pName: "",
        pPrice: "",
        pDesc: "",
        pImg: "",
    });

    let ifError = () => {
        if ((formData.pName === "") || (formData.pPrice === "") || (formData.pDesc === "") || (formData.pImg === "")) {
            alert("fields are necessory");
        }
       
    };
    let AddOnClick = async () => {
        let AddElements = await axios.post(
            "https://p-9x7e.onrender.com/products/add-product",
            formData
        );
        if (AddElements.data.error) {
            alert("something went wrong");
        } else {
            fetchProduct();
            alert(AddElements.data.message);

        }
    };

    let closeModal = () => {
        setOpen(false);
    };

    return (
        <div>
            <Modal open={open}
                onClose={closeModal}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add Your Product
                    </Typography>

                    <div className="mb-2">
                        <TextField
                            label="Product Name"
                            name="name"
                            type="text"
                            placeholder="Insert Product name"
                            onChange={(e) => {
                                setFormData({ ...formData, pName: e.target.value });
                            }}
                        ></TextField>
                    </div>
                    <div className="mb-2">
                        <TextField
                            label="Product Price"
                            name="price"
                            type="number"
                            placeholder="Insert Product price"
                            onChange={(e) => {
                                setFormData({ ...formData, pPrice: e.target.value });
                            }}
                        >
                        </TextField>
                    </div>
                    <div className="mb-2">
                        <TextField
                            name="disc"
                            label="Product Description"
                            type="text"
                            placeholder="Insert product description"
                            onChange={(e) => {
                                setFormData({ ...formData, pDesc: e.target.value });
                            }}

                        >
                        </TextField>
                    </div>
                    <div className="mb-2">
                        <TextField
                            label="Product Url"
                            name="imageUrl"
                            type="text"
                            placeholder="Insert image URL"
                            onChange={(e) => {
                                setFormData({ ...formData, pImg: e.target.value });
                            }}
                        >
                        </TextField>
                    </div>
                    <div >
                        <Button className="mx-3"
                            onClick={() => {
                               
                                AddOnClick();
                                ifError();
                           
                            }}>Submit</Button>
                         <Button onClick={closeModal}>Close</Button>
                    </div>
                </Box>

            </Modal>
        </div>
    )
}

export default AddProduct
