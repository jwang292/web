

function Hello(){
    return (
        <div>THIS IS A FUNCTION COMPONET</div>
    )
}

ReactDOM.render(<Hello />,document.getElementById('root'))

// class componet 

class Hello1 extends React.Component{
    render(){
        return <div>hello class componet</div>
    }
}
ReactDOM.render(<Hello1 />,document.getElementById('root'))

export default Hello1

class App extends React.Componet{
    handleClick(){
        console.log('click');
    }
    render(){
        return(
            <button onClick={this.handleClick}>submit</button>
        )
    }
}
ReactDOM.render(<Hello1 />,document.getElementById('root'))


