import React from 'react';
import axios from 'axios';

// smart component
export class SuperComponent extends React.Component{

    state   = {
        napis: "Sierotka Marysia",
        krasnoludki: 40,
        imiona: ["koszalek", "opalek", "zbychu", "rysio"],
        data:"",
        posts: [],
        wartoscPola: ""
    };

onClick = () => {
    console.log("Ktos nacisnal guzik!");
    this.setState(
        {
            data: Date().toString()
        }
    )
};

dodaj  = () => {
    this.setState(
        prevState => {
            return {
                imiona: prevState.imiona.concat("nowy krasnal")
            }
        }
    );
};

pobierzDane = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then( res => {
            this.setState({posts: res.data});
        });
}
    render(){
        return(
            <div>
Hello, from smart component;
            
            <p>
                Napis to: {this.state.napis};
                <br />
                <button className="btn" onClick={this.onClick}>Super Guzik</button>
                <br/>
                    <span>{this.state.data}</span>
                <br />
                <button className="btn" onClick={this.dodaj}>Dodaj Krasnala</button>
                <ul className="list-group">
                    {this.state.imiona.map( imie => <li className="list-group-item">{imie}</li>)}
                </ul>
                <input  type="text" 
                    onChange={(ev) => this.setState({wartoscPola: ev.target.value})}
                    value={this.state.wartoscPola}  />
                <br />
                <span> {this.state.wartoscPola}</span>
                <button className="btn" onClick={this.zapisz}>Zapisz</button>





                <br />
                <button className="btn" onClick={this.pobierzDane}>Wczytaj posty</button>
                <br />

                {
                    this.state.posts.length == 0 &&
                    <b>
                        Nie ma postow
                    </b>
                }
                <table className="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
 
                    {this.state.posts.map(post => {
                        return (
                            <tr scope="row">
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                                
                        )
                    })}

                </table>
            </p>
            </div>
        );
    }
}