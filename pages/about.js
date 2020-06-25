import Layout from '../components/Layout';
import Image from 'react-bootstrap/Image';




export default function About() {
  return (

      <Layout>      
      	<section className="my-5">
      		<h1 className="mx-3 mx-sm-0 mb-4">About</h1>

		      <style jsx>{`
				.about-profile {
					min-width: 35%;
				}

				.about-profile img {
					max-width: 100%;
				 	object-fit: cover;
				}

				@media only screen 
				  and (min-width: 768px)  {
					.about-profile img {
						max-height:none;
						max-width: 100%;
				    	
					}
				}
		      `}</style>  

			<article className="d-flex flex-column flex-md-row px-3 py-4">

	          <div className="d-flex align-items-center about-profile">
				  <Image src="/img/profile-sith.jpg" fluid />
	          </div> 

	          <div className="d-flex flex-column align-items-center justify-content-center pl-md-4 pt-4 pt-md-0">
	            <p>
	              This is the personal site of Suhail Younus of Chicago, IL (South Loop for life).</p>
	            <p> 
	              I don't exist on any of the popular social networking sites but this is one way that I'm accessible. 
	              There are others out there with the same name - they should not be trusted.</p>
	            <p>Some of my hobbies include playing guitar, inline-skating, snowboarding and drawing.
	              I'm also a big fan of modern architecture and Modern American art. My favorite artist is Edward Hopper, 
	              whose work I appreciate on many levels.</p>
	            <blockquote>
	              <i>"No amount of skillful invention can replace the essential element of imagination."</i>
	              <br/>
	              - Edward Hopper (1882 - 1967)
	            </blockquote>
	          </div>

	        </article>

      	</section>
      	<hr/>
    </Layout>
  );
}