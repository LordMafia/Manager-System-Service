const dataSelectItens = {
    "Unhas": ["Completo", "n2", "n3", "n4", "n5"],
    "Cabelos": ["c1", "c2", "c3", "c4", "c5"],
    "Maquiagem": ["m1", "m2", "m3", "m4", "m5"],
};


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


populateProductSelect();