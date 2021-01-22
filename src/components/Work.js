import { Component } from 'react';

class Credential {
    constructor(org, startYear, endYear, position, desc) {
        this.org= org;
        this.startYear = startYear;
        this.endYear = endYear;
        this.position = position;
        this.desc = desc;
    }
}
class Tab extends Component{
    render(){
    const { org, startYear, endYear, position, desc} = this.props;
        return (
            <div className='credential'>
                <span>{org} | {startYear} - {endYear}</span>
                <div>{position}</div>
                <div>{desc}</div>
            </div>
        );
    }
}

class Work extends Component {
    constructor(props){
        super(props);
        this.state = {
            credentials: [],
            form: (<></>),
        }
        this.getForm = this.getForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    generateTab({org, startYear, endYear, position, desc}){
        return <Tab org = {org} startYear = {startYear}
            endYear = {endYear} position = {position}
            desc = {desc}
        />
    }
    submitForm (e){
        e.preventDefault();
        const arr = [];
        [...e.target.children].forEach(el => { 
            if (el.localName === 'input' || el.localName === 'textarea')
                arr.push(el.value) 
        });
        const credential = new Credential(...arr);
        const render = [...this.state.credentials, this.generateTab(credential)];
        this.setState({ credentials: render, form: (<></>) });

    }
    getForm (){
        if(this.state.credentials.length >= 5){
            alert('Sorry, max reached');
            return;
        }
        this.setState({
            form: (
                <form onSubmit={this.submitForm}>
                    <input type='text' placeholder='Organisation' />
                    <input type='number' placeholder='Start Year' />
                    <input type='number' placeholder='End Year' />
                    <input type='text' placeholder='Position' /><br />
                    <textarea placeholder='Description' />
                    <button type='submit'>Submit</button>
                </form>
            )
    });}
    render() {
        const {credentials, form} = this.state;
        return (
            <section className='component work center'>
                <h1 onClick = {this.getForm}>Work Experience</h1>
                {form}
                {credentials.map(el => el)}
            </section>
        );
    }
}

export default Work;