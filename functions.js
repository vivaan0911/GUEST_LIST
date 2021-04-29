guest_names_array=[];
guest_names_withoutComma_array=[];
sorted_names_withoutComma=[];
function submit_show(){
    var guestName= document.getElementById("person_name_input").value;
    guest_names_array.push(guestName);
    document.getElementById("display_list_with_commas").innerHTML=guest_names_array;
}
function show_without_comma(){
    guest_names_withoutComma_array=guest_names_array.join("<br>"+" "+"<br>");
    document.getElementById("display_list_without_commas").innerHTML=guest_names_withoutComma_array;
}
function sorting(){
    guest_names_array.sort();
    sorted_names_withoutComma=guest_names_array.join("<br>"+" "+"<br>");
    document.getElementById("display_sorted_list").innerHTML=sorted_names_withoutComma;
}
function search(){
    var search= document.getElementById("search_name_input").value;
    var found=0;
    var j;
    for (j=0; j<guest_names_array.length; j++){
        if (search==guest_names_array[j]){
            found=found+1;
        }
    }
    document.getElementById("display_time_search").innerHTML="Entered name is found "+found+" time/s."
}