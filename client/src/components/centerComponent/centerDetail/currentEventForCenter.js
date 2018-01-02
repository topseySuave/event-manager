import React, {Component} from 'react';
import EventCard from '../../bodyComponents/eventsCard/eventCard'

class CurrentEventForCenter extends Component {
    render() {
        return (
            <div className="col s12 l4">
                <p><h6 className="bold">Events hosted by this center</h6></p>
                <section>
                    <div className="row">
                        <div className="col s12 l12">
                            <EventCard />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default CurrentEventForCenter;