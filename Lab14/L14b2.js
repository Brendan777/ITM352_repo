const fs = require('fs');

let filename = __dirname + '/user_data.json'; 

if (fs.existsSync(filename)) { 
    let data = fs.readFileSync(filename, 'utf-8');

    let user_reg_data = JSON.parse(data);

    let user_stat = fs.statsstync(filename);

    let stats_size=user_stats.size;

    console.log(`the file name ${filename} has ${stats_size}characters.`);
} else {
    console.log(`the file name ${filename} does not exist.`);
} 
