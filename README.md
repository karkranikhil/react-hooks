## React Hooks

### React hooks are a new features that let you use state and other React features without writing class.

#### Class component example

        class App extends Component {
            state={
                count:0
            }
            incrementCount = ()=>{
                this.setState({
                count:this.state.count+1
                })
            }
            render() {
                return (
                <button onClick={this.incrementCount}>
                I was clicked {this.state.count} time
                </button>
                );
            }
            }

#### First Hook - useState (alternative to this.state)

        const App=()=>{
            const [count, setCount] = useState(0)
            const incrementCount=()=>{
                setCount(count+1)
            }
                return <button onClick={incrementCount}>I was clicked {count} time</button>
        };

#### Second hook - useEffect  (alternative to cause side effects like ajax or API call in componenDidMount)

The function passed to useEffect will run after the render is committed to the screen.

    useEffect(()=>{
        document.title=`You have clicked ${count} times`
    })

