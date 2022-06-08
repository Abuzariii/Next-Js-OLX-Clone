import classes from "./Body.module.css";
import React, { useState } from "react";
import Card from "./Cards";
import Footer from "./Footer";

export default function Body() {
  const [btnStyle, setBtnStyle] = useState({
    marginTop: "7%",
  });
  const [show, setShow] = useState(false);
  const [btnText, setBtnText] = useState("more");
  const [grid, setGrid] = useState({
    marginLeft: "7.5rem",
    display: "grid",
    gridTemplateColumns: "repeat(4, 19rem)",
    gridTemplateRows: "repeat(6, 15.5rem)",
    gridColumnGap: "0.6%",
    gridRowGap: "0.6%",
  });
  function showHandler() {
    setShow(!show);
    if (!show) {
      setBtnText("less");
      setBtnStyle({
        marginTop: "25rem",
      });
      setGrid({
        marginLeft: "7.5rem",
        display: "grid",
        gridTemplateColumns: "repeat(4, 19rem)",
        gridTemplateRows: "repeat(16, 15.5rem)",
        gridColumnGap: "0.6%",
        gridRowGap: "0.6%",
      });
    } else if (show) {
      setBtnText("more");
      setBtnStyle({
        marginTop: "7%",
      });
      setGrid({
        marginLeft: "7.5rem",
        display: "grid",
        gridTemplateColumns: "repeat(4, 19rem)",
        gridTemplateRows: "repeat(6, 15.5rem)",
        gridColumnGap: "0.6%",
        gridRowGap: "0.6%",
      });
    }
  }
  return (
    <div className={classes.body}>
      <div style={grid}>
        <Card
          title="Home for Sale"
          Img={"/images/Img2.webp"}
          price="2,750,000"
          location="Gulberg 3, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          title="Digital Marketing Job"
          Img={"/images/Img5.webp"}
          price="45,000"
          location="Teen Talwaar, Karachi . 2 days ago"
        ></Card>
        <Card
          title="Book Shelf"
          Img={"/images/Img6.webp"}
          price="90,000"
          location="Choburji, Lahore . 7 weeks ago"
          featured="yes"
        ></Card>
        <Card
          title="Black Sofa with Table"
          Img={"/images/Img10.webp"}
          price="18,000"
          location="Maleer Chowk, Gujranwala . 4 months ago"
          featured="yes"
        ></Card>
        <Card
          title="Apple Airpods Pro"
          Img={"/images/Img11.webp"}
          price="29,000"
          location="DHA, Islamabad . 14 days ago"
        ></Card>
        <Card
          title="HP Pavillion Tablet"
          Img={"/images/Img12.webp"}
          price="80,000"
          location="Shahadrah, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          title="Medical Staff Required"
          Img={"/images/Img19.webp"}
          price="50,000 (salary)"
          location="Gulberg 3, Lahore . 4 weeks ago"
        ></Card>
        <Card
          title="Q Mobile Tablet"
          Img={"/images/Img17.webp"}
          price="30,000"
          location="Burj Chowk, Lahore . 4 weeks ago"
        ></Card>
        <Card
          title="Grockery"
          Img={"/images/Img18.webp"}
          price="8,000"
          location="Chowrangi, Karachi . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          title="Oppo A1 Pro"
          Img={"/images/Img15.webp"}
          price="62,000"
          location="DC Chowk, Bahawalpur . 3 months ago"
        ></Card>
        <Card
          title="Persian White Kitten"
          Img={"/images/Img20.webp"}
          price="33,000"
          location="Lake, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          title="VR Glasses"
          Img={"/images/Img21.webp"}
          price="94,000"
          location="DHA, Lahore . 4 weeks ago"
        ></Card>
        <Card
          title="Chipset"
          Img={"/images/Img23.webp"}
          price="6,000"
          location="Fayaz e Madina, Bhakkar . 4 days ago"
        ></Card>
        <Card
          title="Grockery"
          Img={"/images/Img24.webp"}
          price="27,000"
          location="Pakpattan . 4 months ago"
        ></Card>
        <Card
          title="Tech House Job"
          Img={"/images/Img28.webp"}
          price="76,000 (salary)"
          location="F-9, Islamabad . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          title="Meds for Furniture"
          Img={"/images/Img29.webp"}
          price="9,00"
          location="Numaish Chowk, Multan . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          title="Toy Piano for Babies"
          Img={"/images/Img30.webp"}
          price="4,500"
          location="Emporium, Lahore . 11 days ago"
          featured="yes"
        ></Card>
        <Card
          title="Residential Plot For Sale in White City"
          Img={"/images/Img31.webp"}
          price="2,750,000"
          location="Gulberg 3, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          title="Book Shelf"
          Img={"/images/Img6.webp"}
          price="90,000"
          location="Choburji, Lahore . 7 weeks ago"
          featured="yes"
        ></Card>
        <Card
          title="Black Sofa with Table"
          Img={"/images/Img10.webp"}
          price="18,000"
          location="Maleer Chowk, Gujranwala . 4 months ago"
          featured="yes"
        ></Card>
        <Card
          title="Apple Airpods Pro"
          style={!show ? { display: "none" } : { display: "flex" }}
          Img={"/images/Img11.webp"}
          price="29,000"
          location="DHA, Islamabad . 14 days ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="HP Pavillion Tablet"
          Img={"/images/Img12.webp"}
          price="80,000"
          location="Shahadrah, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Digital Marketing Job"
          Img={"/images/Img5.webp"}
          price="45,000"
          location="Teen Talwaar, Karachi . 2 days ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Book Shelf"
          Img={"/images/Img2.webp"}
          price="90,000"
          location="Choburji, Lahore . 7 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Black Sofa with Table"
          Img={"/images/Img10.webp"}
          price="18,000"
          location="Maleer Chowk, Gujranwala . 4 months ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Apple Airpods Pro"
          Img={"/images/Img11.webp"}
          price="29,000"
          location="DHA, Islamabad . 14 days ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="HP Pavillion Tablet"
          Img={"/images/Img12.webp"}
          price="80,000"
          location="Shahadrah, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Medical Staff Required"
          Img={"/images/Img19.webp"}
          price="50,000 (salary)"
          location="Gulberg 3, Lahore . 4 weeks ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Q Mobile Tablet"
          Img={"/images/Img17.webp"}
          price="30,000"
          location="Burj Chowk, Lahore . 4 weeks ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Grockery"
          Img={"/images/Img18.webp"}
          price="8,000"
          location="Chowrangi, Karachi . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Oppo A1 Pro"
          Img={"/images/Img15.webp"}
          price="62,000"
          location="DC Chowk, Bahawalpur . 3 months ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Home for sale"
          Img={"/images/Img2.webp"}
          price="2,750,000"
          location="Gulberg 3, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Digital Marketing Job"
          Img={"/images/Img5.webp"}
          price="45,000"
          location="Teen Talwaar, Karachi . 2 days ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Book Shelf"
          Img={"/images/Img6.webp"}
          price="90,000"
          location="Choburji, Lahore . 7 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Black Sofa with Table"
          Img={"/images/Img10.webp"}
          price="18,000"
          location="Maleer Chowk, Gujranwala . 4 months ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Apple Airpods Pro"
          Img={"/images/Img11.webp"}
          price="29,000"
          location="DHA, Islamabad . 14 days ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="HP Pavillion Tablet"
          Img={"/images/Img12.webp"}
          price="80,000"
          location="Shahadrah, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Medical Staff Required"
          Img={"/images/Img19.webp"}
          price="50,000 (salary)"
          location="Gulberg 3, Lahore . 4 weeks ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Q Mobile Tablet"
          Img={"/images/Img17.webp"}
          price="30,000"
          location="Burj Chowk, Lahore . 4 weeks ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Grockery"
          Img={"/images/Img18.webp"}
          price="8,000"
          location="Chowrangi, Karachi . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Oppo A1 Pro"
          Img={"/images/Img15.webp"}
          price="62,000"
          location="DC Chowk, Bahawalpur . 3 months ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Persian White Kitten"
          Img={"/images/Img22.webp"}
          price="33,000"
          location="Lake, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="VR Glasses"
          Img={"/images/Img21.webp"}
          price="94,000"
          location="DHA, Lahore . 4 weeks ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Chipset"
          Img={"/images/Img23.webp"}
          price="6,000"
          location="Fayaz e Madina, Bhakkar . 4 days ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Grockery"
          Img={"/images/Img24.webp"}
          price="27,000"
          location="Pakpattan . 4 months ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Tech House Job"
          Img={"/images/Img28.webp"}
          price="76,000 (salary)"
          location="F-9, Islamabad . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Home for sale"
          Img={"/images/Img2.webp"}
          price="2,750,000"
          location="Gulberg 3, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Digital Marketing Job"
          Img={"/images/Img5.webp"}
          price="45,000"
          location="Teen Talwaar, Karachi . 2 days ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Book Shelf"
          Img={"/images/Img6.webp"}
          price="90,000"
          location="Choburji, Lahore . 7 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Black Sofa with Table"
          Img={"/images/Img10.webp"}
          price="18,000"
          location="Maleer Chowk, Gujranwala . 4 months ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Apple Airpods Pro"
          Img={"/images/Img11.webp"}
          price="29,000"
          location="DHA, Islamabad . 14 days ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="HP Pavillion Tablet"
          Img={"/images/Img12.webp"}
          price="80,000"
          location="Shahadrah, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Medical Staff Required"
          Img={"/images/Img19.webp"}
          price="50,000 (salary)"
          location="Gulberg 3, Lahore . 4 weeks ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Q Mobile Tablet"
          Img={"/images/Img17.webp"}
          price="30,000"
          location="Burj Chowk, Lahore . 4 weeks ago"
        ></Card>
        <Card
          title="Grockery"
          Img={"/images/Img18.webp"}
          price="8,000"
          location="Chowrangi, Karachi . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Oppo A1 Pro"
          Img={"/images/Img5.webp"}
          price="62,000"
          location="DC Chowk, Bahawalpur . 3 months ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Persian White Kitten"
          Img={"/images/Img20.webp"}
          price="33,000"
          location="Lake, Lahore . 4 weeks ago"
          featured="yes"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="VR Glasses"
          Img={"/images/Img21.webp"}
          price="94,000"
          location="DHA, Lahore . 4 weeks ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Chipset"
          Img={"/images/Img23.webp"}
          price="6,000"
          location="Fayaz e Madina, Bhakkar . 4 days ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Grockery"
          Img={"/images/Img24.webp"}
          price="27,000"
          location="Pakpattan . 4 months ago"
        ></Card>
        <Card
          style={!show ? { display: "none" } : { display: "flex" }}
          title="Tech House Job"
          Img={"/images/Img28.webp"}
          price="76,000"
          location="F-9, Islamabad . 4 weeks ago"
          featured="yes"
        ></Card>
      </div>
      <div style={btnStyle} className={classes.showMore}>
        <button
          className={classes.showMoreBtn}
          style={{ color: "black" }}
          onClick={showHandler}
        >
          Load {btnText}
        </button>
      </div>
      <img
        src={"/images/footerBanner.JPG"}
        className={classes.footerBanner}
      ></img>
      <Footer></Footer>
    </div>
  );
}
