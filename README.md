# react-alpha-jump
[![NPM](https://nodei.co/npm/react-alpha-jump.png?mini=true)](https://npmjs.org/package/react-alpha-jump)
## Getting Started
Install `react-alpha-jump` using npm.
```
npm install react-alpha-jump --save
```
Import the `AlphaJumper` component.
```
import { AlphaJumper } from 'react-alpha-jump';
```
Use the `AlphaJumper` component. For example:
```
<AlphaJumper
  color="blue"
  onTouch={char => console.log(char)}
  style={{
    bottom: 5,
    position: 'fixed',
    right: 7.5,
    top: 5,
    width: 10,
  }}
/>
```
## Documentation
### AlphaJumper Component Properties
| Property       | Type          | Default             | Description                                                      |
| :------------- |:------------- | :------------------ | :-------------                                                   |
| alphabet       | array         | ['A', 'B', ..., 'Z']| Defines the characters to show.                                  |
| color          | string        | "white"             | Determines the color of the characters.                          |
| onTouch        | function      | noop                | Called when a character is touched. Receives character as param. |                
| style          | object        | {}                  | Overrides styles of alphabet list container.                     |


