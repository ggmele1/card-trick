import React from "react";
import Decks from "./Decks";
import "./App.css";
import {
  Button,
  Container,
  Typography,
  CssBaseline,
  Grid,
} from "@material-ui/core";
import "fontsource-roboto";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      started: false,
      cards: [
        4,
        11,
        12,
        16,
        6,
        10,
        17,
        9,
        13,
        20,
        21,
        5,
        15,
        19,
        18,
        2,
        3,
        7,
        14,
        1,
        8,
      ],

      pile1: [],
      pile2: [],
      pile3: [],
      value: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // this.shuffle()
  }

  reDeal(pile) {
    let cardPile = [];
    let deck1 = [];
    let deck2 = [];
    let deck3 = [];
    const { pile1, pile2, pile3 } = this.state;
    if (pile === "1") {
      cardPile.push(...pile3, ...pile1, ...pile2);
    } else if (pile === "2") {
      cardPile.push(...pile1, ...pile2, ...pile3);
    } else if (pile === "3") {
      cardPile.push(...pile2, ...pile3, ...pile1);
    }
    this.setState((state) => {
      return {
        cards: (state.cards = cardPile),
        count: state.count + 1,
        pile1: deck1,
        pile2: deck2,
        pile3: deck3,
      };
    });
    this.shuffle(cardPile);
    console.log('count', this.state.count)
  }

  gameStarted() {
    this.setState({ started: true });
    this.shuffle();
  }

  handleChange(pile) {
    // this.setState((state) => ({
    //   value: state.value = pile
    // }))

    this.handleSubmit(pile);
  }

  handleSubmit(pile) {
    this.reDeal(pile);
  }

  shuffle(cardPile) {
    let deck = 1;
    let piles1 = [];
    let piles2 = [];
    let piles3 = [];
    let shuffledCards;
    const { cards } = this.state;

    cardPile ? (shuffledCards = cardPile) : (shuffledCards = cards);

    for (var i = 0; i < shuffledCards.length; i++) {
      if (deck === 1) {
        piles1.push(shuffledCards[i]);
      } else if (deck === 2) {
        piles2.push(shuffledCards[i]);
      } else if (deck === 3) {
        piles3.push(shuffledCards[i]);
      }
      if (deck === 3) {
        deck = 1;
      } else {
        deck++;
      }
    }
    this.setState((state) => {
      return {
        pile1: (state.pile1 = piles1),
        pile2: (state.pile2 = piles2),
        pile3: (state.pile3 = piles3),
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline>
          <Container maxWidth="sm">
            <Grid
              className="app"
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <header className="App-header">
                {!this.state.started && (
                  <div className="start">
                    <Grid>
                      <Typography variant="subtitle1" className="subTitleText">
                        This program is capable of guessing the number you
                        choose with 100% accuracy. Try it!
                      </Typography>
                      <Typography
                        className="headerText"
                        variant="h4"
                        align="center"
                      >
                        Pick a number, any number:
                      </Typography>
                      <div className="numbersWrapper">
                        <p className="numbers">{this.state.cards.toString()}</p>
                      </div>
                    </Grid>
                    <Button
                      variant="contained"
                      size="large"
                      color="secondary"
                      onClick={() => this.gameStarted()}
                    >
                      Ready
                    </Button>
                  </div>
                )}
                {this.state.started && this.state.count < 3 && (
                  <div>
                    <Typography
                      className="headerText"
                      variant="h4"
                      align="center"
                    >
                      Click the pile your number is in.
                    </Typography>
                    <Decks
                      handleChange={this.handleChange}
                      cards={this.state.cards}
                      pile={this.state}
                    />
                  </div>
                )}
                {this.state.count === 3 && (
                  <div className="center">
                    <h1>Your card is: {this.state.cards[10]}</h1>
                  </div>
                )}
              </header>
            </Grid>
          </Container>
        </CssBaseline>
      </React.Fragment>
    );
  }
}

export default App;
