import React, { Component } from 'react';
import OrderItem from '../OrderItem';
class OrderList extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        };
        
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map( (item) => (
                        <OrderItem key = {item.id} data = {item} />
                    ))
                }
            </div>
        );
    }

    componentDidMount(){
        fetch('/mock/orders.json')
        .then(res => {
            console.info(res)
            if(res.ok){
                return res.json() // // 返回一个Promise，返回数据解析成JSON
            }
        }).then( data => {
            this.setState({data}) // // 获取JSON数据
        })
    }
}

export default OrderList;