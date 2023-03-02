import React from 'react'
import { Form, Input } from 'antd'
import {RulesForm} from './../../types/rules.type'
interface inPutFormType{
    label: string
    name: string
    children: any
    rules: RulesForm[]
}


const InPutForm = ({label, name, rules, children}:inPutFormType) => {
    
    return (
        <Form.Item
            label={label}
            name={name}
            rules={rules}
        >
           {children}
        </Form.Item>
    )
}

export default InPutForm