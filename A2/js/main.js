/*********************************************************************************
* WEB422 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: _arshia a kalkhorani___ Student ID: ____106391170__ Date: __1/31/2020_______
*
*
********************************************************************************/ 
let saleData =[];
let page = 1;
let perPage = 10;


    let saleModelBodyTemplate = _.template(`
    
            
            <h4>Customer</h4>
            <strong>Email: </strong><%- clickedSale.customer.email%><br>
            <strong> age: </strong><%- clickedSale.customer.age%><br>
            <strong> Satisfaction:  </strong><%- clickedSale.customer.satisfaction%>/5<br>
            <br><br>
            <h4>Item: $<%- clickedSale.total.toFixed(2)%></h4>
            <table class="table">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            <%_.forEach(clickedSale.items, function(item) {%>
            
                <tr> 
                    <td><%-item.name%></td>
                    <td><%-item.price%></td>
                    <td><%-item.quantity%></td>
                </tr>
            <% });%>
            </tbody>
            </table>`); 
        
        
        function getSaleModelById(id) {
            console.log("getSaleModelById L:48");
            let saleClone = null;
            for (let i = 0; i < saleData.length; i++) {
                if (saleData[i]._id == id) {
                    saleClone = _.cloneDeep(saleData[i]);
                }
            }
            return saleClone;
        }


        //this function initiates the DB fetch
    function initializeModel(){
        console.log("initializeModel L:61");
        fetch(`https://still-wave-48213.herokuapp.com/api/sales?page=${page}&perPage=${perPage}`)
      .then((response )=>{
        return response.json();
       
      })
      .then((myJson) => {
       
        saleData = myJson;//savesthe ifo into sales data
        
        console.log("saleData",saleData);
        
        
        let template = saleTableTemplate({saleData:saleData}); 
        $("#sale-table tbody").html(template);   
        $("#current-page").html(page);
    })
    .catch(err=>{console.log(`error`,err)});
      
    }


    //i used _.size inside the lodash template to find the size of the items array
    let saleTableTemplate = _.template(
        `
            <% _.forEach(saleData, function(sales) { %>
                <tr data-id=<%- sales._id %> >
                <td><%- sales.customer.email %></td>
                <td><%- sales.storeLocation %></td>
                <td><%- _.size(sales.items)%></td>
                <td><%- moment.utc(sales.saleDate).local().format('LLLL')%></td> 
                </tr>
                <% }); %>`);
        
    $(function(){//document.ready min file
        initializeModel();//import data from database put them into sale data
        
        
        $("#sale-table tbody").on("click", "tr", function(e){
            
            let saleid = $(this).attr("data-id");
            let clickedSale = saleData.find(s=>s._id == saleid);
            console.log("clickedSale L:104 =", clickedSale);
            let salemodel = getSaleModelById($(this).attr("data-id")); 
            console.log(salemodel);
            clickedSale.total = 0;
            for(i = 0; i <= _.size(clickedSale.items);i++){//take items from the clicked and calculate total cost
                clickedSale.total+=_.size(clickedSale.items[i])*clickedSale.items[i].tags.price;
            } 
            $("#sale-modal modal-title").html(`Sale: ${clickedSale._id}`);
            $("#sale-modal modal-body").html(saleModelBodyTemplate(clickedSale));
            $("#sale-modal").modal({
                backdrop: 'static',
                keyboard: 'false'
            });
            $("#previous-page").on("click","span", function(){
                if(page > 1){
                    page--;
                    initializeModel();
                }

            })
            $("#next-page").on("click","span", function(){
                
                    page++;
                    initializeModel();
                

            })

        });




    });
