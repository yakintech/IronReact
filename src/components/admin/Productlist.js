import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import { Table, Button, Input, Form, Select, Upload, Modal } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { PlusOutlined } from '@ant-design/icons';
import { object } from 'yup';


function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}


function Productlist() {



    const [products, setproducts] = useState([])
    const [categories, setCategories] = useState([]);
    const [fileList, setfileList] = useState([]);
    const [previewImage, setpreviewImage] = useState('');
    const [previewTitle, setpreviewTitle] = useState('');
    const [previewVisible, setpreviewVisible] = useState(false)



    let token = localStorage.getItem("tokenkey");


    useEffect(() => {
        let url = "http://localhost:3001/api/categories/?token=" + token;

        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                setCategories(result);
            })
    }, [])


    useEffect(() => {
        fillProducts();
    }, []);


    const fillProducts = () => {
        let url = "http://localhost:3001/api/products/?token=" + token;

        fetch(url)
            .then((res) => res.json())
            .then((result) => {

                console.log(result);
                let productsvm = []

                result.forEach((item) => {
                    var p = {
                        name: item.name,
                        description: item.description,
                        price: item.price,
                        code: item.code,
                        categories: item.categories,
                        mainimage: item.images[0],
                        id: item._id
                    };
                    productsvm.push(p);

                })

                setproducts(productsvm);
            })

    }

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
    }
    const handleCancel = () => {
        setpreviewVisible(false);
    }

    const handleChange = ({ fileList }) => setfileList(fileList);

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const onFinish = (values) => {
        let product = new Object();
        product.data = values;
        product.files = fileList;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        };

        let token = localStorage.getItem("tokenkey");


        fetch("http://localhost:3001/api/products/add?token=" + token, requestOptions)
            .then((res) => res.json())
            .then((result) => {

                fillProducts();
            })
    }


    const tableimagestyle = {
        width: "50px",
        height: "50px"
    };
    const columns = [
        {
            title: "Main Image",
            dataIndex: "mainimage",
            key: "mainimage",
            render: mainimage => <img style={tableimagestyle} src={'http://localhost:3001/images/productimages/' + mainimage} />
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price"
        }, {
            title: "Description",
            dataIndex: "description",
            key: "description"
        },
        {
            title: "Code",
            dataIndex: "code",
            key: "code"
        },
        {
            title: "Categories",
            dataIndex: "categories",
            key: "categories"
        },
        {
            title: "Delete",
            dataIndex: "id",
            key: "id",
            render: id => <Button danger onClick={() => deleteproduct(id)}>Delete</Button>
        }


    ]


    function deleteproduct(id) {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id })
        };

        let token = localStorage.getItem("tokenkey");


        fetch("http://localhost:3001/api/products/delete?token=" + token, requestOptions)
            .then((res) => res.json())
            .then((r) => {

                fillProducts();

            })
    }



    return (
        <div>

            <Form
                name="addProduct"
                onFinish={onFinish}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={
                        [{
                            required: true,
                            message: "Ürün adı boş geçilemez"
                        }]
                    }
                >
                    <Input></Input>
                </Form.Item>

                <Form.Item
                    label="Categories"
                    name="categories"
                >
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="select one category"
                        optionLabelProp="label"
                    >
                        {
                            categories.map((item) =>
                                (

                                    <Select.Option key={item._id} value={item._id} label={item.name}>
                                        <div className="demo-option-label-item">
                                            {item.name}
                                        </div>
                                    </Select.Option>
                                )
                            )
                        }


                    </Select>
                </Form.Item>


                <Form.Item
                    label="Images"
                >
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                    >
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <Modal
                        visible={previewVisible}
                        title={previewTitle}
                        footer={null}
                        onCancel={handleCancel}
                    >
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </Form.Item>


                <Form.Item
                    label="Description"
                    name="description"
                >
                    <TextArea />
                </Form.Item>
                <Form.Item
                    label="Unit Price"
                    name="price"
                    rules={
                        [{
                            required: true,
                            message: "Fiyat boş geçilemez"
                        }]
                    }
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Product code"
                    name="code"
                    rules={
                        [{
                            required: true,
                            message: "Kod alanı boş geçilemez"
                        }]
                    }
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>



            </Form>



            <Table dataSource={products} columns={columns} />

        </div>
    )

}

export default Productlist
