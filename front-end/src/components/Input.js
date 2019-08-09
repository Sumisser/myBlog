import React, { Component } from 'react'

export class Input extends Component {
  state = {
    value: ''
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.value);
    this.setState({
      value:''
    });
    this.props.hidden();
  };
  handleChange = e => {
    this.setState({
      value:e.target.value
    })
  };
  hiddenInput = () => {
    this.setState({
      value:''
    });
    this.props.hidden();
  };

  componentDidUpdate() {
    if (this.props.menuStatus) {
      setTimeout(() => {
        this.refs.textInput.focus()
      }, 500);
    }
  }
  render() {
    return (
      <div className='input'>
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='请输入暗号'
          ref='textInput'
          value={this.state.value}
          onChange={this.handleChange}
          onBlur={this.hiddenInput}
        />
        <span className='bar' />
      </form>
      <style jsx>{`
        .input {
          position: relative;
        }
        input {
          font-size: 18px;
          width: 300px;
          border: none;
          outline: none;
          padding: 10px 10px 10px 5px;
          border-bottom: 1px solid #52555a;
        }
        input::placeholder{
          color:#e0e0e0;
          font-style: italic;
        }
        input:focus {
          border-bottom: 1px solid #e9432b;
          transition: all 0.3s ease;
        }
        input:focus ~ .bar::before,
        input:focus ~ .bar::after {
          width: 50%;
          transition: all 0.5s ease;
        }
        input ~ .bar::before,
        input ~ .bar::after {
          border-bottom: 1px solid #e9432b;
          width: 0;
          transition: all 0.5s ease;
        }
        .bar {
          position: relative;
          display: block;
          width: 100%;
        }
        .bar::before,
        .bar::after {
          content: '';
          height: 2px;
          width: 0;
          bottom: 1px;
          position: absolute;
          background: #e9432b;
        }
        .bar::before {
          left: 50%;
        }
        .bar::after {
          right: 50%;
        }
      `}</style>
    </div>
    )
  }
}

export default Input
