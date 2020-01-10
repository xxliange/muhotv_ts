import React, {Component, FormEvent} from 'react';
type MyProps = {
    string:number,
    number:number
};

type MyState = {
    a?:string,
    text?:string
};


interface interfaceObj {
    a:string,
    b:number | string | undefined
};

interface SearchFunc {
    (a:string, b:number):boolean;
};
// let mySearch : SearchFunc;
// mySearch = (a:string,b:number)  =>{
//     return false;
// }

class MHome extends Component<MyProps, MyState>{
    constructor(props:MyProps){
        super(props);
        this.state={
            a:'1',
            text:''
        };
        let mySearch : SearchFunc;
    }

    componentDidMount=()=>{
        const {a} = this.state;
        this.onInerface({a:'1',b:1});
        this.mySearch('1', 1);
    }

    /**
     * 
     * 传入的值为一个对象
     */
    onInerface=(object:interfaceObj) : void =>{
        console.log(object);
    }

    onChange=(e:FormEvent<HTMLInputElement>)=>{
        this.setState({text:e.currentTarget.value});
    }

    mySearch=(a:string, b:number)=>{
        return 1;
    }

    onClick=()=>{
        console.log('1');
        const a : any = 123;
    }

    render() {
        const {string, number} = this.props;
        console.log(string, number);
        return (
            <div>
                <button onClick={this.onClick}>123</button>
                <input type="text" value={this.state.text} onChange={this.onChange}/>
            </div>
        )
    }
};

export default MHome;