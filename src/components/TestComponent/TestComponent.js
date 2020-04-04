import React, { useState } from 'react';
import { Form, FormGroup, FormItem, Input, CheckBox, InputType, Select, Option, FlexBox, text } from "@ui5/webcomponents-react";

const TestComponent = () => {
    return (
        <Form title={''}>
            <FormGroup data-layout={{ span: 'XL8 L8 M8 S8' }} title={'Persoal Data'}>
                <FormItem label={'Name'}>
                    <Input type={InputType.Text} />
                </FormItem>
                <FormItem label={'Address'}>
                    <Input type={InputType.Text} />
                </FormItem>
                <FormItem label={'Country'}>
                    <Select>
                        <Option>Germany</Option>
                        <Option>France</Option>
                        <Option>Italy</Option>
                    </Select>
                </FormItem>
            </FormGroup>
            <FormGroup data-layout={{ span: 'XL8 L8 M8 S8' }} title={'Persoal Data'}>
                <FormItem label={'Name'}>
                    <Input type={InputType.Text} />
                </FormItem>
                <FormItem label={'Address'}>
                    <Input type={InputType.Text} />
                </FormItem>
                <FormItem label={'Country'}>
                    <Select>
                        <Option>Germany</Option>
                        <Option>France</Option>
                        <Option>Italy</Option>
                    </Select>
                </FormItem>

            </FormGroup>
        </Form>
    );
}
export default TestComponent;
