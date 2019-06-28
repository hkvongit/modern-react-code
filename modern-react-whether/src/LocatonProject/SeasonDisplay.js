import React from 'react'

const seasonConfig={
    summer:{
        text:"let's hit the beach",
        iconName:"sun"
    },
    winter:{
        text:"burr its chilly",
        iconName:"snowflake"
    }
}

const getSeason=(lat, month)=>{
    if(month>=3 && month<=8){
        return(lat>0 ? 'summer' : 'winter')
    }else{
        return(lat<0 ? 'winter' : 'summer')
    }
}

const SeasonDisplay=(props)=>{
    console.log(props.lat)
    const season = getSeason(props.lat, new Date().getMonth())
    console.log(season)
    const{iconName, text}=seasonConfig[season]
    // const season_quote=(season === 'winter' ? 'blurr its chilly' : 'lets hit the beach')
    // const iconName =(season === 'winter' ? 'snowflake' : 'sun')
    // We could refactor this ternery operator code
    
    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
        
    )
}

export default SeasonDisplay