import React from 'react';

function ExperienceCard({ item }) {
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-start flex-wrap">
                    <div>
                        <h5 className="card-title mb-0" style={{ fontWeight: '700' }}>{item.title}</h5>
                        <h6 className="text-primary mt-1">{item.company}</h6>
                    </div>
                    <div className="text-right">
                        <span className="badge badge-secondary" style={{ fontSize: '0.85rem', padding: '0.4rem 0.7rem' }}>
                            {item.period}
                        </span>
                        <div className="text-muted mt-1" style={{ fontSize: '0.85rem' }}>
                            <i>📍 {item.location}</i>
                        </div>
                    </div>
                </div>
                <div className="mt-3" style={{ fontSize: '0.95rem' }}>
                    {item.description.map((point, index) =>
                        point.endsWith(':') ? (
                            <p key={index} className="mb-1 mt-3" style={{ fontWeight: '600', color: '#495057' }}>{point}</p>
                        ) : (
                            <ul key={index} className="pl-3 mb-0"><li className="mb-1">{point}</li></ul>
                        )
                    )}
                </div>
                <div className="mt-3">
                    {item.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="badge badge-pill badge-info mr-1 mb-1"
                            style={{ fontSize: '0.78rem', padding: '0.35rem 0.6rem' }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;
