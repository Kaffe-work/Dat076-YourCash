
class User{
    constructor(username, name, password){
            this.username = username;
            this.name = name;
            this.password = password;
    }
    
}

class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: null
        };
    }
    
    componentDidMount(){
        fetch("http://localhost:8080/YourCashV2/faces/UserServlet", {
            method: 'GET'
        })
                .then(res => res.json())
                .then((result)=>{
                    this.setState({
                        isLoaded: true,
                        users: result.users
                
                    });
        },
        (error)=>{
            this.setState({
                isLoaded: true,
                error
            });
        }
        )
    }
    
    render(){
        const{ error, isLoaded, users} = this.state;
        if(error){
            return <div>Error: {error.message}</div>;
            
        }else if (!isLoaded){
            return <div>Loading...</div>;
        }else{
            return(<ul>
            {users.map(item => (<li key={item.username}>
                    {item.name} {item.password}
                    </li>))}
                    </ul>
                    );
        }
    }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);