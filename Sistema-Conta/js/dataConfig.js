const dataSelectItens = {
    "Unhas": ["Mão", "Pé", "Completo"],
    "Sobrancelha": ["Rena", "Correção", "Detalhe", "Normal/Completo"],
    "Depilação": ["Parte superior", "Parte inferior", "Intimo", "Completo"],
};

const dataMaterialSKU = [
    "Alicate",
    "Algodão",
    "Lixa",
]


function populateProductSelect() {

    const select = document.getElementsByName('productId')[0];
    console.log(select);
    
    for (const category in dataSelectItens) {
        const optgroup = document.createElement('optgroup');
        optgroup.label = category;
        console.log(optgroup);
        

        dataSelectItens[category].forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.text = item;
            console.log(option);
            
            optgroup.appendChild(option);
        });

        select.appendChild(optgroup);
    }
}
// populateProductSelect();


function populateServiceSelect() {

    const select = document.getElementsByName('typeService')[0];
    
    for (const category in dataSelectItens) {
        const optgroup = document.createElement('optgroup');
        optgroup.label = category;        

        dataSelectItens[category].forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.text = item;
            
            optgroup.appendChild(option);
        });

        select.appendChild(optgroup);
    }
}

populateServiceSelect();


function populateMaterialSelect(){
    const select = document.getElementsByName('materialId');

    for(const item in dataMaterialSKU){
        console.log(item);
        
        const option = document.createElement('option');
        option.value = item;
        option.text = item;
        select.appendChild(option)
    }
}

populateMaterialSelect();