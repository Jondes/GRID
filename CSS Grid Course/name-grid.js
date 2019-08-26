import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'container': {
    'display': 'grid',
    'gridTemplateAreas': ''header header header header header header'
        'menu main main main right right'
        'menu footer footer footer footer footer''
  },
  'item1': {
    'gridArea': 'header'
  },
  'item2': {
    'gridArea': 'menu'
  },
  'item3': {
    'gridArea': 'main'
  },
  'item4': {
    'gridArea': 'right'
  },
  'item5': {
    'gridArea': 'footer'
  },
  'container>div': {
    'backgroundColor': '#80cbc4',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 40 }],
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'textAlign': 'center'
  },
  // .item1,
.item6 {
    grid-column-start: 1;
    grid-column-end: 3;
}
  'item1': {
    'gridColumn': '1 / 3'
  },
  'item6': {
    'gridColumn': '1 / 3'
  }
});
