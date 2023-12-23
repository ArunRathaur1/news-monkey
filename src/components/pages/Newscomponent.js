import React, { Component } from 'react'
import Newitem from './Newitem';
import Spinner from './spinner';
import PropTypes from 'prop-types'

export default class Newscomponent extends Component {
    article= [
        {
            "source": {
                "id": null,
                "name": "CleanTechnica"
            },
            "author": "Jennifer Sensiba",
            "title": null,
            "description": "Electrify America recently released a report on progress made in California. In the report, the company updates us on how ... [continued]\nThe post Electrify America Gives Latest Report on Efforts in California appeared first on CleanTechnica.",
            "url": "https://cleantechnica.com/2023/12/21/electrify-america-gives-latest-report-on-efforts-in-california/",
            "urlToImage": "https://cleantechnica.com/wp-content/uploads/2023/12/Kia-EV9-at-Electrify-America-station-press-photo-2000x1000-1-800x400.png",
            "publishedAt": "2023-12-21T07:30:25Z",
            "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nElectrify America recently released a report on progress made in California. In the report, the company updat… [+4574 chars]"
        }
    ];
    static defaultProps={
        country:'in',
        pagesize:'5',
    }
    static propTypes={
        country:PropTypes.string,
        pagesize:PropTypes.number
    }
    constructor(){
        super();
        this.state={
            article:this.article,
            page:1,
            data:"",
            loading:false
        }
    }
     printitem=(element)=>(
        <div key={element.url}><Newitem title={element.title?element.title:"Null"} description={element.description?element.description:"Null"} image={element.urlToImage?element.urlToImage:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} imageurl={element.url?element.url:"/"}></Newitem></div>
     )
     async componentDidMount(){
        let url=`https://newsapi.org/v2/everything?q=${this.props.catogry}&from=2023-11-23&sortBy=publishedAt&apiKey=228a3007222b44a38d4c1f656e4268d1&page=1&pageSize=${this.props.pagesize}`;
        this.setState({loading:true});
        let fectdata=await fetch(url);
        let parseddata= await fectdata.json();
        this.setState({data:parseddata});
        this.setState({article:parseddata.articles});
        this.setState({loading:false});
     }  
    previouspage=async()=>{
    console.log("Prevous page");
    let url=`https://newsapi.org/v2/everything?q=${this.props.catogry}&from=2023-11-23&sortBy=publishedAt&apiKey=228a3007222b44a38d4c1f656e4268d1&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true})
    let fectdata=await fetch(url);
    let parseddata= await fectdata.json();
    this.setState({
        article:parseddata.articles,
        page:this.state.page-1,
        loading:false
    })
   }
    nextpage=async()=>{
    console.log("next Page");
    let url=`https://newsapi.org/v2/everything?q=${this.props.catogry}&from=2023-11-23&sortBy=publishedAt&apiKey=228a3007222b44a38d4c1f656e4268d1&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true})    
    let fectdata=await fetch(url);
        let parseddata= await fectdata.json();
        this.setState({
            article:parseddata.articles,
            page:this.state.page+1,
            loading:false
        })
   }
  render() {
   
    return (
        <>
            <div className="text-center">
        {this.state.loading===true &&<Spinner style={{width:"5cm"}}></Spinner>}
        </div>
      <div style={{display:"flex",flexWrap:"wrap"}}>
        {this.state.article.map(this.printitem)?this.state.article.map(this.printitem):"The Article is Not There"}
      </div>
      <div className="d-flex justify-content-around" style={{marginBottom:"30px"}}>
      <button className="btn btn-primary" disabled={this.state.page<= 1} onClick={this.previouspage} >Previous</button>
      <button  className="btn btn-primary" onClick={this.nextpage} disabled={this.state.page+1>Math.ceil(this.state.data.totalResults/this.props.pagesize)}>Next</button>
      </div>
      </>
    )
  }
}
