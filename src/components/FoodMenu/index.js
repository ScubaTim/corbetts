import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './FoodMenu.scss';


const FoodMenu = () => {
    return (
        <React.Fragment>
            <Container className="containerStyle">
                <div className="text-center">
                    <h1 className="bigText">Menu</h1>
                    <h3 className="my-4">Starters</h3>
                </div>
                <Row xs="1" sm="2" md="4">
                    <Col>
                        <h5>Jumbo Chicken Wings</h5>
                        <h6>(10) $10.50 (20) $17.50</h6>
                        <p>Served with celery and blue cheese. <br />Add $1.50 for grilled Daytona.</p>
                    </Col>
                    <Col>
                        <h5>Wing Sauces:</h5>
                        <p>Mild, Medium, Hot, Killer, Garlic, <br />BBQ, Tangy BBQ, or House. <br />Extra sauce .50</p>
                    </Col>
                    <Col>
                        <h5>Smoked Fish Dip</h5>
                        <h6>$8.55</h6>
                        <p>Served with Jalapenos, Pico, and Crackers.</p>
                    </Col>
                    <Col>
                        <h5>Potato Skins</h5>
                        <h6>$8.55</h6>
                        <p>Your choice of Bacon and Cheese or Chili and Cheese.</p>
                    </Col>
                    <Col>
                        <h5>Chicken Fingers and Fries</h5>
                        <h6>$9.55</h6>
                        <p>Served with Honey Mustard or BBQ sauce.</p>
                    </Col>
                    <Col>
                        <h5>Chicken Quesadilla</h5>
                        <h6>$9.55</h6>
                        <p>Served with Sour Cream and Pico.</p>
                    </Col>
                    <Col>
                        <h5>Nachos and Salsa</h5>
                        <h6>$5.55</h6>
                        <p></p>
                    </Col>
                    <Col>
                        <h5>Nachos and Cheese</h5>
                        <h6>$8.55</h6>
                        <p>Served with Lettuce, Tomato, Sour Cream, and Pico.</p>
                    </Col>
                    <Col>
                        <h5>Chili Cheese Nachos</h5>
                        <h6>$9.75</h6>
                        <p>Served with Lettuce, Tomato, Sour Cream, and Pico.</p>
                    </Col>
                    <Col>
                        <h5>Santa Fe Chicken Eggrolls</h5>
                        <h6>$9.50</h6>
                        <p>Served with Sour Cream and Pico.</p>
                    </Col>
                    <Col>
                        <h5>Fried Mozzarella Sticks</h5>
                        <h6>$6.00</h6>
                        <p>Served with Marinara dipping sauce.</p>
                    </Col>
                    <Col>
                        <h5>Corn Dog Bites</h5>
                        <h6>$6.75</h6>
                        <p>Served with Honey Mustard.</p>
                    </Col>
                    <Col>
                        <h5>Fried Pork Potstickers</h5>
                        <h6>$7.25</h6>
                        <p>Served with Asian sauce.</p>
                    </Col>
                </Row>
                <h3 className="text-center my-4">Salads</h3>
                <Row xs="1" sm="2" md="4" className="my-2">
                    <Col>
                        <h5>Corbett's Caesar Salad</h5>
                        <h6>$7.00</h6>
                        <p>Classic Caesar Salad</p>
                    </Col>
                    <Col>
                        <h5>Corbett's House Salad</h5>
                        <h6>$6.50</h6>
                        <p>Our special house blend</p>
                    </Col>
                    <em>
                        <Col>
                            <p className="responsiveText">Add Dolphin Grilled or Blackened for $5.00</p>
                        </Col>
                        <Col>
                            <p className="responsiveText">Add Chicken Grilled or Blackened for $4.00</p>
                        </Col>
                    </em>
                </Row>
                <Row xs="1" sm="2" md="4" className="my-2">
                    <Col>
                        <h5>Corbett's Burger Salad</h5>
                        <h6>$10.50</h6>
                        <p>House Salad Topped With 7oz Burger</p>
                    </Col>
                    <Col>
                        <h5>Corbett's Chef Salad</h5>
                        <h6>$11.50</h6>
                        <p>Turkey, Ham, Swiss and Cheddar</p>
                    </Col>
                </Row>
                <Row xs="1" className="mb-4">
                    <Col>
                        <div className="text-center">
                            <h5>Dressings</h5>
                            <p>Ranch, Blue Cheese, Honey Mustard, Balsalmic Vinaigrette, Caesar, or Oil and Vinegar.</p>
                        </div>
                    </Col>
                </Row>
                <Row xs="2" className="my-5 text-center">
                    <Col>
                        <h5>Hurricane Chili</h5>
                        <h6>$5.50</h6>
                    </Col>
                    <Col>
                        <h5>Soup Of The Day</h5>
                        <h6>$5.50</h6>
                    </Col>
                </Row>
                <h3 className="text-center mt-5 mb-4">Burgers</h3>
                <Row xs="1" sm="2" md="4" className="my-2">
                    <Col>
                        <h5>Corbett's Burger</h5>
                        <h6>$8.50</h6>
                        <p>7oz of grilled perfection</p>
                    </Col>
                    <Col>
                        <h5>Bigger Burger</h5>
                        <h6>$11.50</h6>
                        <p>12oz. Bigger burger for bigger hunger</p>
                    </Col>
                    <Col>
                        <h5>Mini Burgers (3)</h5>
                        <h6>$7.00</h6>
                        <p>With Grilled Onions and Pickles</p>
                    </Col>
                    <Col>
                        <h5>Patty Melt</h5>
                        <h6>$10.00</h6>
                        <p>With Grilled Onions and Cheese</p>
                    </Col>
                </Row>
                <h3 className="text-center my-5">Sandwiches</h3>
                <Row xs="1" sm="2" md="4">
                    <Col>
                        <h5>Grilled Chicken Breast Sandwich</h5>
                        <h6>$8.55</h6>
                        <p></p>
                    </Col>
                    <Col>
                        <h5>Chicken Club</h5>
                        <h6>$9.55</h6>
                        <p>With Grilled Onions and Cheese</p>
                    </Col>
                    <Col>
                        <h5>Grilled Dolphin Sandwich</h5>
                        <h6>(Market Price)</h6>
                        <p>When Available</p>
                    </Col>
                    <Col>
                        <h5>Corbett's 1/2LB Hot Dog</h5>
                        <h6>$8.00</h6>
                        <p></p>
                    </Col>
                    <Col>
                        <h5>Beef Philly</h5>
                        <h6>$9.55</h6>
                        <p>With Peppers, Mushrooms, Onions and Cheese</p>
                    </Col>
                    <Col>
                        <h5>Chicken Philly</h5>
                        <h6>$9.55</h6>
                        <p>With Peppers, Mushrooms, Onions and Cheese</p>
                    </Col>
                    <Col>
                        <h5>Corbett's Club</h5>
                        <h6>$9.55</h6>
                        <p>With Turkey, Ham, or Both</p>
                    </Col>
                    <Col>
                        <h5>Turkey Breast Sandwich</h5>
                        <h6>$8.00</h6>
                        <p></p>
                    </Col>
                    <Col>
                        <h5>Turkey Melt</h5>
                        <h6>$8.75</h6>
                        <p>Grilled with your choice of Cheese</p>
                    </Col>
                    <Col>
                        <h5>Ham and Cheese</h5>
                        <h6>$8.75</h6>
                        <p>Served Grilled or Cold with your choice of Cheese</p>
                    </Col>
                    <Col>
                        <h5>Corbett's Classic BLT</h5>
                        <h6>$6.55</h6>
                        <p></p>
                    </Col>
                    <Col>
                        <h5>Grilled Cheese</h5>
                        <h6>$5.50</h6>
                        <p></p>
                    </Col>
                </Row>
                <Row className="my-5">
                    <div style={{ width: '100%' }} className="text-center">
                        <h5 className="mb-4">All Burgers and Sandwiches come with Chips and a Pickle</h5>
                        <h5>Served on your choice of White, Wheat, Rye, Kaiser, Hoagie, or make it a wrap!</h5>
                    </div>
                </Row>
                <h3 className="text-center my-4">Extra Toppings</h3>
                <Row xs="4" sm="6" className="text-center">
                    <Col>
                        <h6>Cheese</h6>
                        <p>$1.00</p>
                    </Col>
                    <Col>
                        <h6>Bacon</h6>
                        <p>$2.00</p>
                    </Col>
                    <Col>
                        <h6>Chili</h6>
                        <p>$1.50</p>
                    </Col>
                    <Col>
                        <h6>Mushrooms</h6>
                        <p>$1.00</p>
                    </Col>
                    <Col>
                        <h6>Blackened</h6>
                        <p>$1.00</p>
                    </Col>
                    <Col>
                        <h6>Grilled Onions</h6>
                        <p>$0.75</p>
                    </Col>
                    <Col>
                        <h6>Pico De Gallo</h6>
                        <p>$1.00</p>
                    </Col>
                    <Col>
                        <h6>Marinara</h6>
                        <p>$0.50</p>
                    </Col>
                </Row>
                <h3 className="text-center mb-4">Sides</h3>
                <Row xs="4" sm="6" className="text-center">
                    <Col>
                        <h6>Large Fries</h6>
                        <p>$4.50</p>
                    </Col>
                    <Col>
                        <h6>Small Fries</h6>
                        <p>$3.00</p>
                    </Col>
                    <Col>
                        <h6>Cheese Fries</h6>
                        <p>$5.50</p>
                    </Col>
                    <Col>
                        <h6>Chili Cheese Fries</h6>
                        <p>$3.00</p>
                    </Col>
                    <Col>
                        <h6>Onion Rings</h6>
                        <p>$5.50</p>
                    </Col>
                    <Col>
                        <h6>Sweet Potato Fries</h6>
                        <p>$4.50</p>
                    </Col>
                    <Col>
                        <h6>Chips</h6>
                        <p>$1.00</p>
                    </Col>
                    <Col>
                        <h6>Extra Veggies</h6>
                        <p>$1.00</p>
                    </Col>
                    <Col>
                        <h6>Side Salad</h6>
                        <p>$4.00</p>
                    </Col>
                    <Col>
                        <h6>Side Caesar</h6>
                        <p>$4.50</p>
                    </Col>
                </Row>
            </Container>
            <Container className="containerStyle text-center">
                <div>
                    <h2 className="bigText">Beer And Wine</h2>
                    <h4 className="my-4">Import, Craft, and Microbrew Bottles</h4>
                </div>
                <Row xs="1" s="2" md="2" lg="2" xl="3" className="my-4 paddedList">
                    <Col>Amstel Light</Col>
                    <Col>Angry Orchard</Col>
                    <Col>Bass Ale</Col>
                    <Col>Beck's</Col>
                    <Col>Blue Moon</Col>
                    <Col>Cigar City Jai Alai</Col>
                    <Col>Corona</Col>
                    <Col>Corona Light</Col>
                    <Col>Dogfish IPA</Col>
                    <Col>Gumption Hard Cider</Col>
                    <Col>Heineken</Col>
                    <Col>Heineken Light</Col>
                    <Col>Narragansett</Col>
                    <Col>Newcastle</Col>
                    <Col>Red Stripe</Col>
                    <Col>Sam Adams</Col>
                    <Col>Sam Adams Rebel IPA</Col>
                    <Col>Sierra Nevada</Col>
                    <Col>Stella Artois</Col>
                    <Col>Veza Sur Mangolandia</Col>
                    <Col>Funky Buddha Floridian Hefeweizen</Col>
                    <Col>Left Hand Brewing Nitro Milk Stout</Col>
                    <Col>Terrapin Hopsecutioner IPA</Col>
                    <Col>Wynwood Brewing Father Francisco</Col>
                    <Col>Wynwood Brewing La Rubia</Col>
                    <Col>White Claw Black Cherry</Col>
                </Row>
                <h4 className="text-center">Domestic</h4>
                <Row xs="2" s="2" md="2" lg="2" xl="3" className="my-4 paddedList">
                    <Col>Budweiser</Col>
                    <Col>Bud Light</Col>
                    <Col>Bud Light Seltzer</Col>
                    <Col>Coors Light</Col>
                    <Col>Michelob Ultra</Col>
                    <Col>Miller Lite</Col>
                    <Col>O'Doul's N-A</Col>
                    <Col>Pabst Blue Ribbon</Col>
                    <Col>Yuengling</Col>
                </Row>
            </Container >
        </React.Fragment >
    );
}

export default FoodMenu;