import React, { Component } from 'react';
import './style.css';

class OrderItem extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        const { picture, product, shop, price ,isCommented} = this.props.data;
        return (
            <div className='orderItem'>
                <div className = 'orderItem__picContain'>
                    <img className='orderItem__pic' src= { picture } alt=""/>
                </div>
                <div className='orderItem__content'>
                    <div className='orderItem__product'>{ product }</div>
                    <div className='orderItem__shop'>{ shop }</div>
                    <div className='orderItem__detail'>
                        <div className='orderItem__price'>{ price }</div>
                        <div>
                            {
                                isCommented ? (
                                    <button className='orderItem__btn orderItem__btn--grey'>评价</button>
                                ) : (
                                    <button className='orderItem__btn orderItem__btn--red'>评价</button>
                                )
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderItem;