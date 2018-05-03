import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const cars = [
  'Honda Civic',
  'Honda Accord',
  'Toyota Camry',
  'Jeep Wrangler',
  'Ford Fusion',
  'Hyundai Elantra',
  'Nissan Sentra',
  'Nissan Maxima',
  'Nissan Altima',
];

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};

/**
 * Provide props to be passed into the Menu component.
 */
export default class carInput extends Component {
  render() {
    return (
      <div>
        <AutoComplete
          hintText="Example: Honda Civic"
          dataSource={cars}
          menuProps={menuProps}
        />
      </div>
    );
  }
}