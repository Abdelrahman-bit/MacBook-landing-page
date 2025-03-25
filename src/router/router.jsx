import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import FeaturePage from "../pages/featurePage";
import ContactPage from "../pages/contactPage";
import data from "../data";


const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/feature/:id",
		element: <FeaturePage />,
		loader: ({ params }) => {
			const feature = data.features.find((elem) => elem.id === params.id);
			const { title, content, pageImage } = feature;
			const post = {
				title,
				content,
				pageImage,
			};
			console.log(post);
			return post;
		},
	},
	{
		path: "/contact",
		element: <ContactPage />,
	},
	{ basename: "/MacBook-landing-page" },
]);

const Router = ()=>{
   return <RouterProvider router={routes} />
}

export default Router;