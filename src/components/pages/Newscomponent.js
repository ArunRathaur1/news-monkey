import React, { Component } from 'react'
import Newitem from './Newitem';
import Spinner from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export default class Newscomponent extends Component {
    article= [
        {
            "source": {
                "id": null,
                "name": "CleanTechnica"
            },
            "author": "Jennifer Sensiba",
            "title": null,
            "description": null,
            "url": null,
            "urlToImage": null,
            "publishedAt": "2023-12-21T07:30:25Z",
            "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nElectrify America recently released a report on progress made in California. In the report, the company updat… [+4574 chars]"
        }
    ];
    static defaultProps={
        catogry:"sports",
        pagesize:'5'
    }
    static propTypes={
        catogry:PropTypes.string,
        pagesize:PropTypes.number
    }
    constructor( props){
        super();
        this.state={
            article:this.article,
            page:1,
            data:"",
            loading:false
        }
        document.title=props.title+"-NewsMoneky"
    }
     printitem=(element)=>(
        <div key={element.url?element.url:"12"}><Newitem authername={element.author?element.author:"Unknown"} title={element.title?element.title:"Null"} description={element.description?element.description:"Null"} image={element.urlToImage?element.urlToImage:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} imageurl={element.url?element.url:"/" }></Newitem></div>
     )
     async componentDidMount(){
        let url=`https://newsapi.org/v2/everything?q=${this.props.catogry}&from=2023-11-24&sortBy=publishedAt&apiKey=228a3007222b44a38d4c1f656e4268d1&page=${this.state.page}&pageSize=${this.props.pagesize}`;
        this.setState({loading:true});
        let fectdata=await fetch(url);
        let parseddata= await fectdata.json();
        this.setState({data:parseddata});
            this.setState({article:parseddata.articles});
            this.setState({loading:false}); 
     }  
    fetchMoreData=async()=>{
    console.log("next Page");
    let url=`https://newsapi.org/v2/everything?q=${this.props.catogry}&from=2023-11-24&sortBy=publishedAt&apiKey=228a3007222b44a38d4c1f656e4268d1&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true} )   
    let fectdata=await fetch(url);
        let parseddata= await fectdata.json();
        this.setState({
            article:this.state.article.concat(parseddata.articles),
            page:this.state.page+1,
            loading:false
        })
   }
  render() {
   let{title}=this.props
    return (
        <>
        <h1 style={{textAlign:"center"}}>NewsMoneky-Top Headlines on {title}</h1>
            <div className="text-center">
        
        </div>
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length!==this.state.page}
          loader={this.state.loading===true &&<Spinner style={{width:"5cm"}}></Spinner>} >
             <div style={{display:"flex",flexWrap:"wrap"}}>
             {this.state.article.map(this.printitem)}
            </div>
        </InfiniteScroll>
     
      </>
    )
  }
}
