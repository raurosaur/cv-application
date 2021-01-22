import {Component} from 'react';

class Name extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            fontSize: 50
        }
    }

    nameInput = (e) => {
        this.setState({ name: e.target.value });
    }

    changeSize = ({ target }) => {
        if (target.value.length > 35) {
            const { fontSize } = this.state;
            this.setState({ fontSize: fontSize - 1 });
            target.style.fontSize = `${fontSize}px`;
        }
    }

    render() {
        let { name } = this.state;
        return (
        <input className='name' type='text'
            value={name} onInput={this.nameInput}
            onKeyDown={this.changeSize}
            placeholder='Jane Doe' />
        );
    }
}

export default Name;