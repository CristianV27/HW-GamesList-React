function Game(props) {
    return (
      <div className="game">
        {props.title ? (<h1>{props.title}</h1>) : ''}
        <p>{props.description}</p>
      </div>
    )
  }
  
  class GamesList extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
        games: []
      }
    }
  
    componentDidMount() {
      fetch("https://games-world.herokuapp.com/games/")
        .then(response => {return response.json()})
        .then(games => {this.setState({games: games})
        })
    }
  
    render() {
      return (
        <div>
          <h2>Lista Games</h2>
          {this.state.games.map((gameData) => {
            return (<Game
              title={gameData.title}
              description={gameData.description}
            />)
          })}
        </div>
      )
    }
  }
  
  
  class App extends React.Component {
  
    render() {
      return (
        <div>
          <GamesList/>
        </div>
      )
    }
  }
  
  
  const appDOM = document.getElementById('container');
  ReactDOM.render(<App />, appDOM)