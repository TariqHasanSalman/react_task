import props from "../data/data" /* readig real-estats from json file */
import RealEstat from "./real-estat"
import { useState } from 'react'

export default function  Home(){
  let [PageNum, setPageNum] = useState(0);

  function setbuttons(){/* creating group of buttons to move through pages */
    let list=[];
     for (let i = 0; i < props.length/8; i++) {
             list.push(
                 <button key={i} onClick={() => pressButon(i)} className="btn btn-primary">{i+1}</button>
             )
     }
     return list;
 
 }
 function pressButon(i){/* changing the state when a page button pressed*/
setPageNum(PageNum=i)
 }

  return(
    <div className="display">
        <div className="proportes">{
        props.slice(PageNum*8,PageNum*8+8).map(item=>{/* looping through real-estats and slice its array based on pageNumber */
            return(
                <div className="item" >
            <RealEstat key={item.id} item={item}></RealEstat> {/* sending each element of the array to the real-estat component */}
            
            </div>
                )
        })}
        </div >
        <div className="buttonsGroup">
           
        { setbuttons() /*this function returns list of buttons */}

        </div>
     <style jsx>{`
                .display{
                    display:flex;
                    flex-direction:column;
                }
                
                .buttonsGroup{
                    display:flex;
                    flex-direction:row;
                    margin-left:auto;
                    margin-right:auto;
                    margin-top :3%;
                    margin-bottom:2%;
                   }

                  .proportes{
                  overflow:auto;
                  display: flex;
                  max-width:92%;
                  margin-right:auto;
                  margin-left:auto;
                  margin-top:3%;
                  flex-direction: row;
                  flex-wrap: wrap;
                  justify-content: space-around;
                  width:100%
                  }
                  .item{
                    width:23%
                  }
                  
                  @media only screen and (max-width: 700px) {
                    .main-flex{
                      width: 100%;
                      display: flex;
                      flex-direction: column;
                  
                    }
                  
                    .flexitems{
                      max-width: 99vw;
                      min-width: 99vw;
                  
                    }
                    .search-container{
                      min-width: 50%;
                      max-width: auto;
                      display: flex;
                      flex-direction: row;
                      justify-content: space-around;
                      margin-right: auto;
                      margin-left: auto;
                    }
                    app-search{
                      width: 100%;
                    float: right;
                    }
                    .container{
                      margin-top: 0;
                    }
                  }
                  @media only screen and (max-width: 700px) {
                    .filters{
                      font-size: 1vw;
                    }
                  .item{
                    width: 45%;
                    margin-left: 2%;
                  }
                  
                  }
                  @media only screen and (min-width: 2000px) {
                  
                    .item{
                      width: 350px !important;
                      margin-left: 2%;
                    }
                  
                    }
                
                
                ` }
                
            </style>
    </div>
  )
}


   
