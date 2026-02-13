import React from 'react';
import './skeleton.css';

const Skeleton = () => {
    return (
        <section className="skeleton-section container">
            <div className="skeleton-title skeleton-shimmer"></div>
            <div className="skeleton-subtitle skeleton-shimmer"></div>

            <div className="skeleton-grid">
                <div className="skeleton-card skeleton-shimmer"></div>
                <div className="skeleton-card skeleton-shimmer"></div>
                <div className="skeleton-card skeleton-shimmer"></div>
            </div>
        </section>
    );
};

export default Skeleton;
