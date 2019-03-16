
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
            user: null
        };
    }
    
    componentDidMount(){
        fetch("url")
                .then(res => res.json())
                .then((result)=>{
                    this.setState({
                        isLoaded: true,
                        user: result.user
                
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
        const{ error, isLoaded, user} = this.state;
        if(error){
            return <div>Error: {error.message}</div>;
            
        }else if (!isLoaded){
            return <div>Loading...</div>;
        }else{
            return(<ul>
            {user.map(item => (<li key={item.name}>
                    {item.username} {item.password}
                    </li>))}
                    </ul>
                    );
        }
    }
}