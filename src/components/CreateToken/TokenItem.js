//Default
import React from 'react';
import { useState, useEffect } from 'react';

import feeInfo from './FeeInfo.js'

//Style
import { makeStyles } from '@material-ui/core/styles';
import Loader from '../Loader/Loader.js';
import CircularProgress from '@mui/material/CircularProgress';

// import Chip from '@mui/material/Chip';

//Group
import GridItem from '../Grid/GridItem.js';
import GridContainer from '../Grid/GridContainer.js';

import Card from '../Card/Card.js';
import CardHeader from '../Card/CardHeader.js';
import CardBody from '../Card/CardBody.js';
import CardAvatar from '../Card/CardAvatar.js';
import CardFooter from '../Card/CardFooter.js';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

//Input
import TextField from '@mui/material/TextField';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { Label, Input } from 'reactstrap';
import Radio from '@mui/material/Radio';
// import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Search from '@material-ui/icons/Search';
import Link from '@mui/material/Link';

//Component
import CustomInput from '../CustomInput/CustomInput.js';
import Button from '@mui/material/Button';

// import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Table from '../Table/Table.js';
import CircularProgressWithLabel from '../Progress/CircleProgress.js';

//Color
import Danger from '../Typography/Danger.js';
import Success from '../Typography/Success.js';
import Primary from '../Typography/Primary.js';
import Info from '../Typography/Info.js';

//Utility
import { ethers, BigNumber as EthersBigNumber } from 'ethers';

import { red, pink, purple, deepPurple, indigo, blue, green, lightGreen, deepOrange } from '@mui/material/colors';

//Icon
import ErrorIcon from '@material-ui/icons/Error';
import GetAppIcon from '@mui/icons-material/GetApp';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import CardIcon from '../../components/Card/CardIcon.js';

const styles = {
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0',
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
  },
};

const useStyles = makeStyles(styles);

export default function TokenItem(props) {
  const classes = useStyles();
  // console.log("token item test");
  const { itemcolor, name, symbol, balance, address, decimal, state, supply, type } = props;

  // console.log(name, symbol, balance, address, decimal, state, supply, type);

  return (
    <Card>
      <CardHeader color={itemcolor} stats icon>
        <CardIcon color={itemcolor}>
          {/* <Icon>content_copy</Icon> */}
          <AddModeratorIcon />
        </CardIcon>
        <Info>
          <p>{name}</p>
        </Info>
        <Primary>
          <h3>{symbol}</h3>
        </Primary>
      </CardHeader>
      <CardBody>
        <Info>Total Supply:</Info>
        {supply}
        <Info>Your Balance:</Info>
        {balance}
        <Info>Address:</Info>
        {address}
        <Info>Pause Fee:</Info>
        <Danger>{feeInfo.pause}</Danger>
        <Info>Blacklist Fee:</Info>
        <Danger>{feeInfo.blacklist}</Danger>
        <Info>Deflation Fee:</Info>
        <Danger>{feeInfo.deflation}</Danger>
        <p />
        <Divider textAlign="center"></Divider>
        <p />
        <Primary>{type}</Primary>
        {state}
      </CardBody>
    </Card>
  );
}
