function searchShow() {
    fetch('./events.json')
        .then((res) => res.json())
        .then((jsonData) => {
            const results = jsonData.map(element => element.show.title);
            renderResults(results);
            document.getElementById("errorMessage").innerHTML = "";
        })
        .catch((error) => {
            document.getElementById("errorMessage").innerHTML = error;
            renderResults([]);
        });
    }
    
        function renderResults(results) {
            const list = document.getElementById("resultsList");
            list.innerHTML = "";
            results.forEach(result => {
                const element = document.createElement("li");
                element.innerText = result;
                list.appendChild(element);
            });
        }
        
        let searchTimeoutToken = 0;
    
        window.onload = () => {
            const searchFieldElement = document.getElementById("searchField");
            searchFieldElement.onkeyup = (event) => {
                
                clearTimeout(searchTimeoutToken);
    
                if(searchFieldElement.value.trim().length === 0) {
                    return;
                }
    
                searchTimeoutToken = setTimeout(() => {
                    searchShow(searchFieldElement.value);
                }, 250);
            };
        }
    
           // const arrayEvents = dataObject.results;
        
    
    
    
        //.then((response) => response.json())
        //.then((json) => console.log(json));
       // .then(renderEvents)
        //.catch(console.error);
    
    //function renderEvents(dataObject) {
           // console.log(dataObject);