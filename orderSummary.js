var tellimus = {  //objerct
    "id": 2113, 
    "orderNumber": "E210126001",  // property
    // key  (index)     :   value
    "createdAt": "2021-01-26 16:04:24", 
    "clientName": "Kalle Tali", 
    "deliveryType": "Omniva smartpost", 
    "deliveryValue": 178, 
    "rows": [ // array
      { 
        "article_id": 31, 
        "name": "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W", 
        "product_code": "257549", 
        "price": 49.1666666667, 
        "amount": 1, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23420, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk", 
        "product_code": "355836", 
        "price": 5.0666666667, 
        "amount": 2, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23421, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk", 
        "product_code": "000000000501267301", 
        "price": 5.825, 
        "amount": 1, 
        "vat": 0.2 
      } 
    ] 
  } 
  let order_total = 0
for (let i = 0; i < tellimus.rows.length; i++) {
    const product_row = tellimus.rows[i];
    let row_total = product_row.price * product_row.amount*(1+product_row.vat)
    console.log(product_row.name+ "\t\t\t"+ product_row.price.toFixed(2) + "€" +"\t" +product_row.amount + "\t"+row_total.toFixed(2) + "€" +"\t")
    order_total += row_total
    
}

console.log("summa: "+order_total.toFixed(2) + "€")
