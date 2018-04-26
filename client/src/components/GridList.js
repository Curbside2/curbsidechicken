import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    marginTop: 20,
    marginBottom: 20,
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'images/grid-list/Screenshots/2pcCombo.PNG',
    title: '2pc Chicken'
  },
  {
    img: 'images/grid-list/Screenshots/3pcMildDinner.PNG',
    title: '3pc Chicken'
  },
  {
    img: 'images/grid-list/Screenshots/3pcSpicyDinner.PNG',
    title: '4pc Chicken'
  },
  {
    img: 'images/grid-list/Screenshots/3pcTenderDinner.PNG',
    title: '3pc Tenders'
  },
  {
    img: './images/grid-list/Screenshots/5pctendercombos.PNG',
    title: '5pc Tenders'
  },
  {
    img: 'images/grid-list/Screenshots/chickentenderpoboy.PNG',
    title: 'Chicken Po\' Boy'
  },
  {
    img: 'images/grid-list/Screenshots/fishdinner.PNG',
    title: '3pc Cajun Fish'
  },
  {
    img: './images/grid-list/Screenshots/popcornshrimpcloseup.PNG',
    title: '1/4lb. Popcorn Shrimp'
  },
  {
    img: 'images/grid-list/Screenshots/fishshrimp.PNG',
    title: 'Fish & Shrimp'
  },
  {
    img: 'images/grid-list/Screenshots/shrimpsandwich.PNG',
    title: 'Seafood Po\' Boy'
  },
  {
    img: 'images/grid-list/Screenshots/8pcfamily.PNG',
    title: '8pc Chicken'
  },  
  {
    img: 'images/grid-list/Screenshots/12piecefamilymeal.PNG',
    title: '12pc Chicken'
  },
  {
    img: 'images/grid-list/Screenshots/20piecesofchicken.PNG',
    title: '16pc Chicken'
  },
  {
    img: 'images/grid-list/Screenshots/20piecesofchicken.PNG',
    title: '20pc Chicken'
  },
  {
    img: 'images/grid-list/Screenshots/20piecesofchicken.PNG',
    title: '24pc Chicken'
  },
  {
    img: 'images/grid-list/Screenshots/20piecesofchicken.PNG',
    title: '30pc Chicken'
  }
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Grid = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><MoreVertIcon color="black" /></IconButton>}
        >
          <img src={tile.img} alt='img' />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Grid;