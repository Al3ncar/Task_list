import React from "react"; import "./App.css";
import trash from "./img/lixo.png";

import styled from "styled-components";
  const Main = styled.main`
    width: 80vw;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;
  const Rod = styled.div`
    width: 100%;
    background-color: #553d32;
    height: 5vh;
  `;
  const Boxtitle = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: greem;

    border-bottom: solid gray 0.2vw;
  `;
  const Data = styled.div`
    width: 15%;
    height: 50%;
    margin: 2% 3% 5% 5%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    outline: 0;
  `;
  const Title = styled.h1`
    width: 100%;
    padding: 2% 4% 0 4%;
    font-size: 3vw;
  `;
  const Newtesk = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;`;
  const Del = styled.button` width: 10%; padding: 0.5%;`;
  const Btn = styled.button` width: 15%; padding: 0.5%;`;
  const Task = styled.input`
    width: 60%;
    padding: 0.5% 1%;
    margin: 2% 0% 2% 0%;
    outline: 0;
  `;
  const TaskList = styled.li`
    width: 75%;
    padding-left: 1%;
    margin: 2% 7%;
    border-bottom: solid gray 0.2vw;
    list-style: square;
  `;
  const Listbox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: whitesmoke;
  `;
  const Trash = styled.img`
    width: 2%;
    height: 3%;
    padding-top: 1.5%;
  `;
  const List = styled.div` width: 100%; display: flex;`;

export default class ToDo extends React.Component {
  
  state = { task: "", list: [] };
  handleChange = (ev) => { this.setState({ task: ev.target.value }); };
  add = () => {
    let { task, list } = this.state;
    if (task !== "") { this.setState({ list: list.concat({ list: task, id: Date.now() }), task: "" }); }};
  clear = (id) => {
    let { list } = this.state;
    this.setState({
      list: list.filter((item) => item.id !== id),
    });
  };
  del = () => {
    this.setState({
      task: "",
    });
  };
  render() {
    let { task, list } = this.state;
    return (
      <Main>
        <Rod></Rod>
        <Boxtitle>
          <Title>Lista de Tarefas</Title>
          <Data>
            <input type="date"/>
          </Data>
        </Boxtitle>
        <Listbox>
          <Newtesk>
            <Del onClick={this.del}>⌦</Del>
            <Task
              value={task}
              onChange={this.handleChange}
              placeholder="Escreva sua Tarefa Aqui!!!"
            />
            <Btn onClick={this.add}>Add Tarefa</Btn>
          </Newtesk>
          {list.map((item) => (
            <ul>
              <List>
                <TaskList>{item.list}</TaskList>
                <Trash onClick={() => this.clear(item.id)} src={trash} />
              </List>
            </ul>
          ))}
        </Listbox>
      </Main>
    );
  }
}



/*

import React from "react";

export default class ToDo extends React.Component{
  state = { task: "", list: [] }

    handChange = e => this.setState({ task: e.target.value });
    add = () => { if(this.state.task !== "")
      {this.setState({ list: this.state.list.concat({ list: this.state.task }), task: ""})}
    }
    trash = id => { this.setState({ list: this.state.list.filter( (item) => item.id !== id )} )}
    clear = () => { this.setState({ task: ""})}
  render(){
    return(
      <>
        <button onClick={this.clear }> clear </button>
        <input type="search" placeholder="Digite suas tarefas... " onChange={this.handChange} value={this.state.task} />
        <button onClick={this.add}> add </button>

        {this.state.list.map(( item ) => (
          <ul>
            <li>{item.list}</li>
            <button onClick={() => this.trash(item.id)}> remove </button>
          </ul>
        )  )}
      </>
    )
  }
}
*/