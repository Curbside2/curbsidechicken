import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import VerticalLinearStepper from './Steps.js';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import tilesData from './tilesData.json';
import "./GridList.css"

class Grid extends Component {

  state = {
    open: false,
    tilesData: tilesData,
    title: "",
    price: ""
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

  handleModalOpen = (title, price) => {
    this.setState({open: true});
    this.setState({title: title});
    this.setState({price: price});
    console.log(this.state.open);
  };

  handleModalClose = () => {
    this.setState({open: false});
    console.log(this.state.open);
  };

  getFlavorOptions = () => {
    return (
      <div className="menuOptions">
      <div>Choose Flavor</div>
      <RadioButtonGroup name='flavorOptions'>
        <RadioButton value="mild" label="mild" />
        <RadioButton value="spicy" label="spicy" />
        <RadioButton value="mixed" label="mixed" />
      </RadioButtonGroup>
      </div>
    )
  };


  getSeafoodOptions = () => {
    return (
      <div className="menuOptions">
      <div>Seafood Options</div>
      <RadioButtonGroup name='seafoodOptions'>
        <RadioButton value="fish" label="fish" />
        <RadioButton value="shrimp" label="shrimp" />
      </RadioButtonGroup>
      </div>
    )
  };
  
  getSmallSideOptions = () => {
      return (
        <div className="menuOptions">
        <div>Choose Signature Side</div>
      <RadioButtonGroup name='smallSideOptions'>
        <RadioButton value="redbeansandrice" label="red beans and rice" />
        <RadioButton value="mashedpotatoesandgravy" label="mashed potatoes and gravy" />
        <RadioButton value="macaroniandcheese" label="macaroni and cheese" />
        <RadioButton value="cajunrice" label="cajun rice" />
        <RadioButton value="greenbeans" label="green beans" />
        <RadioButton value="coleslaw" label="cole slaw" />
        <RadioButton value="cajunfries" label="cajun fries" />
        <RadioButton value="cornonthecob" label="corn on the cob" />
      </RadioButtonGroup>
      </div>
    )
  };
  
  getLargeSideOptions = () => {
      return (
        <div className="menuOptions">
        <div>Choose Signature Side</div>
      <RadioButtonGroup name='largeSideOptions'>
        <RadioButton value="redbeansandrice" label="red beans and rice" />
        <RadioButton value="mashedpotatoesandgravy" label="mashed potatoes and gravy" />
        <RadioButton value="macaroniandcheese" label="macaroni and cheese" />
        <RadioButton value="cajunrice" label="cajun rice" />
        <RadioButton value="greenbeans" label="green beans" />
        <RadioButton value="coleslaw" label="cole slaw" />
        <RadioButton value="cajunfries" label="cajun fries" />
        <RadioButton value="cornonthecob" label="corn on the cob" />
      </RadioButtonGroup>
      </div>
    )
  };
  
  getTwoLargeSideOptions = () => {
      return (
        <div className="menuOptions">
        <div>Choose 2 Signature Sides</div>
      <div name='twoLargeSideOptions'>
        <Checkbox value="redbeansandrice" label="red beans and rice" />
        <Checkbox value="mashedpotatoesandgravy" label="mashed potatoes and gravy" />
        <Checkbox value="macaroniandcheese" label="macaroni and cheese" />
        <Checkbox value="cajunrice" label="cajun rice" />
        <Checkbox value="greenbeans" label="green beans" />
        <Checkbox value="coleslaw" label="cole slaw" />
        <Checkbox value="cajunfries" label="cajun fries" />
        <Checkbox value="cornonthecob" label="corn on the cob" />
      </div>
      </div>
    )
  };
  
  getThreeLargeSideOptions = () => {
      return (
        <div className="menuOptions">
        <div>Choose 3 Signature Side</div>
      <div name='threeLargeSideOptions'>
        <Checkbox value="redbeansandrice" label="red beans and rice" />
        <Checkbox value="mashedpotatoesandgravy" label="mashed potatoes and gravy" />
        <Checkbox value="macaroniandcheese" label="macaroni and cheese" />
        <Checkbox value="cajunrice" label="cajun rice" />
        <Checkbox value="greenbeans" label="green beans" />
        <Checkbox value="coleslaw" label="cole slaw" />
        <Checkbox value="cajunfries" label="cajun fries" />
        <Checkbox value="cornonthecob" label="corn on the cob" />
      </div>
      </div>
    )
  };
  
  getCondimentOptions = () => {
      return (
        <div className="menuOptions">
        <div>Condiments</div>
      <div name='condimentOptions'>
        <Checkbox value="ketchup" label="ketchup" />
        <Checkbox value="hotsauce" label="hot sauce" />
        <Checkbox value="salt" label="salt" />
        <Checkbox value="pepper" label="pepper" />
        <Checkbox value="honeysauce" label="honey sauce" />
        <Checkbox value="strawberryjam" label="strawberry jam" />
        <Checkbox value="grapejelly" label="grape jelly" />
      </div>
      </div>
    )
  };
  
  getDessertOptions = () => {
      return (
        <div className="menuOptions">
        <div>Desserts</div>
      <div name='dessertOptions'>
        <Checkbox value="applepie" label="apple pie" />
        <Checkbox value="pecanpie" label="pecan pie" />
        <Checkbox value="mardigrascheesecake" label="mardi gras cheesecake" />
      </div>
      </div>
    )
  };
  
  getBeverageOptions = () => {
    return (
      <div className="menuOptions">
      <div>Beverages</div>
      <RadioButtonGroup name='beverageOptions'>
        <RadioButton value="coke" label="coke" />
        <RadioButton value="sprite" label="sprite" />
        <RadioButton value="diet coke" label="diet coke" />
        <RadioButton value="ginger ale" label="ginger ale" />
        <RadioButton value="fruit punch" label="fruit punch" />
        <RadioButton value="lemonade" label="lemonade" />
        <RadioButton value="sweet tea" label="sweet tea" />
      </RadioButtonGroup>
      </div>
    )
  };
  
  getGallonOptions = () => {
    return (
      <div className="menuOptions">
      <div>Gallons</div>
      <RadioButtonGroup name='gallonOptions'>
        <RadioButton value="fruit punch" label="fruit punch" />
        <RadioButton value="lemonade" label="lemonade" />
        <RadioButton value="sweet tea" label="sweet tea" />
      </RadioButtonGroup>
      </div>
    )
  };

    createSubMenu = (options) => {
    return (
      <div>
      { options.flavor ? this.getFlavorOptions() : null }
      { options.seafood ? this.getSeafoodOptions() : null }
      { options.beverages ? this.getBeverageOptions() : null }
      { options.gallons ? this.getGallonOptions() : null }
      { options.smallsides ? this.getSmallSideOptions() : null }
      { options.largesides ? this.getLargeSideOptions() : null }
      { options.twolargesides ? this.getTwoLargeSideOptions() : null }
      { options.threelargesides ? this.getThreeLargeSideOptions() : null }
      { options.dessert ? this.getDessertOptions() : null }
      { options.condiments ? this.getCondimentOptions() : null }
      </div>
    )
  };

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

    // const radios = [];
    // for (let i=0; i<5; i++) {
    //   radios.push(
    //       <RadioButton 
    //         key={i}
    //         value={`value${i+1}`}
    //         label={`Option ${i+1}`}
    //       />
        // )
    // };

    return (
      <div style={this.styles.root}>
        <GridList
          cellHeight={180}
          style={this.styles.gridList}
          cols={1}
        >
          {
            this.state.tilesData.map((tile) => (
            <GridTile
              key={tile.id}
              title={tile.title}
              // cols={2}
              actionIcon={<IconButton>}>
                <MoreVertIcon onClick={()=>{
                  this.handleModalOpen(tile.title, tile.price);
                  console.log(tile.title);
                }}color="red" />
                <Dialog 
                  title={`${this.state.title} $${this.state.price}`}
                  modal= {true}
                  open={this.state.open}
                  actions={this.actions}
                  // autoScrollBodyContent={true}
                >

                  { this.createSubMenu(tile.options)}
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