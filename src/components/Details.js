import { Component} from 'react';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: []
        };
    }
    render() {
        const input = (e) => {
            if(e.code === 'Enter'){
                if(e.target.value.length <= 2) return;
                const entry = [...this.state.details, e.target.value];
                this.setState({details: entry});
                e.target.value = '';
            }
        };
        let {details} = this.state;
        return (
            <section className='component details'>
            <div className = 'input-flex'>
                <input type = 'text' placeholder = 'Details' onKeyDown = {input} maxLength = '22' />
                    <img src="https://cdn1.iconfinder.com/data/icons/web-design-29/60/pencil__icon__vector__line-512.png" alt="edit"/>
            </div>
            <ul>
                {details.map(el => (<li>{el}</li>))}
            </ul>
        </section>
        );
    }
}

export default Details;