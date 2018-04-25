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
    img: 'images/grid-list/PopeyesMenu.jpg',
    title: 'Chicken Combos',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tender Combos',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Seafood Combos',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Family Meals',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Beverages',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Signature Sides',
  },
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