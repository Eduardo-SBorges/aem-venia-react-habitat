import React from 'react';
import PropTypes from 'prop-types';

const Date = ({ date }) => {
    const array = date.split(',');
    //console.log(array);

    return (
        <div>
            <h1>Calendário</h1>
            <h2>{`${array[13].slice(-4)}/${array[17].slice(-2)}/${array[14].slice(-2)}`}</h2>
            <h2>{array[13]}</h2>
            <h2>{array[14]}</h2>
            <h2>{array[17]}</h2>
        </div>
    );
};

Date.propTypes = {
    date: PropTypes.string
};

Date.defaultProps = {
    date: "java.util.GregorianCalendar[time=1658458800000,areFieldsSet=true,areAllFieldsSet=true,lenient=false,zone=sun.util.calendar.ZoneInfo[id='GMT-03:00',offset=-10800000,dstSavings=0,useDaylight=false,transitions=0,lastRule=null],firstDayOfWeek=1,minimalDaysInFirstWeek=1,ERA=1,YEAR=2022,MONTH=6,WEEK_OF_YEAR=30,WEEK_OF_MONTH=4,DAY_OF_MONTH=22,DAY_OF_YEAR=203,DAY_OF_WEEK=6,DAY_OF_WEEK_IN_MONTH=4,AM_PM=0,HOUR=0,HOUR_OF_DAY=0,MINUTE=0,SECOND=0,MILLISECOND=0,ZONE_OFFSET=-10800000,DST_OFFSET=0]"
};

export default Date;
