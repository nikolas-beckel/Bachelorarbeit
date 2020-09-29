// fetch('https://raw.githubusercontent.com/lucascranach/importer/master/docs/20200819/cda-graphics-v2.real.de.json')
//     .then(res => res.json())
//     .then(data => {
//         const items = data.items;
//
//         console.log('cda-graphics-v2.real.de.json');
//         items.forEach((it, i) => {
//             let item = it.titles.find(jt => jt.title.includes('Junker Jörg') && it.images !== null);
//             if (item !== undefined) {
//                 console.log(data.items[i]);
//             }
//         })
//
//         // einzelnesItem(items, 'DE_MdbKL_946');
//     });

// fetch('https://raw.githubusercontent.com/lucascranach/importer/master/docs/20200819/cda-graphics-v2.virtual.de.json')
//     .then(res => res.json())
//     .then(data => {
//        const items = data.items;
//
//         console.log('cda-graphics-v2.virtual.de.json');
//         items.forEach((it, i) => {
//             let item = it.titles.find(jt => jt.title.includes('Junker Jörg') && it.images !== null);
//             if (item !== undefined) {
//                 console.log(data.items[i]);
//             }
//         })
//
//         // einzelnesItem(items, 'DE_MdbKL_946');
//     });

fetch('https://raw.githubusercontent.com/lucascranach/importer/master/docs/20200819/cda-paintings-v2.de.json')
    .then(res => res.json())
    .then(data => {
        const items = data.items;

        console.log('cda-paintings-v2.de.json');
        items.forEach((it, i) => {
            let item = it.titles.find(jt => jt.title.includes('Junker Jörg') && it.images !== null);
            if (item !== undefined) {
                console.log(data.items[i]);
            }
        })

        einzelnesItem(items, 'DE_MdbKL_946');
    });

function einzelnesItem(items, id) {
    console.log('EINZELNES ITEM', items.find(it => it.inventoryNumber === id));
}
