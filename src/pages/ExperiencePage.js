import React from 'react';
import Hero from '../components/Hero';
import ExperienceCard from '../components/ExperienceCard';

class ExperiencePage extends React.Component {

    componentDidMount() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div>
                <Hero title={this.props.title} />
                <div className="container text-left card" style={{ padding: '3rem' }}>
                    <div className="row">
                        <div className="col-12">
                            {this.props.experience.map(item => (
                                <ExperienceCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExperiencePage;
