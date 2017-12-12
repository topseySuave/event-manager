import React, { Component } from 'react';
import Nav from './bodyComponents/headNav/nav'
import IndexEventCardHolder from './bodyComponents/eventsCard/indexEventsCard'
import CallToAction from './bodyComponents/footer/callToAction'
import FloatingActionButton from './bodyComponents/floatingActionButton/FloatingActionButton'
import Footer from './bodyComponents/footer/footer'
import Modals from './modals'

class App extends Component {
  render() {
    return (
        <div>
            <div className="body__holdr">
                <Nav />
                <IndexEventCardHolder />
                <CallToAction />
                <FloatingActionButton />
                <Footer />
            </div>

            <Modals />
        </div>
    );
  }
}

export default App;
