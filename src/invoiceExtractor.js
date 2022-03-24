const res = {"1": {"xmin": 0.0, "ymin": 0.0, "xmax": 1654.0, "ymax": 1893.0103759765625, "confidence": 0.49591732025146484, "class": 9, "name": "Table", "contents": ""}, "2": {"xmin": 0.7663371562957764, "ymin": 615.2965087890625, "xmax": 1632.3948974609375, "ymax": 1843.4058837890625, "confidence": 0.9461783766746521, "class": 9, "name": "Table", "contents": ""}, "3": {"xmin": 1186.614013671875, "ymin": 1875.664306640625, "xmax": 1585.37451171875, "ymax": 1920.8636474609375, "confidence": 0.9162917733192444, "class": 8, "name": "Total", "contents": "AUD 5,060.50"}, "4": {"xmin": 961.878662109375, "ymin": 417.21502685546875, "xmax": 1157.7752685546875, "ymax": 481.842041015625, "confidence": 0.8761125206947327, "class": 11, "name": "ABN", "contents": "55 605 733 408"}, "5": {"xmin": 962.17041015625, "ymin": 224.37405395507812, "xmax": 1163.8662109375, "ymax": 288.8261413574219, "confidence": 0.8696225881576538, "class": 7, "name": "InvoiceNo", "contents": "Number INV-1232"}, "6": {"xmin": 260.5281677246094, "ymin": 239.7905731201172, "xmax": 544.9956665039062, "ymax": 284.0588073730469, "confidence": 0.7877668142318726, "class": 5, "name": "Name", "contents": "invoices@leapin.com.au"}, "7": {"xmin": 964.8424072265625, "ymin": 143.99789428710938, "xmax": 1129.811767578125, "ymax": 209.01441955566406, "confidence": 0.7314149737358093, "class": 6, "name": "InvoiceDate", "contents": "25 Aug 2021"}, "8": {"xmin": 260.5281677246094, "ymin": 239.7905731201172, "xmax": 544.9956665039062, "ymax": 284.0588073730469, "confidence": 0.7877668142318726, "class": 5, "name": "firstName", "contents": "invoices@leapin.com.au"}, "9": {"xmin": 260.5281677246094, "ymin": 239.7905731201172, "xmax": 544.9956665039062, "ymax": 284.0588073730469, "confidence": 0.7877668142318726, "class": 5, "name": "lastName", "contents": ""}, "10": {}}


// console.log(res);
// const names = res.name;
// if (names) {
//   const values = { ...res };
//   delete values.name;

//   console.log(values);

//   let results = {};
//   for (const index of Object.keys(names)) {
//     let obj = {};
//     for (const data in values) {
//       obj[data] = values[data][index];
//     }
//     results[names[index]] = obj;
//   }

//   console.log(results);
// }
const  formatResponse =(response) =>{
  let results = {};
  Object.entries(response).forEach((entry)=>{
    const data = entry?.[1]
    if(data && data.contents !== ""){
      let obj = {};
      for ( const key in data){
        if(typeof(data[key])==="number"){
          obj[key] = { N :data[key].toString() };
        }else{
          obj[key] = { S :data[key] };
        }
      }
      results[data.name] ={ M: obj } 
    }
  })
  return results
}

formatResponse(res)