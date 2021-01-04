// export function Userform(props){
//     return (
//         <input placeholder={props.label} style={{backgroundColor:props.color}}
//         ></input>
//     )
// }

import React from "react";
export class Userform extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    constructor() {
        super();
        this.state = {
            fname: 'john',
            copy: 'doe'
        }
    }

    clkBtn(params) {
        console.log('Cons Save');
        
    }

    print = (event)=>{
        console.log(this.state.fname);
        this.setState({   //to rerender , call setstate
            copy: this.state.fname
        })
    }

    render() {
        return (
            //only 1 root element
            //either add onChange or make textbox readOnly

            //Text box not taking input but state is changing
            // <input value={this.state.fname} onChange={(event) => {
            // console.log(this.state.fname);
            // this.state.fname = event.target.value}}
            // placeholder={this.props.label} style={{ backgroundColor: this.props.color }}></input>
            <div>
                <input value={this.state.fname} onChange={(event) => {
                    //console.log(this.state.fname);
                    //this.state.fname = event.target.value}
                    this.setState({   //to rerender , call setstate
                        fname: event.target.value
                    })
                }
                }
                    placeholder={this.props.label} style={{ backgroundColor: this.props.color }}></input>

                <input value={this.state.copy}  onChange={(event) => {
                    this.setState({   //to rerender , call setstate
                        copy: event.target.value
                    })
                }}
                placeholder='First Name Copy' style={{ backgroundColor: this.props.color }}></input>
                
                <button style={{ backgroundColor: this.props.color }} onClick={(event) => { console.log('inline click');console.log(this.state.fname); }}>Inline Save</button>
                <button style={{ backgroundColor: this.props.color }} onClick={this.clkBtn}>Cons Save</button>
                <button onClick={this.print}>Print</button>

            </div>
        )

    }
}    