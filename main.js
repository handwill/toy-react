import {createElement,render,Component} from "./toy-react.js"

class MyComponent  extends Component{
    render(){
        return <div>
            <h1>hello</h1>
            {this.children}
        </div>
    }
}


render(
<MyComponent id="a" class='c'>
       <div>abc</div>
       <div></div>
    </MyComponent>, document.body
)
