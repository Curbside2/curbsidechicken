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
    options: [],
    title: "",
    price: "",
    flavorOptions: "",
    seafoodOptions: "",
    smallSideOptions: "",
    largeSideOptions: "",
    twoLargeSideOptions: [],
    threeLargeOptions: [],
    beverageOptions: "",
    gallonOptions: "",
    condimentOptions: [],
    dessertOptions: []
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

  handleModalOpen = (title, price, options) => {
    this.setState({open: true});
    this.setState({title: title});
    this.setState({price: price});
    this.setState({options: options});
    // console.log(this.state.open);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    // console.log(event);
    this.setState({
      [name]: value
    });
  };

  handleCondimentChange = event => {
    const value = event.target.value;
    this.state.condimentOptions.push(value);
  };

  handleTwoSidesChange = event => {
    const value = event.target.value;
    this.state.twoLargeSideOptions.push(value);
  };

  handleThreeSidesChange = event => {
    const value = event.target.value;
    this.state.threeLargeSideOptions.push(value);
  };

  handleDessertChange = event => {
    const value = event.target.value;
    this.state.dessertOptions.push(value);
  };

  handleModalClose = () => {
    this.setState({open: false});
    // console.log(this.state.open);
  };

  handleFormSubmit = event => {
    console.log(this.state.flavorOptions);
    console.log(this.state.smallSideOptions);
    console.log(this.state.largeSideOptions);
    console.log(this.state.twoLargeSideOptions);
    console.log(this.state.threeLargeSideOptions);
    console.log(this.state.beverageOptions);
    console.log(this.state.gallonOptions);
    console.log(this.state.dessertOptions);
    console.log(this.state.condimentOptions);
  };

  getFlavorOptions = () => {
    return (
      <div className="menuOptions">
      <div>Choose Flavor</div>
      <RadioButtonGroup onChange={this.handleInputChange} name='flavorOptions'>
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
      <RadioButtonGroup onChange={this.handleInputChange} name='seafoodOptions'>
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
      <RadioButtonGroup onChange={this.handleInputChange} name='smallSideOptions'>
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
      <RadioButtonGroup onChange={this.handleInputChange} name='largeSideOptions'>
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
      <div onChange={this.handleTwoSidesChange} name='twoLargeSideOptions'>
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
        <div>Choose 3 Signature Sides</div>
      <div onChange={this.handleThreeSidesChange} name='threeLargeSideOptions'>
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
      <div onChange={this.handleCondimentChange} name='condimentOptions'>
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
      <div onChange={this.handleDessertChange} name='dessertOptions'>
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
      <RadioButtonGroup onChange={this.handleInputChange} name='beverageOptions'>
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
      <RadioButtonGroup onChange={this.handleInputChange} name='gallonOptions'>
        <RadioButton value="fruit punch" label="fruit punch" />
        <RadioButton value="lemonade" label="lemonade" />
        <RadioButton value="sweet tea" label="sweet tea" />
      </RadioButtonGroup>
      </div>
    )
  };

    createSubMenu = (options) => {
    return (
      <form>
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
      </form>
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
        onClick={this.handleFormSubmit}
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
                  this.handleModalOpen(tile.title, tile.price, tile.options);
                  console.log(tile.title);
                }}color="red" />
                <Dialog 
                  title={`${this.state.title} $${this.state.price}`}
                  modal= {true}
                  open={this.state.open}
                  actions={this.actions}
                  // autoScrollBodyContent={true}
                >

                  { this.createSubMenu(this.state.options)}
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