menu_list_array = [
    "Farm House Pizza",
    "Paneer Tika Pizza",
    "Chicken Tandoori Pizza",
    "Deep dish pizza",
    "Deluxe Veggie Pizza",
    "Veg Extravaganza Pizza",
];
function getmenu(){
    var htmldata;
    menu_list_array.sort();
    for(var i=0; i<menu_list_array.length;i++){
        htmldata= htmldata+ '<li>' + menu_list_array + '</li>';
    };
    htmldata + "<ol>";
    document.getElementById("display_menu").innerHTML= htmldata;
};
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata= "<section class='cards'>";
    for(var i=0;i<menu_list_array.length;i++){
        htmldata= htmldata + '<div class="cars">' + '<img src="images/pizzaImg.png">' + '</div>';
    };
    htmldata=htmldata+'</section>';
    document.getElementById("display_addmenu").innerHTML= htmldata;
};