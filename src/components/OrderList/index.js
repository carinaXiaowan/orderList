import React, { Component } from 'react';
import OrderItem from '../OrderItem';
class OrderList extends Component {
    constructor(props){
        super(props)
        this.data = {
            id: '1',
            shop: '院落创意菜',
            picture: 'http://pic.ffpic.com/files/tupian/tupian0277.jpg',
            product: '百香果',
            price: '10',
            isCommented: true
        }
    }
    render() {
        return (
            <div>
                <OrderItem data = {this.data} />
            </div>
        );
    }
}

export default OrderList;