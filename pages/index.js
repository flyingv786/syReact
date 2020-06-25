import Link from 'next/link';
import Layout from '../components/Layout';
import Rantings from '../components/Rantings';
import Image from 'react-bootstrap/Image';


  return (
    <Layout>
      	<section className="my-5">
      		<div className="hero">
      			<div>
          			<h1 className="m-2">This random image looks better with meaningless text..</h1>
        		</div>
      			<Image src="/img/water-and-sky.png" fluid />
      		</div>
      	</section>
      	<hr/>  
      	<Rantings/>
    </Layout>
  );
}



