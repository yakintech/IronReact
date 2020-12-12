import React, {useContext} from 'react'
import 'antd/dist/antd.css';
import { Button, Input, Form } from 'antd';
import { add } from '../../services/baseservice';
import categoryContext from '../../context/Categorycontext';

function Categoryadd() {

    const {categories, setcategories} = useContext(categoryContext);

    const onFinish = async (values) => {
       let data = await add('/api/categories/add', values);

       setcategories([...categories,data]);
    }

    return (
        <div>
            <Form
                name="basic"
                onFinish={onFinish}
            >
                <Form.Item
                    label="Ad"
                    name="name"
                    rules={
                        [
                            {
                                required: true,
                                message: "Ad alanı boş bırakılamaz"
                            }
                        ]
                    }
                >
                    <Input></Input>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>

            </Form>
        </div>
    )
}

export default Categoryadd
