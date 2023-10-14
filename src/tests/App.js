import React, {Component} from 'react';
import List from './components/List.js';
import Form from './components/Form.js';
import './css/style.min.css';

class App extends Component {
    constructor()
    {
        super();

        this.state = {
            reviews: [
                {
                    rating: 3,
                    name: 'Danny van Holten',
                    review: 'Curabitur blandit mollis lacus. Curabitur suscipit suscipit tellus. Phasellus tempus.\n\n Quisque rutrum. Nulla sit amet est. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.',
                    date: new Date(new Date().setDate(new Date().getDate() - 10))
                },
                {
                    rating: 4,
                    name: 'Max Verstappen',
                    review: 'Curabitur blandit mollis lacus. Curabitur suscipit suscipit tellus. Phasellus tempus.\n\n Quisque rutrum. Nulla sit amet est. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.',
                    date: new Date()
                }
            ],
            validation: ''
        };

        this.submitForm = this.submitForm.bind(this);
    }

    componentWillMount()
    {
        this.setState({
            ...this.state, averageRating: this.getAverageRating(this.state.reviews)
        });
    }

    render()
    {
        return (
            <div className="bg-light-gray global-padding-bottom">
                <section className="reviews">

                    <header className="hero bg-black text-color-white global-padding-vertical overlay">
                        <div className="area align-center text-center row">
                            <h1 className="small-12 medium-6 columns">
                                <span className="font-weight-regular">Assessment</span><br />
                                <span className="font-size-xxlarge text-uppercase">WEHKAMP</span>
                            </h1>
                        </div>
                    </header>

                    <div className="row align-center content-margin-top-negative">
                        <div className="small-12 medium-8 large-6 columns">
                            <div className="content-padding bg-white area">

                                <p className="font-size-medium">
                                    Onze collega's waarderen dit assessment met een&nbsp;
                                    <strong className="text-color-primary">{this.state.averageRating}</strong>
                                </p>

                                {this.renderList()}
                            </div>
                            {this.renderForm()}
                        </div>
                    </div>


                </section>
            </div>

        );
    }

    renderList()
    {
        return <List reviews={this.state.reviews}/>;
    }

    renderForm()
    {
        return <Form submitForm={this.submitForm} validation={this.state.validation}/>;
    }

    submitForm(event)
    {
        event.preventDefault();
        const reviews = this.state.reviews.slice();

        if(event.target.rating.value === '' || event.target.name.value === '' || event.target.review.value === '') {
            this.setState({
                ...this.state,
                validation: <div className="validation">Niet alle velden zijn ingevuld</div>
            });

            return;
        }

        this.setState({
            ...this.state,
            validation: ''
        });

        reviews.push({
            rating: parseInt(event.target.rating.value),
            name: event.target.name.value,
            review: event.target.review.value,
            date: new Date()
        });

        this.setState({
            ...this.state,
            reviews: reviews,
            averageRating: this.getAverageRating(reviews),
            validation: ''
        });
    }

    getAverageRating(reviews)
    {
        var totalRating = 0;

        reviews.map(function (review)
        {
            totalRating = totalRating + review.rating;
        });

        return Math.round(totalRating / reviews.length * 2 * 10) / 10;
    }
}

export default App;
