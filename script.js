// ekleme

// eleman seçimi 

const form=document.querySelector("form");
const input=document.querySelector("#txtTaskName");
const btnekle=document.querySelector("#btnAddNewTask");
const btndeleteall=document.querySelector("#btnDeleteAll");
const liste=document.querySelector("#task-list");
const item =["Todo1","Todo2","Todo3","Todo4"];

//load items


eventlisteners();

function eventlisteners() {
    // submit olup olmadığını anlıyor
    form.addEventListener("submit",addNewItem)
    //delete item
    liste.addEventListener("click",deleteItem)
    // tümünü sil
    btndeleteall.addEventListener("click",deleteall)
}

function addNewItem(e) {
  
if(input.value===""){
    alert("Lüttfen Bir İtem Ekleyiniz")
}
// li oluşturma
const li = document.createElement("li");
li.className="list-group-item list-group-item-secondary";
li.appendChild(document.createTextNode(input.value));
// a etiketini oluşturma
const a=document.createElement("a");
a.setAttribute("href","#");
a.className="delete-item float-right";
a.innerHTML='<i class="fas fa-times"></i>';
li.appendChild(a);
liste.appendChild(li);
    e.preventDefault();
}

// eleman silme
function deleteItem(x) {
    if(confirm("Silmek İstediğinize Emin Misiniz?"))
   if(x.target.className==="fas fa-times"){
        x.target.parentElement.parentElement.remove();
   }

}
// tüm elemanları silme
function deleteall(x) {
   if(confirm("Tüm Elemanları Silmek İstediğinize Emin Misiniz")){
    liste.innerHTML="";
   }
  
}