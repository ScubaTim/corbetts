import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './FoodMenu.scss';


const FoodMenu = () => {
    return (
        <React.Fragment>
            <Container className="containerStyle">
                <div className="textCenter headingDiv">
                    <h1>Menu</h1>
                    <br />
                    <h4>Starters</h4>
                </div>
                <Row xs="1" sm="2" md="4">
                    <Col>
                        <h5>Jumbo Chicken Wings</h5>
                        <h7>(10) $10.50 (20) $17.50</h7>
                        <p>Served with celery and blue cheese.</p>
                        <p>Add $1.50 for grilled Daytona.</p>
                    </Col>
                    <Col>
                        <h5>Wing Sauces:</h5>
                        <p>Mild, Medium, Hot, Killer, Garlic,<br /> BBQ, Tangy BBQ, or House.</p>
                        <p>Extra sauce .50</p>
                    </Col>
                    <Col>
                        <h5>Smoked Fish Dip</h5>
                        <h7>$8.55</h7>
                        <p>Served with Jalapenos, Pico, and Crackers.</p>
                    </Col>
                    <Col>
                        <h5>Potato Skins</h5>
                        <h7>$8.55</h7>
                        <p>Your choice of Bacon and Cheese or Chili and Cheese.</p>
                    </Col>
                </Row>
                <Row xs="1" sm="2" md="4">
                    <Col>
                        <h5>Chicken Fingers and Fries</h5>
                        <h7>$9.55</h7>
                        <p>Served with Honey Mustard or BBQ sauce.</p>
                    </Col>
                    <Col>
                        <h5>Chicken Quesadilla</h5>
                        <h7>$9.55</h7>
                        <p>Served with Sour Cream and Pico.</p>
                    </Col>
                    <Col>
                        <h5>Nachos and Salsa</h5>
                        <h7>$5.55</h7>
                        <p></p>
                    </Col>
                    <Col>
                        <h5>Nachos and Cheese</h5>
                        <h7>$8.55</h7>
                        <p>Served with Lettuce, Tomato, Sour Cream, and Pico.</p>
                    </Col>
                </Row>
                <Row xs="1" sm="2" md="4">
                    <Col>
                        <h5>Chili Cheese Nachos</h5>
                        <h7>$9.75</h7>
                        <p>Served with Lettuce, Tomato, Sour Cream, and Pico.</p>
                    </Col>
                    <Col>
                        <h5>Santa Fe Chicken Eggrolls</h5>
                        <h7>$9.50</h7>
                        <p>Served with Sour Cream and Pico.</p>
                    </Col>
                    <Col>
                        <h5>Fried Mozzarella Sticks</h5>
                        <h7>$6.00</h7>
                        <p>Served with Marinara dipping sauce.</p>
                    </Col>
                    <Col>
                        <h5>Corn Dog Bites</h5>
                        <h7>$6.75</h7>
                        <p>Served with Honey Mustard.</p>
                    </Col>
                </Row>
                <Row xs="1" sm="2" md="4">
                    <Col>
                        <h5>Chili Cheese Nachos</h5>
                        <h7>$9.75</h7>
                        <p>Served with Lettuce, Tomato, Sour Cream, and Pico.</p>
                    </Col>
                    <Col>
                        <h5>Santa Fe Chicken Eggrolls</h5>
                        <h7>$9.50</h7>
                        <p>Served with Sour Cream and Pico.</p>
                    </Col>
                    <Col>
                        <h5>Fried Mozzarella Sticks</h5>
                        <h7>$6.00</h7>
                        <p>Served with Marinara dipping sauce.</p>
                    </Col>
                    <Col>
                        <h5>Corn Dog Bites</h5>
                        <h7>$6.75</h7>
                        <p>Served with Honey Mustard.</p>
                    </Col>
                </Row>
            </Container>
            <Container className="containerStyle textCenter">
                <div className="headingDiv">
                    <h2>Beer And Wine</h2>
                    <h4>Import, Craft, and Microbrew Bottles</h4>
                </div>
                <Row xs="2" s="2" md="2" lg="2" xl="3" className=" paddedList">
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
                <br />
                <h4 className="textCenter headingDiv">Domestic</h4>
                <Row xs="2" s="2" md="2" lg="2" xl="3" className=" paddedList">
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