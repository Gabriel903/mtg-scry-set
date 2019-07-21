import React from 'react'
import { Link } from 'react-router-dom'

export default class SearchCard extends React.Component {
    constructor() {
        super()
        this.state={
            cardSet: [],
            choosenCardSet: ""
        }
    }

    componentDidMount() {
        fetch('https://api.scryfall.com/sets')
        .then(response => response.json())
        .then(response => {
            response.data.forEach(data => {
                if (data.set_type === "core" || data.set_type === "expansion") {
                    this.setState(prevState => ({
                        cardSet: [...prevState.cardSet, data.name]
                    }))
                }
            });
        })
    }

    cardSelectDisplay = () => {
        const { cardSet } = this.state
        return cardSet.map(function (cardSet) {
            return (
                <option value={cardSet}>{cardSet}</option>
            )
        })
    }

    handleChange = (e) => {
        this.setState({ choosenCardSet: e.target.value })
        return (
            <Link to={`/setChoosen/${this.state.choosenCardSet}`}></Link>
        )
    }


    render() {

        return (
            <React.Fragment>
                <label>CardSearch</label>
                <select onChange={this.handleChange}>
                    {this.cardSelectDisplay()}
                </select>
            </React.Fragment>
        )
    }
}