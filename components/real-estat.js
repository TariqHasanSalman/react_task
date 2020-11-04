import React from 'react';

class RealEstat extends React.Component {
  
   getRate() { /*this function calculats the rate of each real-estat and return a list of stars  */
     
     let rate=0;
     let rates=[];
      if(this.props.item.airbnb_ROI==null&&this.props.item.traditional_ROI==null){
        rate=0;
      }
      else if(this.props.item.airbnb_ROI==null){
        rate=this.props.item.traditional_ROI
      }
      else if(this.props.item.traditional_ROI==null){
        rate=this.props.item.airbnb_ROI
      }
      else{
        rate=(this.props.item.airbnb_ROI+this.props.item.traditional_ROI)/2
      }
      for (let index = 0; index < 5; index++) {
        if (index<rate) {
          rates.push(<span className=" fas fa-star"></span>);
        }
        else{
          rates.push(<span className=" far fa-star"></span>);
        }
  
      }
      return  rates;
    }
    
    getComp(comperType){ /* this function returns the Comparison between airbnb and trad.*/
      let A=[]
      if(comperType!="rental_income"){
      if(this.props.item[comperType].airbnb !=null){
        let data=this.props.item[comperType].airbnb.toFixed(2);
        A.push( <div className="col-3"><span>{data}</span><span>%</span></div>);
      }
      if(this.props.item[comperType].traditional !=null){
        let data=this.props.item[comperType].traditional.toFixed(2)
        A.push( <div className="col-3"><span>{data}</span><span>%</span></div>);

      }
      return A;
    }
      else{
        if(this.props.item[comperType].airbnb !=null){
          let data=this.props.item[comperType].airbnb.toFixed(0);
          A.push( <div className="col-3"><span>{data}</span><span>$</span></div>);
        }
        if(this.props.item[comperType].traditional !=null){
          let data=this.props.item[comperType].traditional.toFixed(0)
          A.push( <div className="col-3"><span>{data}</span><span>$</span></div>);
  
        }
        return A;
      }

    }

  
    render() {
      return(
       < div className="contanir">
          <div className="img"> 
            <img src={this.props.item.image_url} alt="house"/>
            <div className="basic-info">
        <span style={{marginLeft: "3%"}}>{this.props.item.beds} BDS | {this.props.item.baths} ba | {this.props.item.sqft} sqr</span>
        <span style={{float: "right",marginRight: "3%"}}>{this.props.item.list_price}$</span>
      </div>
      </div>
      
      <div className="data-section">
      <div className="location"> 
          <span className="loc">{this.props.item.address}</span>
         <span className="stars">
          <span>{this.getRate()}</span> {/* getRate() returns a list of stars  */}
          </span>
        </div>

        <div className="comparison-section">
            <div><hr/></div>
            <div className="compare">
            <div className="row">
              <div className="col-3 offset-6 fontstyling">Airbnb</div>
              <div className="col-3 fontstyling">Trad.</div>
          </div>

          <div className="row">
            <div className="col-6">CASH ON CASH</div>
              { 
             this.getComp("COC")/* this functon returns the data of coc of airbnb and trad. */
              }
        </div>
        <div className="row">
            <div className="col-6">CAP RATE</div>
              { 
             this.getComp("cap_rate")/*this functon returns the data of Cap-rate of airbnb and trad */
              }
        </div>
        <div className="row">
            <div className="col-6"> RENTAL INCOME</div>
              { 
             this.getComp("rental_income")/**this functon returns the data of rental income of airbnb and trad */
              }
        </div>
        
      </div>
      <div><hr/></div>
      </div>
      <div className="footer">
          <div>VIEW NEIGHBORHOOD ANALYTICS</div>
        </div>

      </div>
       
       






      <style jsx>{`
      .contanir{
        margin-top: 5%;
        width: 100%;
        box-sizing: border-box;
        border-radius: 20px 20px 0 0;
        border: 1px solid #0259db94;
        overflow: hidden;
        font-size: 1.2vw;
      
      }
      .img img{
        max-width: 100%;
        min-width: 100%;
        max-height: auto;
        margin: 0;
        box-sizing: border-box;
      }
      .img{
        max-height: 12vw;
        min-height: 12vw;
        overflow: hidden;
        position: relative;
      }
      .basic-info{
      font-size: 1.2vw;
      background-color:rgb(0, 0, 0,0.65)
      ;
      width: 100%;
      color: aliceblue;
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: start;
      }
      .data-section{
        margin-top: 1.5%;
        font-size: 1vw;
        position: relative;
      
      }
      .compare{
        max-width: 85%;
        margin-right: auto;
      
      }
      .location,.comparison-section{
        margin-bottom: 1.5%;
        margin-right: 3%;
        margin-left: 3%;
      }
      .stars{
        position: absolute;
        right: 3%;
        color: #0257db;
      }
      .loc{
        margin-left: 2px;
      }
      .fontstyling{
      font-weight:bold
      ;}
      
      .footer{
        padding: 2%;
        color: #0257db;
        text-align: center;
        font-weight: bold;
        font-size: 1.1vw;
        border-bottom: 2px solid  #0259db94;
      
      }
      hr{
        height:2px;
        border-width:0;
        background-color:#0259db88;
      }
      .data-section,.footer ,.basic-info,.contanir{
        font-size: 0.9vw;
      }
      @media only screen and (max-width: 700px) {
        hr{
          margin-top: 1% !important;
          margin-bottom:1% !important;
        }
       .data-section{
      margin-top: 0;
      margin-top: 0;
      font-size: 2vw;
        }
        
      .img{
        overflow: hidden;
        position: relative;
          max-height: 100px;
        
      }
      .data-section,.footer ,.basic-info,.contanir{
        font-size: 0.8vw;
      }
      }
      @media only screen and (min-width: 2000px) {
      
      
        .data-section,.footer ,.basic-info,.contanir{
          font-size: 15px;
        }
      
        .img{
          max-height: 150px;
          min-height: 150px;
        }
      
        }
      
        @media only screen and (max-width: 400px) {
          .img{
              overflow: hidden;
              position: relative;
                max-height: 70px;
              
              }
        }
      
      `}</style>
       </div>
      )
           
    }
  }


  
  export default RealEstat;