import { Component } from 'react';

class Credential {
    constructor(org, startYear, endYear, exam, score) {
        this.org = org;
        this.startYear = startYear;
        this.endYear = endYear;
        this.exam = exam;
        this.score = score;
    }
}
class Tab extends Component {
    render() {
        const { org, startYear, endYear, exam, score } = this.props;
        return (
            <div className='credential'>
                <span>{org} | {startYear} - {endYear}</span>
                <div>{exam}</div>
                <div>{score}</div>
            </div>
        );
    }
}

class Academic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: [],
            form: (<></>),
        }
        this.getForm = this.getForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    generateTab({ org, startYear, endYear, exam, score }) {
        return <Tab org={org} startYear={startYear}
            endYear={endYear} exam={exam}
            score={score}
        />
    }
    submitForm(e) {
        e.preventDefault();
        const arr = [];
        [...e.target.children].forEach(el => {
            if (el.localName === 'input')
                arr.push(el.value)
        });
        const credential = new Credential(...arr);
        const render = [...this.state.credentials, this.generateTab(credential)];
        this.setState({ credentials: render, form: (<></>) });

    }
    getForm() {
        if (this.state.credentials.length >= 5) {
            alert('Sorry, max reached');
            return;
        }
        this.setState({
            form: (
                <form onSubmit={this.submitForm}>
                    <input type='text' placeholder='Organisation' />
                    <input type='number' placeholder='Start Year' />
                    <input type='number' placeholder='End Year' />
                    <input type='text' placeholder='Exam' />
                    <input type='text' placeholder='Score' />
                    <button type='submit'>Submit</button>
                </form>
            )
        });
    }
    render() {
        const { credentials, form } = this.state;
        return (
            <section className='component academic center'>
                <h1 onClick={this.getForm}>Academics</h1>
                {form}
                {credentials.map(el => el)}
            </section>
        );
    }
}

export default Academic;