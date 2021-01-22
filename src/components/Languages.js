import { Component } from 'react';

class Lang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: []
        };
    }
    render() {
        const input = (e) => {
            if (e.code === 'Enter') {
                if (e.target.value.length <= 2) return;
                const entry = [...this.state.lang, e.target.value];
                this.setState({ lang: entry });
                e.target.value = '';
            }
        };
        let { lang } = this.state;
        return (
            <section className='component lang'>
                <div className='input-flex'>
                    <input type='text' placeholder='Languages' onKeyDown={input} maxLength='22' />
                    <img src="https://cdn1.iconfinder.com/data/icons/web-design-29/60/pencil__icon__vector__line-512.png" alt="edit" />
                </div>
                
                <p>{lang.join(', ')}</p> 
            </section>
        );
    }
}

export default Lang;