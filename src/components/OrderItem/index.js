import React, { Component } from 'react';
import './style.css';

class OrderItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            editing: false,
            comment: this.props.data.comment || '',
            stars : this.props.data.stars || 0
        }
    }

    handleOpenEditArea = () => {
        this.setState({
            editing: true
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleClickStars = (stars) => {
        this.setState({ stars })
    }

    handleCancleComment = () => {
        this.setState({
            editing: false,
            comment: this.props.data.comment || '',
            stars : this.props.data.stars || 0
        })
    }
    
    handleEditComment = () => {
        this.setState({
            editing: true,
            comment: this.props.data.comment,
            stars : this.props.data.stars
        })
    }

    handleSubmitComment = () => {
        const { id } = this.props.data;
        const { comment, stars } = this.state;
        this.setState({
            editing: false, 
        })
        this.props.onSubmit(id, comment, stars)
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
                                    <div>
                                        <button className='orderItem__btn orderItem__btn--grey'>已评价</button>
                                        <button className='orderItem__btn orderItem__btn--edit' onClick={ this.handleEditComment}>查看</button>
                                    </div>
                                ) : (
                                    <button className='orderItem__btn orderItem__btn--red' onClick = {this.handleOpenEditArea} >评价</button>
                                )
                            }
                            
                        </div>
                    </div>
                </div>
                { this.state.editing ? this.renderEditArea() : null }
            </div>
        );
    }

    renderEditArea(){
        return (
            <div className='orderItem__commentContainer'>
                <textarea className='orderItem__comment' value= { this.state.comment}  onChange = { this.handleCommentChange} />
                { this.renderStarts() }
                <button className='orderItem__btn orderItem__btn--red' onClick = { this.handleSubmitComment}>提交</button>
                <button className='orderItem__btn orderItem__btn--grey' onClick = { this.handleCancleComment }>取消</button>
            </div>
        )
    }

    renderStarts(){
        const { stars } = this.state;
        return (
            <div>
                {
                    [1, 2, 3, 4, 5].map( (item, index) => {
                        return (
                            stars >= item
                             ? (<span key= {index} role='img' aria-label='star' className='orderItem__stars' onClick = { this.handleClickStars.bind(this, item) } >⭐️</span>)
                             : (<span key= {index} role='img' aria-label='star' className='orderItem__stars' onClick = { this.handleClickStars.bind(this, item) }>★</span>)
                        )
                    })
                }
            </div>
        )
    }
}

export default OrderItem;