import React , {useState , useEffect} from "react";
import axios from "axios";
import '../style/style.css'

const Search =()=>{
    const [term , setTerm] = useState('');
    const [results , setResults] = useState([]);
    ///console.log(results);
    useEffect(()=>{
        const search = async () =>{
            const {data} =  await axios.get('https://en.wikipedia.org/w/api.php', {
                params :{
                    action : 'query',
                    list: 'search', 
                    origin: '*', 
                    format: 'json',
                    srsearch: term,
                },
            }); 
            //console.log(data);
            //console.log(data.query.search)
            setResults(data.query.search);            
        };
          
        
       const idTilmeout =  setTimeout(() => {
            if(term){
                search();
            }   
          }, 800);
          return () => clearTimeout(idTilmeout);
     }, [term]);

     const rendredResult = results.map((result) =>{
     
        return (
            <div className="item conatiner-item container" key={result.pageid}>
                <div className="right floated content">
                    <a className="ui button" target='_blank' href={`https://en.wikipedia.org?curid=${result.pageid}`}>GO! </a>
                </div>
                <div className="content">
                    <div className="header">
                        <h2>{result.title}</h2>
                        <span dangerouslySetInnerHTML={{__html:result.snippet}}/>                    
                 
                    </div>                  
                </div>
            </div>
        ); 

     });
    return (
        <div>
            <div className="ui form container">
                <div className="field">
                <label>Enter Search Term</label>
                <input className="input" value={term} onChange={e=>setTerm(e.target.value)} />
                </div>
            </div>   
            <div>
            {rendredResult}
            </div>       
        </div>
    );
};

export default Search;