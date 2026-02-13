import React from 'react';
import icons from '../../utils/icons';

const Icon = ({ name, className = '', style = {}, ...props }) => {
    const iconSvg = icons[name];

    if (!iconSvg) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    return (
        <span
            className={className}
            style={{ display: 'inline-block', ...style }}
            dangerouslySetInnerHTML={{ __html: iconSvg }}
            {...props}
        />
    );
};

export default Icon;
