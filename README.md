# react-alpha-jump
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
    width: 10
  }}
/>
```
## Documentation
### AlphaJumper Component Properties
| Property       | Type          | Default             |
| :------------- |:------------- | :------------------ |
| alphabet       | array         | ['A' ,'B' ,... 'Z'] |
| color          | string        | "white"             |
| onTouch        | function      | noop                |
| style          | object        | {}                  |


