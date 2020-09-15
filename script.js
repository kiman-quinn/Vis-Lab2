// TODO: load the dataset 

let attractions;

fetch("attractions.json")
    .then(response => response.json())
    .then(data => {
        attractions = data;

    function filterData(category) {
        console.log(category);

        //All attractions selected then find top 5
        if (category == "all"){
            attractions.sort((a,b) => {
                return a.Visitors - b.Visitors;
            });

            let data = attractions.reverse().slice(0,5);
            renderBarChart(data);
        }
        else{
            //Filter attractions by the selected category -- else if all not selected
            let filterAttractions = attractions.filter(attractions => attractions.Category == category);

            filterAttractions.sort((a,b) => {
            return a.Visitors - b.Visitors;
            });
            let data = filterAttractions.reverse().slice(0,5);
            renderBarChart(data)
        }

    }
        
    // TODO: Define an event listener for the dropdown menu
    //       Call filterData with the selected category

    let selectElement = document.querySelector("#attraction-category");
    selectElement.addEventListener('change', function(event){
        console.log(event.target.value);
        attractions.filter(filterData(event.target.value));
    });




})

