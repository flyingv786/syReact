import Link from 'next/link';
import {useEffect, useState} from 'react';
import Layout from '../components/Layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function traderBlock({ data }) {
			
    let output = [];			
  	for (const [key, value, index] of Object.entries(data)) {
  		console.log(`${key}: ${value}`);
  		output.push(<Col key={key}>{key}: {value}</Col>);
	}			

	return (output)
}

{/* This gets called on every request */}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://sandbox.iexapis.com/stable/stock/twtr/delayed-quote?token=Tsk_3b9c358ac1b345dc9088102fe06f6e32`)
  //const res = await fetch(sampleJson)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
