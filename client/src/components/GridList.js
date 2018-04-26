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
    img: './Screenshots/2pcCombo.PNG',
    title: '2pc Chicken'
  },
  {
    img: './Screenshots/3pcMildDinner.PNG',
    title: '3pc Chicken'
  },
  {
    img: './Screenshots/3pcSpicyDinner.PNG',
    title: '4pc Chicken'
  },
  {
    img: './Screenshots/3pcTenderDinner.PNG',
    title: '3pc Tenders'
  },
  {
    img: './Screenshots/5pctendercombo.PNG',
    title: '5pc Tenders'
  },
  {
    img: './Screenshots/chickentenderpoboy.PNG',
    title: 'Chicken Po\' Boy'
  },
  {
    img: './Screenshots/fishdinner.PNG',
    title: '3pc Cajun Fish'
  },
  {
    img: './Screenshots/popcornshrimpcloseup.PNG',
    title: '1/4lb. Popcorn Shrimp'
  },
  {
    img: './Screenshots/fishshrimpdinner.PNG',
    title: 'Fish & Shrimp'
  },
  {
    img: './Screenshots/shrimpsandwich.PNG',
    title: 'Seafood Po\' Boy'
  },
  {
    img: './Screenshots/8pcfamily.PNG',
    title: '8pc Chicken'
  },  
  {
    img: './Screenshots/12piecefamilymeal.jpg',
    title: '12pc Chicken'
  },
  {
    img: './Screenshots/20piecesofchicken.jpg',
    title: '16pc Chicken'
  },
  {
    img: './Screenshots/20piecesofchicken.jpg',
    title: '20pc Chicken'
  },
  {
    img: './Screenshots/20piecesofchicken.jpg',
    title: '24pc Chicken'
  },
  {
    img: './Screenshots/20piecesofchicken.jpg',
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
          <img src={tile.img} alt='img' className='imgSize'/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default Grid;