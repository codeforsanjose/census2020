import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

// import '../messages/DetailViewContainer';

export default class DetailViewContainer extends Component {
	render() {
		return (
			<div className='main-container'>
				<FormattedMessage
					id="components.DetailViewContainer.hello"
					defaultMessage="Hello world"
					description="Welcome message"
				/>

				<div>
					<FormattedMessage
						id="components.DetailViewContainer.customizedGreeting"
						defaultMessage="Hi {name}, you are {age, number} years old"
						description="Custom welcome message"
						values={{
							name: 'Turner',
							age: 34
						}}
					/>
				</div>
			</div>
		);
	}
}
