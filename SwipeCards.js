// SwipeCards.js
'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
import Modal from "react-native-modal";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.card]}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    )
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        points: 0,
        cards: [
            {text: 'You should eat turtles to live longer', correctAnswer: false, explaination: 'Turtles doesnt give you a longer life, its an old myth' },
            {text: 'Sharks kill more people than cows per year', correctAnswer: false, explaination: 'Around 5 people die from shark attacks every year while only in the US, over 20 people die per year' },
            {text: 'Sharks can swim without fins', correctAnswer: false, explaination: 'They sink and die without their fins, and they dont grow out if they loose them' },
            {text: 'Green sea turtles have a serrated looking shells', correctAnswer: false, explaination: 'It is Hawksbill sea turtles that have serrated looking shells' },
            {text: 'Juvenile turtles are vegans', correctAnswer: false, explaination: 'Actually juvenile Green sea turtle eat small animals floating around' },
            {text: 'Hawksbill turtles got their name from their beak-like mouth', correctAnswer: true, explaination: 'Hawksbill turtle mouth are beak-like' },
            {text: 'Green sea turtles work as a lawnmover', correctAnswer: true, explaination: 'They keep seagrass short and alive' },
            {text: 'Blue sharks work as laywers', correctAnswer: false, explaination: 'We hope not' },
            {text: 'You should eat turtles to live longer', correctAnswer: false, explaination: 'Turtles doesnt give you a longer life, its an old myth' },
            {text: 'Sharks kill more people than cows per year', correctAnswer: false, explaination: 'Around 5 people die from shark attacks every year while only in the US, over 20 people die per year' },
            {text: 'Sharks can swim without fins', correctAnswer: false, explaination: 'They sink and die without their fins' },
            {text: 'Fishes doesnt feel pain', correctAnswer: false, explaination: 'Fishes feel pain just like you' }
        ]
    };
  }

  givePoint() {
    this.setState({
        points: this.state.points + 1
    });
  }

  handleYup (card) {
    if (!card.correctAnswer) {
        this.setState({
            explaination: card.explaination,
            isModalVisible: true
        });
    }
    else {
        this.givePoint();
        this.setState({
            explaination: null
        });
    }
  }
  handleNope (card) {
    if (card.correctAnswer) {
        this.setState({
            explaination: card.explaination,
            isModalVisible: true
        });
    }
    else {
        this.givePoint();
        this.setState({
            explaination: null
        });
    }
  }

    _toggleModal () {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }

  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
        <View>
            <Modal isVisible={this.state.isModalVisible}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={[styles.card, { borderTopColor: '#dc4d4d', borderTopWidth: 10 }]}>
                        <Text style={{ fontSize: 22, marginBottom: 10, marginTop: 10 }}>Incorrect</Text>
                        <Text style={{ fontSize: 18, marginBottom: 20 }}>{this.state.explaination}</Text>
                        <TouchableOpacity onPress={this._toggleModal.bind(this)} style={styles.button}>
                            <Text style={styles.buttonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Text style={styles.points}>{this.state.points}</Text>
            <SwipeCards
                cards={this.state.cards}
                renderCard={(cardData) => <Card {...cardData} />}
                renderNoMoreCards={() => <NoMoreCards />}
                handleYup={this.handleYup.bind(this)}
                handleNope={this.handleNope.bind(this)}
                showMaybe={false}
                yupText={'True'}
                yupStyle={{ borderColor: '#cee086', backgroundColor: '#cee086' }}
                yupTextStyle={{ color: 'white'}}
                nopeText={'False'}
                nopeStyle={{ borderColor: '#e08686', backgroundColor: '#e08686' }}
                nopeTextStyle={{ color: 'white'}}
            />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 240,
    padding: 10,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    color: '#86D2E0'
  },
  points: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 40,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2
  },
  button: {
    padding: 15,
    backgroundColor: '#86D2E0',
    borderRadius: 3
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  noMoreCardsText: {
    fontSize: 22,
    color: 'white'
  }
})