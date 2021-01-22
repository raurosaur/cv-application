import { Component } from 'react';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: []
        };
    }
    render() {
        const input = (e) => {
            if (e.code === 'Enter') {
                if (e.target.value.length <= 2) return;
                const entry = [...this.state.skills, e.target.value];
                this.setState({ skills: entry });
                e.target.value = '';
            }
        };
        let { skills } = this.state;
        return (
            <section className='component skills'>
                <div className='input-flex'>
                    <input type='text' placeholder='Skills' onKeyDown={input} maxLength='22' />
                    <img src="https://cdn1.iconfinder.com/data/icons/web-design-29/60/pencil__icon__vector__line-512.png" alt="edit" />
                </div>
                <ul>
                    {skills.map(el => (<li>{el}</li>))}
                </ul>
            </section>
        );
    }
}

export default Skills;