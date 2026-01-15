//-----> Use add and multiplication to calculate wood requirements
function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const parChairWood = 3;
    const perTableWood = 4;
    const perBedWood = 2;

    const totalChairWood = chairQuantity * parChairWood;
    const totalTableWood = tableQuantity * perTableWood;
    const totalBedWood = bedQuantity * perBedWood;

    const totalWood = totalChairWood + totalTableWood + totalBedWood;

    return totalWood;
}

console.log(woodQuantity(2, 3, 4));
