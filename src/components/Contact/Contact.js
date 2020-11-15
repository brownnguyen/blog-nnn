import React, { Component } from 'react'
import './Contact.scss';
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {
                name: '',
                email: '',
                subject: '',
                textMess: ''
            }
        }
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            message: { ...this.state.message, [name]: value }
        })
        console.log(this.state.message)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.message)

    }
    render() {
        let { name, email, textMess, subject } = this.state.message;
        return (
            <section className="contact">
                <h3 className="title">LIÊN HỆ</h3>
                <p className="text">
                    Bạn có điều gì muốn nhắn gửi đến mình??
                    <br />
                    Đừng ngần ngại, cứ hãy để lại thông tin cho mình nhé! Cám ơn bạn nhiều!
                </p>
                <div className="box">
                    <form onSubmit={this.handleSubmit}>
                        <div className="contact-content">
                            <input
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                                placeholder="Tên của bạn"
                                className="input-contact" type='text' />
                            <input
                                value={email}
                                name="email"
                                onChange={this.handleChange}
                                placeholder="Email"
                                className="input-contact" type='email' />
                            <input
                                value={subject}
                                name="subject"
                                onChange={this.handleChange}
                                placeholder="Chủ đề"
                                className="input-contact" type='text' />
                        </div>
                        <textarea
                            value={textMess}
                            onChange={this.handleChange}
                            name="textMess"
                            placeholder="Tin nhắn"
                            className="contact-textArea">
                        </textarea>
                        <button
                        type="submit"
                            className="button-contact"
                        >Gửi</button>
                    </form>
                </div>
            </section>
        )
    }
}
