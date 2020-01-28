import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import './index.css';
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import { Dimmer, Loader } from "semantic-ui-css/semantic.min.css";
import { Button } from 'semantic-ui-react'
import HeaderApp from './App.jsx';
import Card from "./Card.jsx";

//This is the instantiation of the Apollo client
const client = new ApolloClient({ uri: "https://swapi.graph.cool" });

//This is rendering the "head" div in index.html
const headElement = document.getElementById("head");
ReactDOM.render(
    <ApolloProvider client={client}>
        <HeaderApp />
    </ApolloProvider>,
    headElement
);

// //This is a function running the query of people.
const query = gql`{
    allPersons(orderBy: name_ASC)
    {
        id
        birthYear
        eyeColor
        gender    
        hairColor
        height
        mass
        name
        skinColor    
    }
}`;

const PersonQuery = () => (
    <Fragment>
        <Query query={query}>
            {({ loading, error, data }) => {
                if (loading) return (<div active> <h1>Loading GraphQL query...</h1></div>);
                if (error) return (<div active><h1>GraphQL query failed!</h1></div>);
                return data.allPersons.map(props => (
                    <Card {...props} key={props.id} />
                ));
            }}
        </Query>
    </Fragment>
);

// const PersonQuery = () => {
//     return (
//         <Query
//             query={gql`
//             {
//                 allPersons(orderBy: name_ASC)
//                 {
//                     id
//                     birthYear
//                     eyeColor
//                     gender    
//                     hairColor
//                     height
//                     mass
//                     name
//                     skinColor    
//                 }
//             }
//             `}
//         >
//         {({ loading, error, data }) => {
//             if (loading) return <p>Loading GraphQL query...</p>;
//             if (error) return <p>GraphQL query failed!</p>;

//             return data.allPersons.map(allPersons => (
//                 <table align="left" class="TableNormal">
//                     <tbody>
//                         <tr> <th>Name of Person:</th> <td>{allPersons.name}.</td> </tr>
//                         <tr> <th>Birth Year:</th> <td>{allPersons.birthYear}.</td> </tr>
//                         <tr> <th>Eye Color:</th> <td>{allPersons.eyeColor}.</td> </tr>
//                         <tr> <th>Gender:</th> <td>{allPersons.gender}.</td> </tr>
//                         <tr> <th>Hair Color:</th> <td>{allPersons.hairColor}.</td> </tr>
//                         <tr> <th>Height:</th> <td>{allPersons.height}.</td> </tr>
//                         <tr> <th>Mass:</th> <td>{allPersons.mass}.</td> </tr>
//                         <tr> <th>Skin Color:</th> <td>{allPersons.skinColor}.</td> </tr>
//                     </tbody>
//                 </table>));
//         }}
//         </Query>
//     );
// };

//This is a function containing the list of people. 
function PeopleList() {
    return (
        <div className="App">
            <PersonQuery />
        </div>
    );
}
//This is a function rendering the "root" div in index.html
function RootApp() {
    const rootElement = document.getElementById("root");
    ReactDOM.render(
        <ApolloProvider client={client}>
            <PeopleList />
        </ApolloProvider>,
        rootElement
    );
    // console.log(rootElement);
}

//This is a function that runs "Application" function after button "onClick" event
function ButtonEvent(){
    return(
        <Button onClick={() => RootApp()}>List 5 people at a time</Button>
    );
}

//This is a function rendering the "button" div in index.html
const buttonElement = document.getElementById("button");
ReactDOM.render(
    <ApolloProvider client={client}>
        <ButtonEvent />
    </ApolloProvider>,
    buttonElement
);