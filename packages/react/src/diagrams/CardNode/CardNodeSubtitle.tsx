import React from 'react';
import PropTypes from 'prop-types';

// @ts-ignore
import classnames from 'classnames';

// @ts-ignore
import settings from 'carbon-components/src/globals/js/settings';

const { prefix } = settings;
const namespace = `${prefix}--cc--card-node`;

const CardNodeSubtitle = ({ children, className }: any) => {
	const classes = classnames(`${namespace}__subtitle`, {
		[className]: className,
	});

	return <div className={classes}>{children}</div>;
};

export { CardNodeSubtitle };

CardNodeSubtitle.propTypes = {
	/**
	 * Pass in the children that will be rendered within the CardNodeSubtitle
	 */
	children: PropTypes.node,

	/**
	 * Provide an optional class to be applied on the outer element
	 */
	className: PropTypes.string,
};
