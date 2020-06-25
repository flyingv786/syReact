import Layout from '../components/Layout';

export default function Contact() {
  return (
      <Layout>
      	<section className="my-5">
      		<h1 className="mx-3 mx-sm-0 mb-4">Contact</h1>
			
			<article className="d-flex flex-column slice one px-3 py-4">
            	<p>Feel free to contact me.</p>
            	<h3><a href="mailto:info@suhailyounus.com">info@suhailyounus.com</a></h3>
        	</article>      		
      	</section>
      	<hr/>
    </Layout>
  );  
}