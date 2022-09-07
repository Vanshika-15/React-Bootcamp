import { Search, SearchOutlined, ShoppingCart, ExpandMore, Share, Facebook, Twitter, LinkedIn, Call } from "@mui/icons-material";
import { Typography, Grid, Chip, Button, Breadcrumbs, Link, Autocomplete, TextField, AppBar, Toolbar, IconButton, Card, CardContent, Pagination, CardActionArea, Avatar } from "@mui/material";
import { blue, grey, pink, red } from "@mui/material/colors";
import { Container } from "@mui/system";
import React from "react";
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.png"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"
import img5 from "./images/img5.png"

function Home() {

    const SearchYourProduct = [
        { label: 'potato' },
        { label: 'onion' },
        { label: 'carrot' },
        { label: 'tomato' },
        { label: 'beans' },
        { label: 'cauliflower' },
        { label: 'bitter guard' },
        { label: 'bottle gaurd' },
        { label: 'peas' },
        { label: 'cabbage' }
    ]

    return (
        <>

            <Grid container>
                <Grid item lg={12}>

                    <Typography variant="h2" ml={10} mt={4} sx={{ color: "red",fontWeight:"bolder" }}>MeroStore.com</Typography>
                    <Button variant="contained" startIcon={<ShoppingCart />} sx={{ ml: 120, mt: -8, bgcolor:red }}>ADD TO CART  0</Button>
                    <Button variant="contained" sx={{ mt: -8, ml: 5 }}>Login</Button>
                    <Button variant="contained" sx={{ mt: -8, ml: 5 }}>Sign Up!</Button>

                    <Breadcrumbs separator="|" sx={{ ml: 80, mt: 1 }}>
                        <Link>Customer Care</Link>
                        <Link>Track Order</Link>
                        <Link>My Contact</Link>
                        <Link>Help</Link>
                    </Breadcrumbs>

                    <Grid container>
                        <Grid lg={2} sx={{ ml: 130, mt: -3 }}>

                            <Autocomplete options={SearchYourProduct} renderInput={(bhumi) => <TextField {...bhumi} size="small" label="SearchYourProduct" startIcon={<SearchOutlined />} />} />

                        </Grid>
                        <Grid lg={1}>
                            <Button variant="contained" sx={{ mt: -5,ml:1 }}>Search</Button>
                        </Grid>
                    </Grid>



                </Grid>
            </Grid>
            <Grid container style={{ background: "pink", height: "30px", }}>
                <Grid lg={12}>
                    <Grid container>
                        <Grid lg={1}>
                            <Typography>

                                Fruits <IconButton><ExpandMore /></IconButton></Typography>

                        </Grid>
                        <Grid lg={1}>
                            <Typography>Vegetables
                                <IconButton><ExpandMore /></IconButton>
                            </Typography>
                        </Grid>
                        <Grid lg={1}>
                            <Typography>Diary
                                <IconButton><ExpandMore /></IconButton>
                            </Typography>
                        </Grid>
                        <Grid lg={1}>
                            <Typography>Meat
                                <IconButton><ExpandMore /></IconButton>
                            </Typography>
                        </Grid>
                        <Grid lg={1}>
                            <Typography>Sea Food
                                <IconButton><ExpandMore /></IconButton>
                            </Typography>
                        </Grid>
                        <Grid lg={1}>
                            <Typography>Beverages
                                <IconButton><ExpandMore /></IconButton>
                            </Typography>
                        </Grid>
                        <Grid lg={1}>
                            <Typography>Wine
                                <IconButton><ExpandMore /></IconButton>
                            </Typography>
                        </Grid>
                        <Grid lg={1}>
                            <Typography>Frozen
                                <IconButton><ExpandMore /></IconButton>
                            </Typography>
                        </Grid>

                        <Grid lg={1}>
                            <Typography>Milk
                                <IconButton><ExpandMore /></IconButton>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container>
                <Grid lg={6} sx={{ ml: 10 }}>
                    <img src={img1} height="500px" width="800px" />
                    {/* <Typography variant="h4" sx={{color:"black",mt:"-80"}}>Loreum Ipsum</Typography> */}

                </Grid>
                <Grid lg={6} sx={{ ml: 110, mt: -63 }}>
                    <img src={img2} height="300px" width="500px" />

                </Grid>
                <Grid lg={6} sx={{ ml: 110, mt: -30 }}>
                    <img src={img3} height="235px" width="500px" />

                </Grid>
            </Grid>
            <Grid container>
                <Grid sx={{ mt: 5 }}>


                    <Typography variant="h5" sx={{ color: "blue", fontWeight: "bolder" }}>FEATURED PRODUCTS</Typography>

                </Grid>

            </Grid>
            <hr style={{ color: "blue", fontWeight: "bolder" }} />


            <Grid container >

                <Grid lg={3}>


                    <CardContent>
                        <Card>
                            <CardContent>
                                <img src={img4} height="180px" width="100%" />
                            </CardContent>
                            <Typography variant="h6" style={{ textAlign: "center", color: "blue", fontWeight: "bolder" }}>FRUIT BASKET</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Price<span style={{ marginLeft: "250px" }}></span> 300</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Quantity <span style={{ marginLeft: "210px" }}></span> 2KG</Typography>
                            <Button variant="contained" startIcon={<ShoppingCart />} style={{ background: "red", marginLeft: "90px", marginTop: "20px" }}>ADD TO CART</Button>
                        </Card>
                    </CardContent>

                </Grid>

                <Grid lg={3}>


                    <CardContent>
                        <Card>
                            <CardContent>
                                <img src={img4} height="180px" width="100%" />
                            </CardContent>
                            <Typography variant="h6" style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>VEGETABLE BASKET</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Price<span style={{ marginLeft: "250px" }}></span> 300</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Quantity <span style={{ marginLeft: "210px" }}></span> 2KG</Typography>
                            <Button variant="contained" startIcon={<ShoppingCart />} style={{ background: "red", marginLeft: "90px", marginTop: "20px" }}>ADD TO CART</Button>
                        </Card>
                    </CardContent>

                </Grid>

                <Grid lg={3}>


                    <CardContent>
                        <Card>
                            <CardContent>
                                <img src={img4} height="180px" width="100%" />
                            </CardContent>
                            <Typography variant="h6" style={{ textAlign: "center", color: "blue", fontWeight: "bolder" }}>FRUIT BASKET</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Price<span style={{ marginLeft: "250px" }}></span> 300</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Quantity <span style={{ marginLeft: "210px" }}></span> 2KG</Typography>
                            <Button variant="contained" startIcon={<ShoppingCart />} style={{ background: "red", marginLeft: "90px", marginTop: "20px" }}>ADD TO CART</Button>
                        </Card>
                    </CardContent>

                </Grid>

                <Grid lg={3}>


                    <CardContent>
                        <Card>
                            <CardContent>
                                <img src={img4} height="180px" width="100%" />
                            </CardContent>
                            <Typography variant="h6" style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>VEGETABLE BASKET</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Price<span style={{ marginLeft: "250px" }}></span> 300</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Quantity <span style={{ marginLeft: "210px" }}></span> 2KG</Typography>
                            <Button variant="contained" startIcon={<ShoppingCart />} style={{ background: "red", marginLeft: "90px", marginTop: "20px" }}>ADD TO CART</Button>
                        </Card>
                    </CardContent>

                </Grid>

                <Grid lg={3}>


                    <CardContent>
                        <Card>
                            <CardContent>
                                <img src={img4} height="180px" width="100%" />
                            </CardContent>
                            <Typography variant="h6" style={{ textAlign: "center", color: "blue", fontWeight: "bolder" }}>FRUIT BASKET</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Price<span style={{ marginLeft: "250px" }}></span> 300</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Quantity <span style={{ marginLeft: "210px" }}></span> 2KG</Typography>
                            <Button variant="contained" startIcon={<ShoppingCart />} style={{ background: "red", marginLeft: "90px", marginTop: "20px" }}>ADD TO CART</Button>
                        </Card>
                    </CardContent>

                </Grid>
                <Grid lg={3}>


                    <CardContent>
                        <Card>
                            <CardContent>
                                <img src={img4} height="180px" width="100%" />
                            </CardContent>
                            <Typography variant="h6" style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>VEGETABLE BASKET</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Price<span style={{ marginLeft: "250px" }}></span> 300</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Quantity <span style={{ marginLeft: "210px" }}></span> 2KG</Typography>
                            <Button variant="contained" startIcon={<ShoppingCart />} style={{ background: "red", marginLeft: "90px", marginTop: "20px" }}>ADD TO CART</Button>
                        </Card>
                    </CardContent>

                </Grid>


                <Grid lg={3}>


                    <CardContent>
                        <Card>
                            <CardContent>
                                <img src={img4} height="180px" width="100%" />
                            </CardContent>
                            <Typography variant="h6" style={{ textAlign: "center", color: "blue", fontWeight: "bolder" }}>FRUIT BASKET</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Price<span style={{ marginLeft: "250px" }}></span> 300</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Quantity <span style={{ marginLeft: "210px" }}></span> 2KG</Typography>
                            <Button variant="contained" startIcon={<ShoppingCart />} style={{ background: "red", marginLeft: "90px", marginTop: "20px" }}>ADD TO CART</Button>
                        </Card>
                    </CardContent>

                </Grid>


                <Grid lg={3}>


                    <CardContent>
                        <Card>
                            <CardContent>
                                <img src={img4} height="180px" width="100%" />
                            </CardContent>
                            <Typography variant="h6" style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>VEGETABLE BASKET</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Price<span style={{ marginLeft: "250px" }}></span> 300</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Quantity <span style={{ marginLeft: "210px" }}></span> 2KG</Typography>
                            <Button variant="contained" startIcon={<ShoppingCart />} style={{ background: "red", marginLeft: "90px", marginTop: "20px" }}>ADD TO CART</Button>
                        </Card>
                    </CardContent>

                </Grid>

                <Grid lg={3}>


                    <CardContent>
                        <Card>
                            <CardContent>
                                <img src={img4} height="180px" width="100%" />
                            </CardContent>
                            <Typography variant="h6" style={{ textAlign: "center", color: "blue", fontWeight: "bolder" }}>FRUIT BASKET</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Price<span style={{ marginLeft: "250px" }}></span> 300</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Quantity <span style={{ marginLeft: "210px" }}></span> 2KG</Typography>
                            <Button variant="contained" startIcon={<ShoppingCart />} style={{ background: "red", marginLeft: "90px", marginTop: "20px" }}>ADD TO CART</Button>
                        </Card>
                    </CardContent>

                </Grid>


                <Grid lg={3}>


                    <CardContent>
                        <Card>
                            <CardContent>
                                <img src={img4} height="180px" width="100%" />
                            </CardContent>
                            <Typography variant="h6" style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>VEGETABLE BASKET</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Price<span style={{ marginLeft: "250px" }}></span> 300</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Quantity <span style={{ marginLeft: "210px" }}></span> 2KG</Typography>
                            <Button variant="contained" startIcon={<ShoppingCart />} style={{ background: "red", marginLeft: "90px", marginTop: "20px" }}>ADD TO CART</Button>
                        </Card>
                    </CardContent>

                </Grid>


                <Grid lg={3}>


                    <CardContent>
                        <Card>
                            <CardContent>
                                <img src={img4} height="180px" width="100%" />
                            </CardContent>
                            <Typography variant="h6" style={{ textAlign: "center", color: "blue", fontWeight: "bolder" }}>FRUIT BASKET</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Price<span style={{ marginLeft: "250px" }}></span> 300</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Quantity <span style={{ marginLeft: "210px" }}></span> 2KG</Typography>
                            <Button variant="contained" startIcon={<ShoppingCart />} style={{ background: "red", marginLeft: "90px", marginTop: "20px" }}>ADD TO CART</Button>
                        </Card>
                    </CardContent>

                </Grid>


                <Grid lg={3}>


                    <CardContent>
                        <Card>
                            <CardContent>
                                <img src={img4} height="180px" width="100%" />
                            </CardContent>
                            <Typography variant="h6" style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>VEGETABLE BASKET</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Price<span style={{ marginLeft: "250px" }}></span> 300</Typography>
                            <Typography variant="h6" style={{ color: "blue", fontWeight: "bolder" }}>Quantity <span style={{ marginLeft: "210px" }}></span> 2KG</Typography>
                            <Button variant="contained" startIcon={<ShoppingCart />} style={{ background: "red", marginLeft: "90px", marginTop: "20px" }}>ADD TO CART</Button>
                        </Card>
                    </CardContent>

                </Grid>
                <Grid lg={12} >
                    <Grid container>

                        <Grid lg={3} style={{ margin: "auto" }}>
                            <Pagination count={5} variant="outlined" shape="rounded" color="primary" />
                        </Grid>


                        <Grid lg={12} style={{ height: "90px", background: "blue" }}>
                            <Typography variant="h3" style={{ color: "white", fontWeight: "bolder", marginTop: "15px", marginLeft: "290px" }}>SUBSCRIBE NOW</Typography>
                            <Grid container>
                                <Grid lg={3} style={{ marginLeft: "730px", marginTop: "-50px" }}>
                                    <TextField fullWidth placeholder="EMAIL ADDRESS" size="small" style={{ background: "white" }} />
                                </Grid>
                            </Grid>
                            <Button variant="contained" style={{ height: "50", width: "190", background: "red", fontWeight: "bolder", marginLeft: "1120px", marginTop: "-85px" }}>Search</Button>
                        </Grid>




                    </Grid>
                </Grid>
            </Grid>

            <Grid>
                <Grid container style={{ height: "380px", background: "black" }}>

                    <Grid lg={3} >
                        <Typography variant="h4" style={{ color: "red", marginTop: "20px" }}>meroStore.com</Typography>
                        <Typography variant="h6" style={{ color: "white", marginTop: "50px" }}>365/9 Downstreet</Typography>
                        <Typography variant="h6" style={{ color: "white", marginTop: "10px" }}>State-Postal Code</Typography>
                        <Typography variant="h6" style={{ color: "white", marginTop: "10px" }}>Country</Typography>
                    </Grid>

                    <Grid lg={3} >
                        <Typography variant="h4" style={{ color: "white", marginTop: "20px" }}>Services</Typography>
                        <Typography variant="h6" style={{ color: "white", marginTop: "50px" }}>Download App</Typography>
                        <Typography variant="h6" style={{ color: "white", marginTop: "10px" }}>Gift and Vouchers</Typography>
                        <Typography variant="h6" style={{ color: "white", marginTop: "10px" }}>Offers & Discounts</Typography>
                        <Typography variant="h6" style={{ color: "white", marginTop: "10px" }}>About us</Typography>
                        <Typography variant="h6" style={{ color: "white", marginTop: "10px" }}>Contact Us</Typography>
                    </Grid>

                    <Grid lg={3} >
                        <Typography variant="h4" style={{ color: "white", marginTop: "20px" }}>Important links</Typography>
                        <Typography variant="h6" style={{ color: "white", marginTop: "50px" }}>Return Policy</Typography>
                        <Typography variant="h6" style={{ color: "white", marginTop: "10px" }}>Privacy Policy</Typography>
                        <Typography variant="h6" style={{ color: "white", marginTop: "10px" }}>Terms & Conditions</Typography>
                        <Typography variant="h6" style={{ color: "white", marginTop: "10px" }}>Partners</Typography>

                    </Grid>

                    <Grid lg={3} >
                        <Typography variant="h4" style={{ color: "white", marginTop: "20px" }}>Payment Methods</Typography>
                        <img src={img5} height="250px" width="300px" style={{ marginTop: "30px" }} />

                    </Grid>


                </Grid>

                <Grid Container style={{ height: "70px", width: "auto", background: "black" }}>
                    <Grid lg={5}>
                    <Avatar style={{marginLeft:"50px", background:"green"}}><Share/></Avatar>
                    <Avatar style={{marginLeft:"100px",marginTop:"-40px", background:"blue"}}><Facebook/></Avatar>
                    <Avatar style={{marginLeft:"150px",marginTop:"-40px",background:"blue"}}><Twitter/></Avatar>
                    <Avatar style={{marginLeft:"200px",marginTop:"-40px", background:"blue"}}><LinkedIn/></Avatar>
                    <Avatar style={{marginLeft:"250px", marginTop:"-40px",background:"green"}}><Call/></Avatar>
                    </Grid>

                    <Typography variant="h6" style={{color:"white", marginLeft:"1150px", marginTop:"-40px"}}>Copyrights- All Rights Reserved By- Vanshika</Typography>
                </Grid>
            </Grid>






















        </>

    )
}

export default Home;
