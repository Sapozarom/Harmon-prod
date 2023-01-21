


// const defaultRoute = 'http://127.0.0.1/api';
const defaultRoute = 'http://harmon.sasartele.pl/api';


/**
 * handles most of the website data fetch
 * 
 * @param {string} route 
 * @returns JSON | JSON response fron asked route
 */
const getData = async (route) => {
    const dataRoute = defaultRoute + route;
    const response = await fetch(dataRoute);
    return response.json();
}

export default getData;