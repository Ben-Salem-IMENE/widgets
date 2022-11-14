import React , {useState} from "react";

const Accordian = ({items}) =>{
    const [activeIndex , setActiveIndex] = useState(null);

    const onTitleClicked =(i)=>{
       setActiveIndex(i);
    };
    
    const rendredItems = items.map((item , index)=>{
        const active = index === activeIndex ? "active": "";
        return (
            <React.Fragment  key={item.title}>
                <div onClick={()=> onTitleClicked(index)} className={"title " + active}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    {item.component}
                </div>
            </React.Fragment>  
        );       
    });

    return (
    <div className="ui styled accordion container">
        {rendredItems}

    </div> 
    );
}
export default Accordian;