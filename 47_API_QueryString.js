let url = "http://universities.hipolabs.com/search?name=";
// let country = "nepal"
let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    let country = document.querySelector("input").value;
    console.log(country);
    getColleges(country)
});



async function getColleges(country){
    try{
        let res = await axios.get(url + country);
        console.log(res);
    }
    catch(e){
        console.log("error: ", e);
        return [];
    }
}