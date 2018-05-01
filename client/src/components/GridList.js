import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import VerticalLinearStepper from './Steps.js';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Checkbox, CheckboxGroup} from 'material-ui/Checkbox';
  



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

  getFlavorOptions = () => {
    return (
      <RadioButtonGroup name='flavorOptions'>
        <RadioButton value="mild" label="mild" />
        <RadioButton value="spicy" label="spicy" />
        <RadioButton value="mixed" label="mixed" />
      </RadioButtonGroup>
    )
  };


  getSeafoodOptions = () => {
    return (
      <RadioButtonGroup name='seafoodOptions'>
        <RadioButton value="fish" label="fish" />
        <RadioButton value="shrimp" label="shrimp" />
      </RadioButtonGroup>
    )
  };
  
  getSmallSideOptions = () => {
      return (
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
    )
  };
  
  getLargeSideOptions = () => {
      return (
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
    )
  };
  
  getTwoLargeSideOptions = () => {
      return (
      <CheckboxGroup name='twoLargeSideOptions'>
        <Checkbox value="redbeansandrice" label="red beans and rice" />
        <Checkbox value="mashedpotatoesandgravy" label="mashed potatoes and gravy" />
        <Checkbox value="macaroniandcheese" label="macaroni and cheese" />
        <Checkbox value="cajunrice" label="cajun rice" />
        <Checkbox value="greenbeans" label="green beans" />
        <Checkbox value="coleslaw" label="cole slaw" />
        <Checkbox value="cajunfries" label="cajun fries" />
        <Checkbox value="cornonthecob" label="corn on the cob" />
      </CheckboxGroup>
    )
  };
  
  getThreeLargeSideOptions = () => {
      return (
      <CheckboxGroup name='threeLargeSideOptions'>
        <Checkbox value="redbeansandrice" label="red beans and rice" />
        <Checkbox value="mashedpotatoesandgravy" label="mashed potatoes and gravy" />
        <Checkbox value="macaroniandcheese" label="macaroni and cheese" />
        <Checkbox value="cajunrice" label="cajun rice" />
        <Checkbox value="greenbeans" label="green beans" />
        <Checkbox value="coleslaw" label="cole slaw" />
        <Checkbox value="cajunfries" label="cajun fries" />
        <Checkbox value="cornonthecob" label="corn on the cob" />
      </CheckboxGroup>
    )
  };
  
  getCondimentOptions = () => {
      return (
      <CheckboxGroup name='condimentOptions'>
        <Checkbox value="ketchup" label="ketchup" />
        <Checkbox value="hotsauce" label="hot sauce" />
        <Checkbox value="salt" label="salt" />
        <Checkbox value="pepper" label="pepper" />
        <Checkbox value="honeysauce" label="honey sauce" />
        <Checkbox value="strawberryjam" label="strawberry jam" />
        <Checkbox value="grapejelly" label="grape jelly" />
      </CheckboxGroup>
    )
  };
  
  getDessertOptions = () => {
      return (
      <CheckboxGroup name='dessertOptions'>
        <Checkbox value="applepie" label="apple pie" />
        <Checkbox value="pecanpie" label="pecan pie" />
        <Checkbox value="mardigrascheesecake" label="mardi gras cheesecake" />
      </CheckboxGroup>
    )
  };
  
  getBeverageOptions = () => {
    return (
      <RadioButtonGroup name='beverageOptions'>
        <RadioButton value="coke" label="coke" />
        <RadioButton value="sprite" label="sprite" />
        <RadioButton value="diet coke" label="diet coke" />
        <RadioButton value="ginger ale" label="ginger ale" />
        <RadioButton value="fruit punch" label="fruit punch" />
        <RadioButton value="lemonade" label="lemonade" />
        <RadioButton value="sweet tea" label="sweet tea" />
      </RadioButtonGroup>
    )
  };
  
  getGallonOptions = () => {
    return (
      <RadioButtonGroup name='gallonOptions'>
        <RadioButton value="fruit punch" label="fruit punch" />
        <RadioButton value="lemonade" label="lemonade" />
        <RadioButton value="sweet tea" label="sweet tea" />
      </RadioButtonGroup>
    )
  };

  tilesData = [
    {
      id: 2,
      img: './Screenshots/2pcCombo.PNG',
      title: '2pc Chicken',
      options: {
        flavor: true,
        seafood: false,
        beverages: true,
        gallons: false,
        smallsides: true,
        largesides: false,
        twolargesides: false,
        threelargesdes: false,
        dessert: true,
        condiments: true
      }
    },
    {
      id: 3,
      img: './Screenshots/3pcMildDinner.PNG',
      title: '3pc Chicken',
      options: {
        flavor: true,
        seafood: false,
        beverages: true,
        gallons: false,
        smallsides: true,
        largesides: false,
        twolargesides: false,
        threelargesdes: false,
        dessert: true,
        condiments: true
      } 
    },
    {
      id: 4,
      img: './Screenshots/3pcSpicyDinner.PNG',
      title: '4pc Chicken',
      options: {
        flavor: true,
        seafood: false,
        beverages: true,
        gallons: false,
        smallsides: true,
        largesides: false,
        twolargesides: false,
        threelargesdes: false,
        dessert: true,
        condiments: true
      }
    },
    {
      id: 5,
      img: './Screenshots/3pcTenderDinner.PNG',
      title: '3pc Tenders',
      options: {
        flavor: true,
        seafood: false,
        beverages: true,
        gallons: false,
        smallsides: true,
        largesides: false,
        twolargesides: false,
        threelargesdes: false,
        dessert: true,
        condiments: true
      }
    },
    {
      id: 6, 
      img: './Screenshots/5pctendercombo.PNG',
      title: '5pc Tenders',
      options: {
        flavor: true,
        seafood: false,
        beverages: true,
        gallons: false,
        smallsides: true,
        largesides: false,
        twolargesides: false,
        threelargesdes: false,
        dessert: true,
        condiments: true
      }
    },
    {
      id: 7, 
      img: './Screenshots/chickentenderpoboy.PNG',
      title: 'Chicken Po\' Boy',
      options: {
        flavor: true,
        seafood: false,
        beverages: true,
        gallons: false,
        smallsides: true,
        largesides: false,
        twolargesides: false,
        threelargesdes: false,
        dessert: true,
        condiments: true
      }
    },
    {
      id: 8, 
      img: './Screenshots/fishdinner.PNG',
      title: '3pc Cajun Fish',
      options: {
        flavor: false,
        seafood: false,
        beverages: true,
        gallons: false,
        smallsides: true,
        largesides: false,
        twolargesides: false,
        threelargesdes: false,
        dessert: true,
        condiments: true
      }
    },
    {
      id: 9,
      img: './Screenshots/popcornshrimpcloseup.PNG',
      title: '1/4lb. Popcorn Shrimp',
      options: {
        flavor: false,
        seafood: false,
        beverages: true,
        gallons: false,
        smallsides: true,
        largesides: false,
        twolargesides: false,
        threelargesdes: false,
        dessert: true,
        condiments: true
      }
    },
    {
      id: 10,
      img: './Screenshots/fishshrimpdinner.PNG',
      title: 'Fish & Shrimp',
      options: {
        flavor: false,
        seafood: true,
        beverages: true,
        gallons: false,
        smallsides: true,
        largesides: false,
        twolargesides: false,
        threelargesdes: false,
        dessert: true,
        condiments: true
      }
    },
    {
      id: 11,
      img: './Screenshots/shrimpsandwich.PNG',
      title: 'Seafood Po\' Boy'
      options: {
        flavor: false,
        seafood: true,
        beverages: true,
        gallons: false,
        smallsides: true,
        largesides: false,
        twolargesides: false,
        threelargesdes: false,
        dessert: true,
        condiments: true
      }
    },
    {
      id: 12,
      img: './Screenshots/8pcfamily.PNG',
      title: '8pc Chicken',
      options: {
        flavor: true,
        seafood: false,
        beverages: false,
        gallons: true,
        smallsides: false,
        largesides: true,
        twolargesides: false,
        threelargesdes: false,
        dessert: true,
        condiments: true
      }
    },  
    {
      id: 13,
      img: './Screenshots/12piecefamilymeal.jpg',
      title: '12pc Chicken',
      options: {
        flavor: true,
        seafood: false,
        beverages: false,
        gallons: true,
        smallsides: false,
        largesides: false,
        twolargesides: true,
        threelargesdes: false,
        dessert: true,
        condiments: true
      }
    },
    {
      id: 14,
      img: './Screenshots/20piecesofchicken.jpg',
      title: '16pc Chicken',
      options: {
        flavor: true,
        seafood: false,
        beverages: true,
        gallons: false,
        smallsides: true,
        largesides: false,
        twolargesides: false,
        threelargesdes: true,
        dessert: true,
        condiments: true
      }
    },
    {
      id: 15,
      img: './Screenshots/20piecesofchicken.jpg',
      title: '20pc Chicken',
      options: {
        flavor: true,
        seafood: false,
        beverages: true,
        gallons: false,
        smallsides: true,
        largesides: false,
        twolargesides: false,
        threelargesdes: true,
        dessert: true,
        condiments: true
      }
    },
    {
      id: 16,
      img: './Screenshots/20piecesofchicken.jpg',
      title: '24pc Chicken',
      options: {
        flavor: true,
        seafood: false,
        beverages: true,
        gallons: false,
        smallsides: true,
        largesides: false,
        twolargesides: false,
        threelargesdes: true,
        dessert: true,
        condiments: true
      }
    },
    {
      id: 17,
      img: './Screenshots/20piecesofchicken.jpg',
      title: '30pc Chicken',
      options: {
        flavor: true,
        seafood: false,
        beverages: true,
        gallons: false,
        smallsides: true,
        largesides: false,
        twolargesides: false,
        threelargesdes: true,
        dessert: true,
        condiments: true
      }
    }
  ];

    createSubMenu = (options) => {
    return (
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

                  { this.createSubmenu(tile.options)}
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