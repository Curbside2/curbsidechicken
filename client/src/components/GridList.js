import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import VerticalLinearStepper from './Steps.js';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class Grid extends Component {

  state = {
    open: false
  };

  styles = {
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

  handleModalOpen = () => {
    this.setState({open: true});
    console.log(this.state.open);
  };

  handleModalClose = () => {
    this.setState({open: false});
    console.log(this.state.open);
  };

  tilesData = [
    {
      id: 2,
      img: './Screenshots/2pcCombo.PNG',
      title: '2pc Chicken'
    },
    {
      id: 3,
      img: './Screenshots/3pcMildDinner.PNG',
      title: '3pc Chicken'
    },
    {
      id: 4,
      img: './Screenshots/3pcSpicyDinner.PNG',
      title: '4pc Chicken'
    },
    {
      id: 5,
      img: './Screenshots/3pcTenderDinner.PNG',
      title: '3pc Tenders'
    },
    {
      id: 6, 
      img: './Screenshots/5pctendercombo.PNG',
      title: '5pc Tenders'
    },
    {
      id: 7, 
      img: './Screenshots/chickentenderpoboy.PNG',
      title: 'Chicken Po\' Boy'
    },
    {
      id: 8, 
      img: './Screenshots/fishdinner.PNG',
      title: '3pc Cajun Fish'
    },
    {
      id: 9,
      img: './Screenshots/popcornshrimpcloseup.PNG',
      title: '1/4lb. Popcorn Shrimp'
    },
    {
      id: 10,
      img: './Screenshots/fishshrimpdinner.PNG',
      title: 'Fish & Shrimp'
    },
    {
      id: 11,
      img: './Screenshots/shrimpsandwich.PNG',
      title: 'Seafood Po\' Boy'
    },
    {
      id: 12,
      img: './Screenshots/8pcfamily.PNG',
      title: '8pc Chicken'
    },  
    {
      id: 13,
      img: './Screenshots/12piecefamilymeal.jpg',
      title: '12pc Chicken'
    },
    {
      id: 14,
      img: './Screenshots/20piecesofchicken.jpg',
      title: '16pc Chicken'
    },
    {
      id: 15,
      img: './Screenshots/20piecesofchicken.jpg',
      title: '20pc Chicken'
    },
    {
      id: 16,
      img: './Screenshots/20piecesofchicken.jpg',
      title: '24pc Chicken'
    },
    {
      id: 17,
      img: './Screenshots/20piecesofchicken.jpg',
      title: '30pc Chicken'
    }
  ];

  actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleModalClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        // disabled={true}
        onClick={this.handleModalClose}
      />,
    ];

  /**
   * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
   */

  // const Grid = (props) => 
  render() {

    const radios = [];
    for (let i=0; i<5; i++) {
      radios.push(
          <RadioButton 
            key={i}
            value={`value${i+1}`}
            label={`Option ${i+1}`}
          />
        )
    };

    return (
      <div style={this.styles.root}>
        <GridList
          cellHeight={180}
          style={this.styles.gridList}
        >
          {
            this.tilesData.map((tile,index) => (
            <GridTile
              key={tile.img + index}
              title={tile.title}
              actionIcon={<IconButton>}>
                <MoreVertIcon onClick={()=>{
                  this.handleModalOpen()
                  console.log(this.tilesData[index].title);
                }}color="red" />
                <Dialog 
                  title=""
                  modal= {true}
                  open={this.state.open}
                  actions={this.actions}
                  autoScrollBodyContent={true}
                >
                  <RadioButtonGroup name='menuOptions'>
                    {radios}
                  </RadioButtonGroup>
                </Dialog>
              </IconButton>
            }
            >
              <img src={tile.img} alt='img' className='imgSize'/>
            </GridTile>
          ))}
        </GridList>
      </div>
    );  
  }
}


export default Grid