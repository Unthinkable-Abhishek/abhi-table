import React from 'react';
import PropTypes from 'prop-types';
import './table.css';

const Heading = ({headers, backgroundColor,  sortData }) => {

  return (
    <tr style={backgroundColor && {backgroundColor}}>
      { headers.map((item, index) => {
        if(item === "Rating"){
          return (
            <td key={index} style={{alignItems: 'center', padding: '0px'}}> {item} <img style={{marginLeft: '3px'}} src={ require('./assets/sortByIcons.png') }  /> </td>
          )
        }else{
          return <td key={index}>{item}</td>
        }
        })
      }
    </tr>
  )
}

const Rows = ({data}) => {
  return (
    data.map((item, index) => {
      const arr = Object.values(item);
      return (
        <tr key={index}>
          {arr.map((value, index)=>{
            return (
              <td key={index}>{value}</td>
            )
          })}
        </tr>
      )
    })
  )
}


export const Table = ({ primary, backgroundColor, ...props }) => {
  const {headers, data} = props;
  // const [sort, setSort] = useState(false);

  // function sortData () {
  //   setSort(!sort);
  //   data.sort((a, b) => a["Rating"] - b["Rating"]);
  // }

  return (
    <table
        type="table"
        className={['storybook-table--primary']}
        {...props}
      > 
      <thead>
        <Heading headers={headers} backgroundColor={backgroundColor} data={data}   />
      </thead>
      <tbody>
        <Rows data={data}/>
      </tbody>
    </table>
  );
};

Table.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

Table.defaultProps = {
  backgroundColor: null,
  primary: false,
};
