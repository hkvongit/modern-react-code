import React from 'react'

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
    const season_quote=(season === 'winter' ? 'blurr its chilly' : 'lets hit the beach')
    const icon=(season === 'winter' ? 'snowflake' : 'sun')
    
    return(
        <div>
            <i className={`${icon} icon`}/>
            <h1>{season_quote}</h1>
            <i className={`${icon} icon`}/>
        </div>
        
    )
}

export default SeasonDisplay