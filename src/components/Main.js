import React, {Component} from 'react';
import Title from './Title';
import List from './List';

export class Main extends Component {
    render() {
        return(
            <div>
                <Title />
                <List tasks={ ['Wash vessels', 'Sweep floor', 'Mop floor']} />
                <List tasks={['Clean room', 'Wash Cloths', 'Dry cloths']} />
                <List tasks={['Buy vegetables', 'Cook Dinner', 'Wash vessels']} />
            </div>
        );
    }
}


export default Main