import Chatcord from "../assets/png/chatcord.avif";
import Moviesverse from "../assets/png/moviesverse.avif";
import Ecommerce from "../assets/png/ecommerce.avif";

export const projectsData = [
	{
		id: 1,
		projectName: "Chatcord",
		projectDesc:
			"This Project is a Web app for connecting and chat with friends.",
		tags: ["React", "Material UI", "Node", "Express", "MongoDB"],
		code: "https://github.com/L-A-L-I-T/Chatcord",
		demo: "https://mern-chatcord.herokuapp.com/",
		image: Chatcord,
	},
	{
		id: 2,
		projectName: "Moviesverse",
		projectDesc:
			"This project is a Platform were user can get all the information about a particular movies, web series or actors.",
		tags: ["React", "Material Ui", "TMDB API"],
		code: "https://github.com/L-A-L-I-T/Moviesverse",
		demo: "https://moviesverse.netlify.app/movies",
		image: Moviesverse,
	},
	{
		id: 3,
		projectName: "Ecommerce App",
		projectDesc:
			"This project is about an Ecommerce app to buy and sell goods based on Blockchain.",
		tags: ["Solidity", "Metamask", "Javascript", "HTML", "CSS"],
		code: "https://github.com/L-A-L-I-T/BlockChainEcommerce",
		demo: "",
		image: Ecommerce,
	},
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
