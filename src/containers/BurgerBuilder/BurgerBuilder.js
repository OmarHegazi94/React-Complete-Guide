import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliraly'

import Burger from '../../components/Burger/Burger.jsx';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.jsx'
class BurgerBuilder extends Component {

    state = {
        ingredents: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredents} />
                <BuildControls />
            </Aux>
        )
    }
}

export default BurgerBuilder;
