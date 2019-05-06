import React, {Component} from 'react';

export class Golf extends Component {
    constructor(){
        super()
        this.state={
            golf:[]
        }
    }


getAllGolfs = ()=>{
  //this one gets the schedule for the year 
  //let url = 'https://statdata.pgatour.com/r/current/schedule-v2.json'

  //this one gets the current or historical data based on tid 
    let url = ' https://statdata.pgatour.com/r/480/leaderboard-v2mini.json'

    //this one recovers tournament id then json.tid gets the tournament id to insert into leaderboard api request
    //let url ='https://statdata.pgatour.com/r/current/message.json'

    //this one gets players mug shots 
    //let headshotUrl = 'https://pga-tour-res.cloudinary.com/image/upload/b_rgb:cecece,c_fill,d_headshots_default.png,f_jpg,g_face:center,h_65,q_auto,w_65/headshots_{player_id}.png"
    //this one gets you the weather https://www.pgatour.com/bin/data/feeds/weather.json/r480
    fetch(url)
    .then(response => response.json())
    .then(json => { console.log(json)
      //console.log(json.tid)

      //these pretty much get the info i want
      // console.log(json.leaderboard.tour_name)
     // console.log(json.leaderboard.players[0].player_bio)
      // console.log(json.leaderboard.players[0].rankings.cup_rank)
      // console.log(json.leaderboard.players[0].rankings.projected_cup_rank)
      // console.log(json.leaderboard.players[0].rankings.projected_cup_rank)
      // console.log(json.leaderboard.players[0].total)
       this.setState({
        golf: json
        
      })
      //callback(json)
    })
  }

  

  componentDidMount() {
   
    this.getAllGolfs()
    //onsole.log (this.state.golf)

  }
  render(){
    return(
      <h1>GOLF</h1>
    )
  }
  
}