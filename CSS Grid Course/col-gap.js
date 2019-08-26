import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'container': {
    'display': 'grid',
    'gridTemplateColumns': 'auto auto auto auto',
    // grid-column-gap: 10px;
    grid-row-gap: 25px;
    'gridGap': '25px 10px',
    'backgroundColor': '#3e2723',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'borderRadius': '10px'
  },
  'item': {
    'backgroundColor': '#80cbc4',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }],
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'textAlign': 'center'
  }
});
