import React from 'react';
import { makeStyles, fade, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles(theme => ({
    search: {
        borderRadius: 2,
        marginLeft: 10,
        width: '38%',
        backgroundColor: '#fff',
        display: 'flex'
      },
      searchIcon: {
        marginLeft: 'auto',
        padding: 5,
        display: 'flex',
        color: 'blue'
      },
      inputRoot: {
        fontSize: 'unset',
        width: '100%'
      },
      inputInput: {
        paddingLeft: 20,
        width: '100%',
    },
    list: {
      position: 'absolute',
      color: '#000',
      background: '#FFFFFF',
      marginTop: 36
    }
}))

const SearchBar = () => {
    const classes = useStyle();

  return (
    <div className={classes.search}>
        <InputBase
        placeholder="Search for products, brands and more"
        classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        />
        <div className={classes.searchIcon}>
              <SearchIcon className="{'color='black'}"/>
        </div>
    </div> 
  );
};

export default SearchBar;
