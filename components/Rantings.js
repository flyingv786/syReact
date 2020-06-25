
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Rantings = props => (
      	<section className="rantings my-5">
      		<h1 className="mx-3 mx-sm-0 mb-4">Rantings</h1>


			<article className="px-3 py-4 mb-5">
		        <h2 className="my-3">Hello Again</h2>
		        <time className="mb-3">06-23-2020</time>	        
		        <p>I've completely overhauled the website (under the hood) to use ReactJS on the Next framework. It's been deployed as a 
		        static export (to a shared host without Node), pre-rendered on the server-side.</p> 
		        <p>
		        I've also decided to continue using Bootstrap as a front-end framework which made it easy to maintain the previous site's 
		        look and feel with almost no need to refactor mark-up/CSS.
		         </p>
	      	</article>        		

			<article className="px-3 py-4 mb-5">
		        <h2 className="my-3">In Memory of the Great Kurt Cobain (1967 - 1994)</h2>
		        <time className="my-3">04-07-2019</time>
		        <p>
		          This is in honor of one of my biggest creative inspirations - a true <i>"renegade of his time and age".</i>
		        </p>
		        <p>
		          My brief cover of Nirvana's "Love Buzz":
		        </p>

		        <audio controls="controls" preload="true">
		            <source src="http://suhailyounus.com/msc/love-buzz.mp4" type="audio/mp4"/>
		        </audio>  
	      	</article>	

			<article className="px-3 py-4 mb-5">
		        <h2 className="my-3">Hello to All Worlds</h2>
		        <time className="mb-3">03-12-2018</time>	        
		        <p>It's been some time but I finally got around to redoing my personal site. 
		          It's a work in progress. I'll be iterating and evolving this as I can.</p>
	      	</article>   

	      	<hr/>   

      	</section>

);

export default Rantings;